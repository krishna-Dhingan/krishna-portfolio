"use client";

import React, { useState } from 'react';
import './FAQ.css';

const faqs = [
  {
    question: "What kind of testing experience does Krishna have?",
    answer: "Krishna has extensive experience in the complete STLC and SDLC. He performs Functional, Regression, Smoke, Sanity, Integration, System, and UAT Testing, backed by a strong foundation in defect reporting and test case design."
  },
  {
    question: "What tools are used for manual and automation testing?",
    answer: "His toolset includes Jira for defect tracking and Agile management, Selenium WebDriver, Core Java, TestNG, and Cucumber (BDD) for automation workflows."
  },
  {
    question: "Can Krishna help with API and database testing?",
    answer: "Absolutely. He leverages Postman for robust API validation and writes SQL/MySQL queries to ensure complete database integrity."
  },
  {
    question: "How can businesses benefit from thorough QA processes?",
    answer: "Thorough manual and automation testing catches defects early, validates critical systems, keeps releases stable, and ensures higher product quality overall."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <h2 className="section-title">
        Frequently Asked <span>Questions</span>
      </h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div 
            className={`faq-item ${openIndex === index ? 'open' : ''}`} 
            key={index}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <h3>{faq.question}</h3>
              <span className="faq-toggle">{openIndex === index ? '−' : '+'}</span>
            </div>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
