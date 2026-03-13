'use client';

export default function Testimonials() {
  const onImgError = (e) => {
    const img = e.currentTarget;
    const fallback = img.dataset.fallback;
    if (fallback && img.src !== fallback) img.src = fallback;
  };

  return (
    <section className="sec sec-alt" id="testimonials">
      <div className="pbg" data-speed="0.3"></div>
      <svg className="deco d1 testi-deco-1" viewBox="0 0 14 14">
        <circle cx="7" cy="7" r="5" fill="#3db54a" />
      </svg>
      <svg className="deco d2 testi-deco-2" viewBox="0 0 36 36">
        <circle cx="18" cy="18" r="15" fill="none" stroke="#3db54a" strokeWidth="2" />
      </svg>
      <svg className="deco d3 testi-deco-3" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="16" fill="none" stroke="#3db54a" strokeWidth="2" />
        <circle cx="20" cy="20" r="5" fill="#3db54a" />
      </svg>

      <div className="wrap">
        <div className="reveal">
          <span className="sec-tag">What They Say</span>
          <h2 className="sec-h">Testimonials<span className="grad">.</span></h2>
        </div>
        <div className="testi-wrap reveal d1">
          <div className="testi-track" id="tTrack">
            <div className="testi-card">
              <div className="testi-q">"</div>
              <p className="testi-txt">The professionalism, expertise, and ongoing support they provide have far exceeded our expectations. We consider them not just a service provider but a key part of our success.</p>
              <div className="testi-author">
                <img
                  className="testi-av"
                  src="https://bpract.com/wp-content/uploads/2023/07/joe.webp"
                  alt="Joe"
                  data-fallback="https://i.pravatar.cc/48?img=1"
                  onError={onImgError}
                />
                <div><div className="testi-name">Joe</div><div className="testi-role">CEO, CBT — New York</div></div>
              </div>
            </div>
            <div className="testi-card">
              <div className="testi-q">"</div>
              <p className="testi-txt">Choosing Bpract for our web development needs was the best decision we could have made. Their creative approach, attention to detail, and dedication to delivering a product that not only looks great but also performs flawlessly have significantly enhanced our online presence.</p>
              <div className="testi-author">
                <img
                  className="testi-av"
                  src="https://bpract.com/wp-content/uploads/2023/03/juan.webp"
                  alt="Juan Garcia"
                  data-fallback="https://i.pravatar.cc/48?img=2"
                  onError={onImgError}
                />
                <div><div className="testi-name">Juan Garcia</div><div className="testi-role">Cádiz — Spain</div></div>
              </div>
            </div>
            <div className="testi-card">
              <div className="testi-q">"</div>
              <p className="testi-txt">BPract Software Solutions exceeded our expectations with their customizable software that integrates seamlessly into our existing workflows.</p>
              <div className="testi-author">
                <img
                  className="testi-av"
                  src="https://bpract.com/wp-content/uploads/2023/07/javier.webp"
                  alt="Javier Florez"
                  data-fallback="https://i.pravatar.cc/48?img=3"
                  onError={onImgError}
                />
                <div><div className="testi-name">Javier Florez</div><div className="testi-role">Insys Communications — USA</div></div>
              </div>
            </div>
            <div className="testi-card">
              <div className="testi-q">"</div>
              <p className="testi-txt">Bpract has transformed our digital marketing strategy with their innovative and tailored approaches. Their deep understanding of digital trends has propelled our brand to new heights.</p>
              <div className="testi-author">
                <img
                  className="testi-av"
                  src="https://bpract.com/wp-content/uploads/2023/07/laura.webp"
                  alt="Laura Fernandez"
                  data-fallback="https://i.pravatar.cc/48?img=4"
                  onError={onImgError}
                />
                <div><div className="testi-name">Laura Fernandez</div><div className="testi-role">CEO at ACONITI Ltd — Madrid</div></div>
              </div>
            </div>
            <div className="testi-card">
              <div className="testi-q">"</div>
              <p className="testi-txt">Working with Bpract on our software development project was an exceptional experience. Their dedication to understanding our industry and needs resulted in a product that exceeded our expectations.</p>
              <div className="testi-author">
                <img
                  className="testi-av"
                  src="https://bpract.com/wp-content/uploads/2023/07/Zihad.webp"
                  alt="Md.Zihad A"
                  data-fallback="https://i.pravatar.cc/48?img=5"
                  onError={onImgError}
                />
                <div><div className="testi-name">Md.Zihad A</div><div className="testi-role">Global Marketing Project Manager</div></div>
              </div>
            </div>
          </div>
        </div>
        <div className="testi-nav">
          <button className="testi-btn prev" id="tPrev" aria-label="Previous">
            <svg className="icon icon-stroke" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14" className="icon-stroke" />
              <path d="M13 6l6 6-6 6" className="icon-stroke" />
            </svg>
          </button>
          <button className="testi-btn" id="tNext" aria-label="Next">
            <svg className="icon icon-stroke" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14" className="icon-stroke" />
              <path d="M13 6l6 6-6 6" className="icon-stroke" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
