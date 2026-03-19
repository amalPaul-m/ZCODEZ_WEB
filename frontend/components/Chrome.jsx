import Link from 'next/link';

export default function Chrome() {
  return (
    <>
      <button id="scrollTop" aria-label="Top"><svg className="icon icon-stroke" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19V5" /><path d="M6 11l6-6 6 6" /></svg></button>

      <div className="social-bar" id="socialBar">
        <ul>
          <li><a href="https://www.facebook.com/zcodez/" target="_blank">f</a></li>
          <li>
            <a href="https://www.instagram.com/zcodez/" target="_blank" aria-label="Instagram">
              <svg className="icon icon-stroke" viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" className="icon-fill" />
              </svg>
            </a>
          </li>
          <li><a href="https://twitter.com/zcodez" target="_blank">x</a></li>
          <li><a href="https://in.linkedin.com/company/zcodez-software-solutions-llp" target="_blank">in</a></li>
          <li><span className="lbl">Follow</span></li>
        </ul>
      </div>

      <div className="panel-bg" id="panelBg"></div>

      <aside className="side-panel" id="sidePanel">
        <button className="panel-close" id="panelClose" aria-label="Close"><svg className="icon icon-stroke" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12" /><path d="M18 6l-12 12" /></svg></button>
        <Link href="/" className="panel-logo" aria-label="Go to home page">b<span className="grad">pract</span></Link>
        <p className="panel-title">Do you have an idea in your mind?</p>
        <p className="panel-para">Any concept or idea should find its way. Whether you are a start-up or an established firm, you can share your ideas and perspectives with us. We ensure our guidance.</p>
        <div className="panel-links">
          <Link href="/#about">Credo</Link>
          <Link href="/#services">Capabilities</Link>
          <Link href="/#ai">Products</Link>
          <Link href="/#why">Careers</Link>
          <Link href="/#cta">Get in Touch</Link>
        </div>
        <div className="panel-contact">
          <b>Get in touch with us</b>
          <a href="mailto:info@zcodez.com">info@zcodez.com</a>
          <a href="https://wa.me/13468719427" target="_blank">+1 346 871 9427</a>
        </div>
        <div className="panel-addr">
          <b>zcodez Software Solutions LLP</b>
          Unit 1A, 4th floor, KSITIL,<br />
          Special Economic Zone, Cyberpark Campus,<br />
          Sahya building, Nillikkode P.O,<br />
          Kozhikode, 673017
        </div>
        <div className="panel-socials">
          <a href="https://www.facebook.com/zcodez/" target="_blank">f</a>
          <a href="https://www.instagram.com/zcodez/" target="_blank">ig</a>
          <a href="https://twitter.com/zcodez" target="_blank">x</a>
          <a href="https://in.linkedin.com/company/zcodez-software-solutions-llp" target="_blank">in</a>
        </div>
        <div className="panel-blob">
          <svg viewBox="0 0 1255 1304" preserveAspectRatio="none" className="panel-blob-svg">
            <defs>
              <linearGradient id="bG" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#3d51bf" />
                <stop offset="1" stopColor="#4f74ca" />
              </linearGradient>
            </defs>
            <path
              fill="url(#bG)"
              d="M605.8,0C964.3,3.5,1255,290.6,1255,649s-295.1,705.1-649.2,649c-468.7-74.3-51.2-462.3-365.3-587.6C-227,523.8,36.6-5.5,605.8,0z"
            >
              <animate
                attributeName="d"
                dur="14s"
                repeatCount="indefinite"
                values="M605.8,0C964.3,3.5,1255,290.6,1255,649s-295.1,705.1-649.2,649c-468.7-74.3-51.2-462.3-365.3-587.6C-227,523.8,36.6-5.5,605.8,0z;
          M607.2-16.6c358.5,3.5,623,343.2,623,701.6s-120.8,655.6-474.9,599.5c-468.7-74.3-21.9-193.3-336-318.6C-48.3,779.3,38-22.1,607.2-16.6z;
          M669.5,4.8C1028,8.3,1246,276.6,1246,635s93.2,592.3-260.9,536.2c-468.7-74.3-246.6-28.9-560.7-154.2C-43.2,830.4,100.3-0.7,669.5,4.8z;
          M605.8,0C964.3,3.5,1255,290.6,1255,649s-295.1,705.1-649.2,649c-468.7-74.3-51.2-462.3-365.3-587.6C-227,523.8,36.6-5.5,605.8,0z"
              />
            </path>
          </svg>
        </div>
      </aside>
    </>
  );
}


