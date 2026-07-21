import React from 'react';
import './CoreExpertise.css';

const expertiseData = [
  {
    title: "Manual Testing",
    description: "STLC, SDLC, Functional, Regression, Smoke, Sanity, Integration, System and UAT Testing.",
    icon: "📋"
  },
  {
    title: "Automation Testing",
    description: "Automating core workflows using Selenium WebDriver, Core Java, TestNG and Cucumber (BDD).",
    icon: "🤖"
  },
  {
    title: "API Testing",
    description: "Validating REST APIs using Postman.",
    icon: "🔌"
  },
  {
    title: "Database Testing",
    description: "Query writing and data validation using SQL and MySQL.",
    icon: "🗄️"
  },
  {
    title: "Tools & Productivity",
    description: "Leveraging Jira, Agile/Scrum and Git/GitHub to increase output and efficiency.",
    icon: "🛠️"
  }
];

export default function CoreExpertise() {
  return (
    <section className="expertise-section" id="expertise">
      <h2 className="section-title">
        Core <span>Expertise</span>
      </h2>
      <div className="expertise-grid">
        {expertiseData.map((item, index) => (
          <div className="expertise-card" key={index}>
            <div className="expertise-icon">{item.icon}</div>
            <h3 className="expertise-card-title">{item.title}</h3>
            <p className="expertise-card-desc">{item.description}</p>
            <div className="card-hover-effect"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
