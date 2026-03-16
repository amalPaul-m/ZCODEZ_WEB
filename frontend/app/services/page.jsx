'use client';

import { useEffect } from 'react';
import Chrome from '../../components/Chrome';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ClientScripts from '../../components/ClientScripts';

const allServices = [
  {
    id: 1,
    title: 'Product Engineering',
    details:
      'Design, build, and scale cutting-edge digital products with end-to-end engineering—from concept to deployment. We deliver innovative, high-performance solutions tailored to your vision. Engineered for innovation. Built for growth.',
  },
  {
    id: 2,
    title: 'SAP & Salesforce',
    details:
      'Enterprise-grade. Cloud-ready. Results-driven: End-to-end ERP solutions for finance, supply chain, HR & analytics. Streamline operations with scalable SAP and Salesforce integration, migration & support.',
  },
  {
    id: 3,
    title: 'Data Science & AI',
    details:
      'Harness intelligent automation, predictive analytics, and machine learning to transform your business. We build scalable AI systems that drive efficiency, insights, and innovation. Smart Algorithms. Smarter Outcomes.',
  },
  {
    id: 4,
    title: 'Cyber Security',
    details:
      'Protect your business with end-to-end security solutions—threat detection, vulnerability assessments, penetration testing, and compliance. We safeguard your data, networks, and cloud infrastructure from evolving cyber threats. Secure Today. Resilient Tomorrow.',
  },
  {
    id: 5,
    title: 'Cloud & DevOps',
    details:
      'Accelerate innovation with end-to-end cloud solutions and DevOps automation. We design, deploy, and manage scalable, secure, and high-performance cloud infrastructure. Build Fast. Scale Smart. Operate Securely.',
  },
  {
    id: 6,
    title: 'eCommerce',
    details:
      'Build, optimize, and scale your online store with seamless shopping experiences, secure payments, and data-driven growth strategies. Powered by Shopify, Magento, WooCommerce & custom tech stacks. Sell Smarter. Grow Faster.',
  },
  {
    id: 7,
    title: 'Blockchain',
    details:
      'Build secure, decentralized solutions with smart contracts, dApps, and enterprise blockchain integration. We enable trustless transactions, transparency, and next-gen digital assets. Innovate with Trust. Powered by Blockchain.',
  },
  {
    id: 8,
    title: 'Multi Level Marketing',
    details:
      'We deliver a professional MLM infrastructure for ambitious individuals. Our system includes product sourcing, e-commerce, and back-office support. Generate income via direct sales and a multi-tier leadership bonus structure.',
  },
];

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  return (
    <>
      <Chrome />
      <Navbar />
      <section className="sec" id="services-page" style={{ padding: '80px 20px' }}>
        <div className="wrap">
          <div className="reveal">
            <span className="sec-tag">Explore All Services</span>
            <h2 className="sec-h">All Services<span className="grad">.</span></h2>
          </div>

          <div className="svc-all-list" style={{ marginTop: '24px' }}>
            {allServices.map((svc) => (
              <div key={svc.id} className="svc-item" style={{ marginBottom: '24px' }}>
                <div className="svc-n">{svc.id}</div>
                <div>
                  <div className="svc-title">{svc.title}</div>
                  <p className="svc-desc" style={{ whiteSpace: 'pre-line', marginTop: '8px' }}>{svc.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      <ClientScripts />
    </>
  );
}
