export default function Hero() {
  return (
    <>
      <section id="hero">
        <div className="hero-video parallax" data-speed="0.08">
          <video playsInline autoPlay muted loop>
            {/* <source src="https://bpract.com/wp-content/themes/bpract/assets/video/intro.mp4" type="video/mp4" /> */}
            <source src="https://res.cloudinary.com/dfig2zrrd/video/upload/v1773509006/Office-Meeting_ua6swo.mp4" type="video/mp4" />

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
              <p className="hero-top-note">We are</p>
              <div className="hero-title-wrap parallax" data-speed="0.08">
                <div className="hero-title-bg"></div>

                {/* <h1 className="h-title hero-title-text">
                <span className="w">S<span className="stroke">implifying</span></span>
                <span className="w">IT Consulting,</span><br />
                <span className="w hero-enterprise">Outsourcing</span><br />
                <span className="w grad">and</span><br />
                <span className="w stroke">Development&nbsp;</span><span className="w">Solutions</span>
                </h1> */}

                <h1 className="h-title hero-title-text">
                  <span className="w" style={{ fontFamily: "Outfit", fontWeight: '800', letterSpacing: '0.01em' }}>
                    Simplifying IT Consulting, Outsourcing & Development
                  </span>
                </h1>
                <p className="hero-bottom-note">Revolutionizing Future Digitally</p>
                <a href="/contact" className="btn btn-g hero-cta-button"><span>LETS HERE YOUR IDEAS</span></a>
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-mouse">
          <div className="mouse-icon"></div>
          <span>Scroll</span>
        </div>
      </section>
    </>
  );
}











