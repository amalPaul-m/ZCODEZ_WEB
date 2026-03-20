'use client';
// File Purpose: Implements the dedicated contact page and client-side form interactions.


import { useState } from 'react';
import Chrome from '../../components/Chrome';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ClientScripts from '../../components/ClientScripts';

const SERVICE_OPTIONS = [
  'Product Engineering',
  'SAP & Salesforce',
  'Data Science & AI',
  'Cyber Security',
  'Cloud & DevOps',
  'eCommerce',
  'Blockchain',
  'Multi Level Marketing',
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    countryCode: '+91',
    mobile: '',
    email: '',
    service: SERVICE_OPTIONS[0],
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const mobileTrimmed = form.mobile.trim();
    const countryCodeTrimmed = form.countryCode.trim();
    const mobileDigits = mobileTrimmed.replace(/\D/g, '');
    const countryCodeDigits = countryCodeTrimmed.replace(/\D/g, '');

    if (!form.name.trim() || !form.email.trim()) {
      setStatus({ type: 'error', message: 'Please provide your name and email address.' });
      return;
    }
    if (mobileTrimmed && mobileDigits.length !== 10) {
      setStatus({
        type: 'error',
        message: 'Please enter a valid 10-digit mobile number.',
      });
      return;
    }
    if (mobileTrimmed && (!countryCodeDigits || countryCodeTrimmed[0] !== '+')) {
      setStatus({
        type: 'error',
        message: 'Please include a valid country code (e.g., +91).',
      });
      return;
    }

    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const mobileFull = mobileTrimmed
        ? `${countryCodeTrimmed} ${mobileDigits}`
        : '';
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          mobile: mobileFull,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.ok) {
        throw new Error(data.error || 'We could not submit your request at this time.');
      }

      setStatus({ type: 'success', message: 'Thank you. Your request has been submitted successfully.' });
      setForm({
        name: '',
        countryCode: '+91',
        mobile: '',
        email: '',
        service: SERVICE_OPTIONS[0],
        message: '',
      });
    } catch (error) {
      setStatus({ type: 'error', message: `Submission failed. ${error.message}` });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Chrome />
      <Navbar />
      <main className="sec" style={{ padding: '80px 20px', minHeight: '70vh' }}>
        <div className="wrap">
          <div className="reveal contact-intro">
            <span className="sec-tag">Get in Touch</span>
            <h2 className="sec-h">We Would Love to Hear From You<span className="grad">.</span></h2>
            <p className="contact-intro-text">
              Share your idea and we will respond quickly. We support product strategy, digital transformation, and custom software solutions.
            </p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-field">
                <label htmlFor="name">Name<span className="req">*</span></label>
                <input id="name" name="name" placeholder="Your full name" value={form.name} onChange={handleChange} required />
              </div>
              <div className="form-field">
                <label htmlFor="mobile">Mobile Number</label>
                <div className="phone-field">
                  <label className="sr-only" htmlFor="countryCode">Country code</label>
                  <select
                    id="countryCode"
                    name="countryCode"
                    className="phone-code"
                    value={form.countryCode}
                    onChange={handleChange}
                    aria-label="Country code"
                  >
                    <option value="+91">+91 (IN)</option>
                    <option value="+1">+1 (US)</option>
                    <option value="+44">+44 (UK)</option>
                    <option value="+971">+971 (UAE)</option>
                    <option value="+61">+61 (AU)</option>
                    <option value="+65">+65 (SG)</option>
                  </select>
                  <input
                    id="mobile"
                    name="mobile"
                    className="phone-number"
                    placeholder="eg: 9876543210"
                    value={form.mobile}
                    onChange={handleChange}
                    inputMode="tel"
                  />
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="email">Email Address<span className="req">*</span></label>
                <input id="email" name="email" type="email" placeholder="you@example.com" value={form.email} onChange={handleChange} required />
              </div>
              <div className="form-field">
                <label htmlFor="service">How can we help?</label>
                <select id="service" name="service" value={form.service} onChange={handleChange}>
                  {SERVICE_OPTIONS.map((item) => (
                    <option key={item} value={item}>{item}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-field full-width">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={6} value={form.message} onChange={handleChange} />
            </div>

            <button type="submit" className="btn btn-g contact-submit" disabled={loading}>
              {loading ? 'Submitting...' : 'Submit'}
            </button>
            {status.message && (
              <p className={"status-message " + (status.type === 'success' ? 'success' : 'error')}>
                {status.message}
              </p>
            )}
            <p className="contact-alt">
              <span className="contact-alt-label">Or</span>
              <span className="contact-alt-text">
                Email us directly at <a href="mailto:info@zcodez.com">info@zcodez.com</a>
              </span>
            </p>
          </form>
        </div>
      </main>
      <Footer />
      <ClientScripts />
    </>
  );
}

