import React from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: "OrangeHRM Testing Project",
    type: "Manual + Automation",
    description: "Designed and executed manual test cases; performed Functional, Smoke, Sanity, and Regression Testing; logged defects in Jira; automated core workflows using Selenium WebDriver, Java, TestNG, and Cucumber (BDD).",
    link: "https://github.com/krishna-Dhingan"
  },
  {
    id: 2,
    title: "FrontAccounting ERP Testing",
    type: "Manual Testing",
    description: "Prepared test plan, scenarios, and 118+ test cases; tested Sales, Purchase, Inventory, and Banking modules; created bug reports and regression documentation.",
    link: "https://github.com/krishna-Dhingan"
  }
];

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">
        Selected <span>Projects</span>
      </h2>
      <div className="projects-list">
        {projects.map((project) => (
          <a href={project.link} target="_blank" rel="noreferrer" className="project-card" key={project.id}>
            <div className="project-content">
              <div className="project-meta">
                <span className="project-type">{project.type}</span>
                <span className="project-arrow">↗</span>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
            </div>
            <div className="project-background"></div>
          </a>
        ))}
      </div>
    </section>
  );
}
