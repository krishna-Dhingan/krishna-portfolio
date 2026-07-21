import React from 'react';
import Image from 'next/image';
import './About.css';

export default function About() {
  return (
    <section className="about-section" id="about">
      <h2 className="section-title">
        Building Quality Software <br/><span>Through Precise Testing</span>
      </h2>
      <div className="about-content">
        <div className="about-image-wrapper">
          <Image 
            src="/about_duotone.png" 
            alt="Abstract QA Visualization" 
            width={500} 
            height={600} 
            className="about-image"
          />
        </div>
        <div className="about-text">
          <p className="mission-statement">
            Transitioned from BFSI operations into Software Testing, combining hands-on QA training with real banking-domain process discipline.
          </p>
          <ul className="about-bullets">
            <li>Execute complete STLC & SDLC-based testing cycles</li>
            <li>Automate core workflows using Selenium WebDriver, Java, TestNG and Cucumber (BDD)</li>
            <li>Validate APIs using Postman and verify data integrity using SQL/MySQL</li>
            <li>Apply banking-domain knowledge to fintech QA scenarios</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
