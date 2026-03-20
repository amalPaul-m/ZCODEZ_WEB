'use client';

import Image from 'next/image';

export default function Contact() {
  const onImgError = (e) => {
    e.currentTarget.style.display = 'none';
  };
  const whatsappHref =
    'https://wa.me/13468719427';

  return (
    <section className="sec sec-alt" id="cta">
      <div className="pbg" data-speed="0.2"></div>
      <div className="wrap">
        <div className="talk-box reveal">
          <div className="talk-img">
            <Image
              src="https://bpract.com/wp-content/uploads/2023/08/chatHr.webp"
              alt=""
              width={90}
              height={90}
              onError={onImgError}
            />
          </div>
          <div className="talk-cnt">
            <b>Let&apos;s discuss about your idea!</b>
            <div className="talk-links">
              <a href="mailto:info@zcodez.com">info@zcodez.com</a>
              <span className="talk-sep">|</span>
              <span className="talk-link-label">India:</span>
              <a href="tel:+917034313431">+91 70 3431 3431</a>
              <span className="talk-sep">|</span>
              <span className="talk-link-label">USA:</span>
              <a href="https://wa.me/13468719427">+1 346 871 9427</a>
            </div>
          </div>
          <div className="talk-act">
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn btn-g"><span>Let&apos;s Talk</span></a>
          </div>
        </div>
      </div>
    </section>
  );
}


