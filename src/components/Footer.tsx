import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <>
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-headline">Let's Build Quality Software <span>Together</span></h2>
          <div className="cta-buttons">
            <a href="mailto:krishnadhingan5@gmail.com" className="btn btn-primary">Work With Krishna Dhingan</a>
            <a href="#" className="btn btn-outline">View Resume</a>
          </div>
        </div>
      </section>

      <footer className="footer-section">
        <div className="footer-content">
          <div className="footer-brand">
            <h2>Krishna Dhingan</h2>
            <p>Software Tester & QA Automation Engineer</p>
          </div>
          
          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#expertise">Services</a>
            <a href="#contact">Contact</a>
            <a href="#terms">Terms</a>
            <a href="#privacy">Privacy</a>
          </div>

          <div className="footer-contact">
            <p>krishnadhingan5@gmail.com</p>
            <p>+91 8454818704</p>
            <p>Thane, Maharashtra</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Krishna Dhingan. All rights reserved.</p>
          <div className="footer-socials">
            <a href="https://linkedin.com/in/krishna-dhingan" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/krishna-Dhingan" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </footer>
    </>
  );
}
