export default function Hero() {
  return (
    <>
      <section id="hero">
        <div className="hero-video parallax" data-speed="0.08">
          <video playsInline autoPlay muted loop>
            <source src="https://bpract.com/wp-content/themes/bpract/assets/video/intro.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-grid" id="heroGrid"></div>
        <div className="hero-glow" id="heroGlow"></div>
        <div className="hero-orb orb-1 parallax" data-speed="0.18"></div>
        <div className="hero-orb orb-2 parallax" data-speed="0.12"></div>

        <div className="hero-inner">
          <div className="hero-row">
            <div className="hero-left">
              <div className="hero-title-wrap parallax" data-speed="0.08"><div className="hero-title-bg"></div><h1 className="h-title hero-title-text">
                <span className="w">B<span className="stroke">uild</span></span>
                <span className="w"> Your</span><br />
                <span className="w hero-enterprise">Enterprise</span><br />
                <span className="w grad">with Our</span><br />
                <span className="w stroke">Software&nbsp;</span><span className="w">Solutions</span>
              </h1></div>
            </div>
            <div className="hero-right">
              <p className="hero-para">
                zcodez is a trusted software development company in India helping startups and enterprises build secure, scalable, and performance-driven digital products. We specialize in custom software development, web and mobile applications, cloud solutions, and UI/UX design that support real business growth.
              </p>
              <div className="hero-btns">
                <a href="#cta" className="btn btn-g"><span>Connect with us</span></a>
                <a href="#services" className="btn btn-o"><span>Our Services <svg className="btn-icon icon-stroke" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14" className="icon-stroke" /><path d="M13 6l6 6-6 6" className="icon-stroke" /></svg></span></a>
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-mouse">
          <div className="mouse-icon"></div>
          <span>Scroll</span>
        </div>
      </section>

      <div className="marquee-bar parallax" data-speed="0.03">
        <div className="marquee-track">
          <div className="marquee-item">Web Development</div>
          <div className="marquee-item">Mobile Apps</div>
          <div className="marquee-item">UI/UX Design</div>
          <div className="marquee-item">Digital Marketing</div>
          <div className="marquee-item">AI Solutions</div>
          <div className="marquee-item">Cloud Services</div>
          <div className="marquee-item">Software Development</div>
          <div className="marquee-item">CMS Development</div>
          <div className="marquee-item">Web Development</div>
          <div className="marquee-item">Mobile Apps</div>
          <div className="marquee-item">UI/UX Design</div>
          <div className="marquee-item">Digital Marketing</div>
          <div className="marquee-item">AI Solutions</div>
          <div className="marquee-item">Cloud Services</div>
          <div className="marquee-item">Software Development</div>
          <div className="marquee-item">CMS Development</div>
        </div>
      </div>
    </>
  );
}









