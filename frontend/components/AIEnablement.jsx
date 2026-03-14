export default function AIEnablement() {
  return (
    <section className="sec sec-alt" id="ai">
      <div className="pbg" data-speed="0.25"></div>
      <svg className="deco d1 ai-deco-1" viewBox="0 0 14 14">
        <circle cx="7" cy="7" r="5" fill="#3f3db5" />
      </svg>
      <svg className="deco d2 ai-deco-2" viewBox="0 0 36 36">
        <circle cx="18" cy="18" r="15" fill="none" stroke="#3db54a" strokeWidth="2" />
      </svg>

      <div className="wrap">
        <div className="reveal ai-center-740">
          <h2 className="sec-h">AI Enablement Across Our<br /><span className="grad">Software Services</span></h2>
          <p className="sec-p">
            We integrate AI capabilities across our core software development offerings to help businesses improve efficiency, accuracy, and decision-making. Our approach focuses on practical use cases that strengthen existing systems rather than replacing them.
          </p>
        </div>
        <div className="ai-grid reveal d1">
          <div className="ai-card"><div className="ai-dot"></div><p>AI-powered automation for business applications</p></div>
          <div className="ai-card"><div className="ai-dot"></div><p>Intelligent chatbots for websites and mobile apps</p></div>
          <div className="ai-card"><div className="ai-dot"></div><p>Data analysis and reporting using machine learning models</p></div>
          <div className="ai-card"><div className="ai-dot"></div><p>AI integrations with existing CRM, ERP, and custom systems</p></div>
        </div>
        <div className="reveal d2 ai-center-680">
          <p className="sec-p">This approach allows businesses to adopt AI without disrupting their existing technology stack, ensuring stability, security, and scalability.</p>
        </div>
      </div>
    </section>
  );
}



