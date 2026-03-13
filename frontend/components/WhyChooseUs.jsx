'use client';

export default function WhyChooseUs() {
  const onImgError = (e) => {
    const img = e.currentTarget;
    const fallback = img.dataset.fallback;
    if (fallback && img.src !== fallback) img.src = fallback;
  };

  return (
    <section className="sec" id="why">
      <div className="pbg" data-speed="0.35"></div>

      <div className="wrap">
        <div className="reveal why-center">
          <span className="sec-tag">Why Choose Us</span>
          <h2 className="sec-h">Our Specialities<span className="grad">.</span></h2>
          <p className="sec-p">
            We have professional experts with strong technical knowledge and specialized experience in handling modern software standards. Over the years, we have built a solid knowledge base that helps us deliver solutions aligned with client requirements, long-term goals, and budget expectations.
          </p>
        </div>
        <div className="why-list reveal d1">
          <div className="why-item">
            <div className="why-n">1</div>
            <div>
              <div className="why-name">Best Practices</div>
              <p className="why-desc">Enriched with best practices. We consistently strive for excellence.</p>
            </div>
          </div>
          <div className="why-item">
            <div className="why-n">2</div>
            <div>
              <div className="why-name">Support</div>
              <p className="why-desc">Our mission is to provide support to our customers. Support is the key to our success.</p>
            </div>
          </div>
          <div className="why-item">
            <div className="why-n">3</div>
            <div>
              <div className="why-name">Innovation</div>
              <p className="why-desc">Constantly at the forefront. We keep updated about technology and its advancements.</p>
            </div>
          </div>
        </div>

        <div className="community-box reveal d2">
          <svg className="deco d1 why-deco-1" viewBox="0 0 14 14">
            <circle cx="7" cy="7" r="5" fill="#3db54a" />
          </svg>
          <svg className="deco d2 why-deco-2" viewBox="0 0 36 36">
            <circle cx="18" cy="18" r="15" fill="none" stroke="#3db54a" strokeWidth="2" />
          </svg>
          <div className="community-inner">
            <div className="community-text">
              <h3>Join our community<span className="grad">.</span></h3>
              <p>Bpract is an innovative software company founded in 2015 that contributes expert solutions to clients worldwide. We have an experienced team of professionals who specialize in web design and development, digital marketing, software design, CMS development, UI/UX design, and many more.</p>
              <p>As the digital era is transforming like never before, adapting to new technologies is crucial for any business. As a trusted <a href="#" className="link-blue">software development company in Calicut</a>, we offer incredible web and software development services to various businesses and help them stay ahead of the curve.</p>
            </div>
            <div className="community-img">
              <img
                src="https://bpract.com/wp-content/uploads/2023/08/INTROOO.webp"
                alt="Community"
                data-fallback="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80"
                onError={onImgError}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}




