'use client';

import Image from 'next/image';

export default function Clients() {
  const fallbackStyle = {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '17px',
    fontWeight: 800,
    color: 'rgba(255,255,255,.2)',
    display: 'none'
  };

  const onImgError = (e) => {
    const img = e.currentTarget;
    img.style.display = 'none';
    const fallback = img.nextElementSibling;
    if (fallback) fallback.style.display = 'inline-block';
  };

  return (
    <section id="clients">
      <div className="wrap">
        <p className="clients-lbl">Trusted by businesses worldwide</p>
        <div className="clients-row">
          <div className="clients-item">
            <Image
              src="https://bpract.com/wp-content/uploads/2023/03/cleint1.webp"
              alt="Client 1"
              width={160}
              height={60}
              onError={onImgError}
            />
            <span style={fallbackStyle}>TechCorp</span>
          </div>
          <div className="clients-item">
            <Image
              src="https://bpract.com/wp-content/uploads/2023/03/cleint2.webp"
              alt="Client 2"
              width={160}
              height={60}
              onError={onImgError}
            />
            <span style={fallbackStyle}>GlobalMart</span>
          </div>
          <div className="clients-item">
            <Image
              src="https://bpract.com/wp-content/uploads/2023/03/cleint3.webp"
              alt="Client 3"
              width={160}
              height={60}
              onError={onImgError}
            />
            <span style={fallbackStyle}>InnovateCo</span>
          </div>
          <div className="clients-item">
            <Image
              src="https://bpract.com/wp-content/uploads/2023/03/cleint4.webp"
              alt="Campuslog"
              width={160}
              height={60}
              onError={onImgError}
            />
            <span style={fallbackStyle}>Campuslog</span>
          </div>
        </div>
      </div>
    </section>
  );
}
