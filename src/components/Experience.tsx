import React from 'react';
import './Experience.css';

const experiences = [
  {
    role: "Loan Associate",
    company: "IDFC FIRST Bank",
    duration: "May 2023 – Nov 2024",
    description: "Validated loan data using LOS/LMS; verified customer information against business rules; documented recurring process issues.",
    tags: ["Banking Domain", "Process Compliance", "Operations"]
  },
  {
    role: "Customer Service Associate",
    company: "Team Lease Services Ltd",
    duration: "Nov 2019 – Nov 2022",
    description: "Verified customer requests; maintained process compliance; escalated recurring issues.",
    tags: ["Customer Service", "Issue Escalation", "Compliance"]
  }
];

export default function Experience() {
  return (
    <section className="experience-section" id="experience">
      <h2 className="section-title">
        Professional <span>Experience</span>
      </h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-header">
                <h3 className="timeline-role">{exp.role}</h3>
                <span className="timeline-duration">{exp.duration}</span>
              </div>
              <h4 className="timeline-company">{exp.company}</h4>
              <p className="timeline-description">{exp.description}</p>
              <div className="timeline-tags">
                {exp.tags.map((tag, i) => (
                  <span className="timeline-tag" key={i}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
