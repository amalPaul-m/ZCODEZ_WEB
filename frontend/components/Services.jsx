'use client';

import Image from 'next/image';
import Link from 'next/link';

const mainServices = [
  {
    id: 1,
    title: 'Product Engineering',
    short: 'Design, build, and scale cutting-edge digital products.',
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&q=80',
    alt: 'Product Engineering',
  },
  {
    id: 2,
    title: 'SAP & Salesforce',
    short: 'Enterprise-grade ERP solutions with cloud-ready integration.',
    img: 'https://images.unsplash.com/photo-1581090871659-6ab4d3f4250f?w=900&q=80',
    alt: 'SAP and Salesforce',
  },
  {
    id: 3,
    title: 'Data Science & AI',
    short: 'Predictive analytics and scalable AI systems for business transformation.',
    img: 'https://images.unsplash.com/photo-1555949963-aa79dcee981d?w=900&q=80',
    alt: 'Data Science and AI',
  },
  {
    id: 4,
    title: 'Cyber Security',
    short: 'Threat detection, vulnerability assessments, and compliance protection.',
    img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=900&q=80',
    alt: 'Cyber Security',
  },
];

export default function Services() {
  return (
    <section className="sec" id="services">
      <div className="pbg" data-speed="0.4"></div>
      <svg className="spin-ring services-ring" viewBox="0 0 408 408">
        <defs>
          <linearGradient id="rg1" x1="75%" y1="83%" x2="11%" y2="16%">
            <stop offset="0" stopColor="#3f3db5" />
            <stop offset="1" stopColor="#4e78cd" />
          </linearGradient>
        </defs>
        <circle cx="204" cy="204" r="190" fill="none" stroke="url(#rg1)" strokeWidth="28" opacity=".4" />
      </svg>

      <div className="wrap">
        <div className="reveal">
          {/* <span className="sec-tag">What We Do</span> */}
          <h2 className="sec-h">Services<span className="grad">.</span></h2>
        </div>

        <div className="svc-layout">
          <div className="svc-left reveal d1">
            {mainServices.map((svc) => (
              <div className="svc-item" key={svc.id}>
                <div className="svc-n">{svc.id}</div>
                <div>
                  <div className="svc-title">{svc.title}</div>
                  <p className="svc-desc">{svc.short}</p>
                </div>
              </div>
            ))}

            <div className="services-more">
              <Link href="/services" className="btn btn-g">
                <span>More Services</span>
              </Link>
            </div>
          </div>

          <div className="svc-right reveal d2">
            {mainServices.map((svc, index) => (
              <div className={`svc-img ${index === 0 ? 'on' : ''}`} key={`svc-img-${svc.id}`}>
                <Image
                  src={svc.img}
                  alt={svc.alt}
                  fill
                  sizes="(max-width: 1024px) 80vw, 40vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
