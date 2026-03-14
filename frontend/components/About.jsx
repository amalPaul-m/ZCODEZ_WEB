export default function About() {
  return (
    <>
      <section className="sec sec-alt" id="about">
        <div className="pbg" data-speed="0.3"></div>

        <svg className="deco d1 about-deco-1" viewBox="0 0 14 14">
          <circle cx="7" cy="7" r="5" fill="#3d77b5" />
        </svg>
        <svg className="deco d2 about-deco-2" viewBox="0 0 36 36">
          <circle cx="18" cy="18" r="15" fill="none" stroke="#3d77b5" strokeWidth="2" />
        </svg>
        <svg className="deco d3 about-deco-3" viewBox="0 0 40 40">
          <circle cx="20" cy="20" r="16" fill="none" stroke="#3d77b5" strokeWidth="2" />
          <circle cx="20" cy="20" r="5" fill="#3d77b5" />
        </svg>

        <div className="wrap">
          <div className="reveal about-intro">
            <svg className="blob-wrap" viewBox="0 0 280 280" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <filter id="goo1">
                  <feGaussianBlur stdDeviation="9" result="b" />
                  <feColorMatrix in="b" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 18 -7" result="g" />
                  <feComposite in="SourceGraphic" in2="g" operator="atop" />
                </filter>
              </defs>
              <g filter="url(#goo1)">
                <circle className="bc" cx="140" cy="135" r="85" />
                <circle className="bc" cx="140" cy="145" r="85" />
                <circle className="bc" cx="135" cy="140" r="85" />
                <circle className="bc" cx="145" cy="140" r="85" />
              </g>
            </svg>
            <h2 className="intro-head about-intro-title">Web &amp; Software Development Company</h2>
            <p className="about-intro-p">
              A highly acclaimed software development venture, creating compelling products globally.
            </p>
          </div>
          <div className="reveal d2 about-sub">
            <p>
              zcodez is a successful business venture recognized with awards, providing high-quality software solutions to businesses all over the world. Established in 2015, zcodez began its journey as the <a href="#" className="link-blue">best branding agency</a>, and has grown into a leading software development company. Each project is handled with innovative supervision and advanced technology, granting a creative platform that enhances productivity and efficiency.
            </p>
          </div>
        </div>
      </section>

      <section className="sec sec-alt sec-tight">
        <div className="wrap">
          <div className="stats reveal">
            <div className="stat">
              <div className="stat-n" data-to="8" data-sfx="+">0+</div>
              <div className="stat-l">Years of<br />Experience<span className="gd">.</span></div>
            </div>
            <div className="stat">
              <div className="stat-n" data-to="30" data-sfx="+">0+</div>
              <div className="stat-l">Skilled<br />Professionals<span className="gd">.</span></div>
            </div>
            <div className="stat">
              <div className="stat-n" data-to="300" data-sfx="+">0+</div>
              <div className="stat-l">Projects<br />Worldwide<span className="gd">.</span></div>
            </div>
            <div className="stat">
              <div className="stat-n">100%</div>
              <div className="stat-l">Customer<br />Satisfaction<span className="gd">.</span></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}




