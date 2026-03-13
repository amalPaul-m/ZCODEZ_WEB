'use client';

export default function Services() {
  const onImgError = (e) => {
    const img = e.currentTarget;
    const fallback = img.dataset.fallback;
    if (fallback && img.src !== fallback) img.src = fallback;
  };

  return (
    <section className="sec" id="services">
      <div className="pbg" data-speed="0.4"></div>
      <svg className="spin-ring services-ring" viewBox="0 0 408 408">
        <defs>
          <linearGradient id="rg1" x1="75%" y1="83%" x2="11%" y2="16%">
            <stop offset="0" stopColor="#3db54a" />
            <stop offset="1" stopColor="#a0cd4e" />
          </linearGradient>
        </defs>
        <circle cx="204" cy="204" r="190" fill="none" stroke="url(#rg1)" strokeWidth="28" opacity=".4" />
      </svg>

      <div className="wrap">
        <div className="reveal">
          <span className="sec-tag">What We Do</span>
          <h2 className="sec-h">Services<span className="grad">.</span></h2>
        </div>
        <div className="svc-layout">
          <div className="svc-left reveal d1">
            <div className="svc-item on" data-svc="0">
              <div className="svc-n">1</div>
              <div>
                <div className="svc-title">UI/UX Designing</div>
                <p className="svc-desc">We specialize in cutting-edge UI/UX design services. We are always available.</p>
              </div>
            </div>
            <div className="svc-item" data-svc="1">
              <div className="svc-n">2</div>
              <div>
                <div className="svc-title">Digital Marketing</div>
                <p className="svc-desc">We offer digital marketing services for your business. We are highly passionate about digital marketing.</p>
              </div>
            </div>
            <div className="svc-item" data-svc="2">
              <div className="svc-n">3</div>
              <div>
                <div className="svc-title">Mobile App Development</div>
                <p className="svc-desc">Excellent quality, high performance, and efficiency are assured for our Android, iOS, and web applications.</p>
              </div>
            </div>
            <div className="svc-item" data-svc="3">
              <div className="svc-n">4</div>
              <div>
                <div className="svc-title">Web Application &amp; Software Development</div>
                <p className="svc-desc">We build web applications for your business.</p>
              </div>
            </div>
            <div className="services-more">
              <a href="#" className="btn btn-g"><span>More Services</span></a>
            </div>
          </div>

          <div className="svc-right reveal d2">
            <div className="svc-img on">
              <img
                src="https://bpract.com/wp-content/uploads/2023/07/uiux-1.webp"
                alt="UI/UX"
                data-fallback="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=700&q=80"
                onError={onImgError}
              />
            </div>
            <div className="svc-img">
              <img
                src="https://bpract.com/wp-content/uploads/2023/07/digital-marketing.webp"
                alt="Digital Marketing"
                data-fallback="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=80"
                onError={onImgError}
              />
            </div>
            <div className="svc-img">
              <img
                src="https://bpract.com/wp-content/uploads/2023/07/appdev.webp"
                alt="App Dev"
                data-fallback="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=700&q=80"
                onError={onImgError}
              />
            </div>
            <div className="svc-img">
              <img
                src="https://bpract.com/wp-content/uploads/2023/07/developers-img.webp"
                alt="Web Dev"
                data-fallback="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=700&q=80"
                onError={onImgError}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}




