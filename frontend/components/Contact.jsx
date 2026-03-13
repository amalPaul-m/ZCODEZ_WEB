'use client';

export default function Contact() {
  const onImgError = (e) => {
    e.currentTarget.style.display = 'none';
  };

  return (
    <section className="sec sec-alt" id="cta">
      <div className="pbg" data-speed="0.2"></div>
      <div className="wrap">
        <div className="talk-box reveal">
          <div className="talk-img">
            <img
              src="https://bpract.com/wp-content/uploads/2023/08/chatHr.webp"
              alt=""
              width="90"
              onError={onImgError}
            />
          </div>
          <div className="talk-cnt">
            <b>Let's discuss about your idea!</b>
            <div className="talk-links">
              <a href="mailto:info@bpract.com">info@bpract.com</a>
              <a href="https://wa.me/918129184448" target="_blank">+91 81291 84448</a>
            </div>
          </div>
          <div className="talk-act">
            <a href="https://wa.me/918129184448" target="_blank" className="btn btn-g"><span>Let's Talk</span></a>
          </div>
        </div>
      </div>
    </section>
  );
}



