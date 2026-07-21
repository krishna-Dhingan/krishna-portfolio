import React from 'react';
import './Education.css';

export default function Education() {
  return (
    <section className="education-section" id="education">
      <h2 className="section-title">
        Education & <span>Certification</span>
      </h2>
      <div className="education-grid">
        <div className="edu-card cert-card">
          <div className="edu-icon">🏆</div>
          <h3 className="edu-title">Software Testing Certification</h3>
          <h4 className="edu-subtitle">Manual + Automation | Quastech Institute, Thane</h4>
          <p className="edu-desc">
            Comprehensive training program covering core testing concepts and tools.
          </p>
          <div className="edu-modules">
            <span>Manual Testing</span>
            <span>Core Java</span>
            <span>SQL</span>
            <span>MySQL</span>
            <span>Jira</span>
            <span>Postman</span>
            <span>JMeter</span>
            <span>Selenium WebDriver</span>
            <span>TestNG</span>
            <span>Cucumber (BDD)</span>
          </div>
        </div>
        
        <div className="edu-card degree-card">
          <div className="edu-icon">🎓</div>
          <h3 className="edu-title">Bachelor of Commerce (B.Com)</h3>
          <h4 className="edu-subtitle">Graduated with 71%</h4>
          <p className="edu-desc">
            Strong foundation in business operations, finance, and analytical thinking, which translates to a deep understanding of banking and fintech application workflows.
          </p>
        </div>
      </div>
    </section>
  );
}
