'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const onLogoError = (e) => {
    e.currentTarget.style.display = 'none';
    const txt = document.getElementById('navLogoTxt');
    if (txt) txt.style.display = 'block';
  };

  return (
    <nav id="nav" className="fixed inset-x-0 top-0 z-[1000]">
      <div className="nav-wrap mx-auto flex h-full max-w-[1340px] items-center">
        <Link className="nav-logo flex shrink-0 items-center gap-2.5" href="/" id="navLogoLink">
          <Image
            id="navLogoImg"
            src="https://res.cloudinary.com/dfig2zrrd/image/upload/v1773466147/zcodez-logo_sm4lnr.png"
            alt="zcodez"
            width={180}
            height={55}
            onError={onLogoError}
          />
        </Link>

        <ul className="nav-links ml-auto items-center gap-1">
          <li><Link href="/#about">Credo</Link></li>
          <li><Link href="/#services">Capabilities</Link></li>
          <li><Link href="/#ai">Products</Link></li>
          <li><Link href="/#why">Careers</Link></li>
          <li><Link href="/#cta">Get in Touch</Link></li>
        </ul>

        <div className="nav-right ml-4 flex shrink-0 items-center gap-2">
          <button className="theme-btn inline-flex items-center justify-center" id="themeBtn" title="Toggle theme">
            <span className="i-dark"><svg className="icon icon-stroke" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4" className="icon-stroke" /><path d="M12 2v3" className="icon-stroke" /><path d="M12 19v3" className="icon-stroke" /><path d="M2 12h3" className="icon-stroke" /><path d="M19 12h3" className="icon-stroke" /><path d="M4.9 4.9l2.1 2.1" className="icon-stroke" /><path d="M17 17l2.1 2.1" className="icon-stroke" /><path d="M4.9 19.1l2.1-2.1" className="icon-stroke" /><path d="M17 7l2.1-2.1" className="icon-stroke" /></svg></span>
            <span className="i-light"><svg className="icon icon-fill" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 14.5A7.5 7.5 0 1 1 9.5 3a9 9 0 1 0 11.5 11.5Z" className="icon-fill" /></svg></span>
          </button>
          <a href="https://wa.me/13468719427" target="_blank" className="nav-cta inline-flex items-center gap-2">
            <svg viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            <span>Let&apos;s talk</span>
          </a>
          <button className="ham-btn inline-flex items-center justify-center" id="hamBtn" aria-label="Menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </nav>
  );
}




