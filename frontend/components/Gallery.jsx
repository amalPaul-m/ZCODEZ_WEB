'use client';

import Image from 'next/image';

export default function Gallery() {
  const onImgError = (e) => {
    const img = e.currentTarget;
    const fallback = img.dataset.fallback;
    if (fallback && img.src !== fallback) img.src = fallback;
  };

  return (
    <section className="sec sec-alt relative overflow-hidden" id="blogs">
      <div className="pbg" data-speed="0.28"></div>
      <div className="wrap mx-auto w-full">
        <div className="reveal">
          <span className="sec-tag">Blogs and News</span>
          <h2 className="sec-h">Latest Posts<span className="grad">.</span></h2>
          <p className="blogs-desc">
            We regularly add new content to our website &mdash; articles, blogs, and informative content.
          </p>
        </div>
        <div className="blog-grid reveal d1 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <a className="blog-card group relative block overflow-hidden rounded-2xl" href="https://zcodez.com/how-much-does-mobile-app-development-cost-in-2026/" target="_blank">
            <Image
              src="https://zcodez.com/wp-content/uploads/2026/02/closeup-shot-entrepreneur-working-from-home-his-personal-finances-savings-1-825x550.jpg"
              alt="Blog 1"
              data-fallback="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=75"
              onError={onImgError}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              style={{ objectFit: 'cover' }}
            />
            <div className="blog-overlay absolute inset-x-0 bottom-0">
              <div className="blog-date">17 Feb</div>
              <div className="blog-title">How Much Does Mobile App Development Cost in 2026?</div>
              <div className="blog-author">By Reja Rapheekh</div>
            </div>
          </a>
          <a className="blog-card group relative block overflow-hidden rounded-2xl" href="https://zcodez.com/ai-in-software-development-role-benefits/" target="_blank">
            <Image
              src="https://zcodez.com/wp-content/uploads/2026/01/6597472-g-bh-825x550.jpg"
              alt="Blog 2"
              data-fallback="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=75"
              onError={onImgError}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              style={{ objectFit: 'cover' }}
            />
            <div className="blog-overlay absolute inset-x-0 bottom-0">
              <div className="blog-date">24 Jan</div>
              <div className="blog-title">The Role of AI in Modern Software Development</div>
              <div className="blog-author">By Reja Rapheekh</div>
            </div>
          </a>
          <a className="blog-card group relative block overflow-hidden rounded-2xl" href="https://zcodez.com/latest-trends-in-web-development-for-2026/" target="_blank">
            <Image
              src="https://bpract.com/wp-content/uploads/2026/01/programming-background-collage-3-824x550.jpg"
              alt="Blog 3"
              data-fallback="https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600&q=75"
              onError={onImgError}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              style={{ objectFit: 'cover' }}
            />
            <div className="blog-overlay absolute inset-x-0 bottom-0">
              <div className="blog-date">9 Jan</div>
              <div className="blog-title">Latest Trends in Web Development for 2026</div>
              <div className="blog-author">By Reja Rapheekh</div>
            </div>
          </a>
        </div>
        <div className="reveal d2 blogs-cta">
          <a href="#" className="btn btn-g"><span>View more blogs</span></a>
        </div>
      </div>
    </section>
  );
}
