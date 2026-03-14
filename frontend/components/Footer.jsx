'use client';

export default function Footer() {
  const onLogoError = (e) => {
    e.currentTarget.style.display = 'none';
    const txt = document.getElementById('flt');
    if (txt) txt.style.display = 'block';
  };

  return (
    <footer>
      <div className="footer-vid">
        <video playsInline autoPlay muted loop>
          <source src="https://bpract.com/wp-content/themes/bpract/assets/video/bannergif.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-col">
            <img
              className="footer-logo-img"
              src="https://res.cloudinary.com/dfig2zrrd/image/upload/v1773466147/zcodez-logo_sm4lnr.png"
              alt="zcodez"
              onError={onLogoError}
            />
            <div className="footer-logo-txt is-hidden" id="flt">b<span className="grad">pract</span></div>
            <p className="footer-tag">"The term 'zcodez' is the quintessence of 'being practical with best practices', and with this vision, zcodez has been growing fast ever since its inception in 2015."</p>
            <div className="footer-contacts">
              <div className="fc-item">
                <span className="fc-icon">
                  <svg className="icon icon-stroke" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.31 1.77.57 2.61a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.47-1.09a2 2 0 0 1 2.11-.45c.84.26 1.71.45 2.61.57a2 2 0 0 1 1.72 2z" className="icon-stroke" />
                  </svg>
                </span>
                <a href="https://wa.me/918590137119" target="_blank">+91 8590137119</a>
              </div>
              <div className="fc-item">
                <span className="fc-icon">
                  <svg className="icon icon-stroke" viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="2" y="4" width="20" height="16" rx="2" ry="2" className="icon-stroke" />
                    <path d="m22 7-10 7L2 7" className="icon-stroke" />
                  </svg>
                </span>
                <a href="mailto:info@zcodez.com">info@zcodez.com</a>
              </div>
              <div className="fc-item">
                <span className="fc-icon">
                  <svg className="icon icon-stroke" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 21s-6-5.1-6-10a6 6 0 1 1 12 0c0 4.9-6 10-6 10z" className="icon-stroke" />
                    <circle cx="12" cy="11" r="2" className="icon-stroke" />
                  </svg>
                </span>
                <span>Unit 1A, 4th floor, KSITIL, Special Economic Zone, Cyberpark Campus, Sahya building, Nellikkode P.O, Kozhikode, 673016</span>
              </div>
            </div>
          </div>
          <div className="footer-col">
            <h5>Services</h5>
            <div className="footer-links">
              <a href="#">Web Design &amp; Development</a>
              <a href="#">Digital Marketing</a>
              <a href="#">Apps Development</a>
              <a href="#">Software Development</a>
              <a href="#">Custom CMS Development</a>
              <a href="#">UI/UX Design</a>
            </div>
          </div>
          <div className="footer-col">
            <h6>Company</h6>
            <div className="footer-links">
              <a href="#">zcodez Academy</a>
              <a href="#">What we do</a>
              <a href="#">Who we are</a>
              <a href="#">Team</a>
              <a href="#">Careers</a>
              <a href="#">Blogs</a>
              <a href="#">Reach us</a>
              <a href="#">Life at zcodez</a>
            </div>
          </div>
          <div className="footer-col">
            <h6>Products</h6>
            <div className="footer-links">
              <a href="#">Affiliate Marketing Software</a>
              <a href="#">Project Management Software</a>
              <a href="#">Event Booking Software</a>
              <a href="#">Property Management System</a>
              <a href="#">Time Management Software</a>
              <a href="#">Delivery Management Software</a>
            </div>
          </div>
        </div>
        <div className="footer-btm-links">
          <a href="/privacy">Privacy policy</a>
          <a href="/terms">Terms &amp; Conditions</a>
          <a href="#">Sitemap</a>
          <a href="#">Download company brochure</a>
        </div>
        <div className="footer-bar">
          <div className="footer-copy">Â© 2025 All rights reserved by zcodez Software Solutions LLP.</div>
          <div className="footer-socials">
            <a href="https://www.facebook.com/zcodez/" target="_blank">f</a>
            <a href="https://www.instagram.com/zcodez/" target="_blank">ig</a>
            <a href="https://twitter.com/zcodez" target="_blank">x</a>
            <a href="https://in.linkedin.com/company/zcodez-software-solutions-llp" target="_blank">in</a>
          </div>
        </div>
      </div>
    </footer>
  );
}


