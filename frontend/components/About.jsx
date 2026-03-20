// File Purpose: Renders the About/Credo section content and layout blocks on the home page.

export default function About() {
  return (
    <>
      <section className="sec sec-alt relative overflow-hidden" id="about">
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

        <div className="wrap mx-auto w-full">
          <div className="reveal about-intro mx-auto text-center">
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
            <h2 className="intro-head about-intro-title link-blue">Empowering Businesses Through Intelligent Transformation</h2>
            <p className="about-intro-p">
              At ZCODEZ, we are more than just consultantsâ€”we are your strategic partners in digital evolution. Founded with a vision to bridge the gap between complex enterprise technology and practical business solutions, we specialize in delivering world-class ERP implementation, AI-driven innovation, and expert consulting services.
            </p>
          </div>
          <div className="reveal d2 about-sub mx-auto text-center">
            <p> <b>Enterprise ERP Implementation</b></p>
            <p>
              We help businesses streamline operations through seamless implementation of industry-leading platforms including SAP, Salesforce, and Workday. From initial planning to go-live and beyond, our experts ensure your ERP investment delivers maximum ROI.              </p>
          </div><div className="reveal d2 about-sub mx-auto text-center">
            <p> <b>AI-Driven Projects</b></p>
            <p>
              The future is intelligent. We develop and implement cutting-edge Artificial Intelligence solutions that automate processes, unlock insights from your data, and give your business a competitive edge. Whether it's process automation, predictive analytics, or intelligent document processing, we turn AI potential into business reality.</p>
          </div>
          <div className="reveal d2 about-sub mx-auto text-center">
            <p> <b>Strategic Consulting</b></p>
            <p>
              Navigating digital transformation requires expert guidance. Our seasoned consultants provide strategic advisory services that align technology investments with your unique business goals, ensuring every decision drives growth and efficiency.</p>
          </div>

        </div>
      </section>

      <section className="sec sec-alt sec-tight">
        <div className="wrap mx-auto w-full">
          <div className="stats reveal grid gap-0 md:grid-cols-2 xl:grid-cols-4">
            <div className="stat">
              <div className="stat-n" data-to="15" data-sfx="+">0+</div>
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






