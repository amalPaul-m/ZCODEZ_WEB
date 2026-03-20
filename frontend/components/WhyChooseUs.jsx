'use client';
// File Purpose: Displays value propositions and reasons to choose the company.


export default function WhyChooseUs() {
  return (
    <section className="sec relative overflow-hidden" id="why">
      <div className="pbg" data-speed="0.35"></div>

      <div className="wrap mx-auto w-full">
        <div className="reveal why-center mx-auto text-center">
          <span className="sec-tag">Careers</span>
          <h2 className="sec-h">Discover opportunities to shape your future<span className="link-blue">.</span></h2>
          <p className="sec-p">
            We empower you to bring the change you want to see in the world.
          </p>
        </div>

        <div className="reveal d1" style={{ textAlign: 'center', marginTop: '28px' }}>
          <a href="#" className="btn btn-g inline-flex items-center justify-center gap-2">
            <span>Explore Careers</span>
            <svg className="btn-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14" className="icon-stroke" />
              <path d="M13 6l6 6-6 6" className="icon-stroke" />
            </svg>
          </a>
          <p style={{ marginTop: '30px' }}>
            Or send your CV to this email id{' '}
            <a href="mailto:info@zcodez.com" className="link-blue">info@zcodez.com</a>
          </p>
        </div>
      </div>
    </section>
  );
}



