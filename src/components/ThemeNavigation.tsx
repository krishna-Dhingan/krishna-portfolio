"use client";

import React, { useEffect, useState } from 'react';
import './ThemeNavigation.css';

const sections = [
  { id: 'about', label: 'About' },
  { id: 'expertise', label: 'Manual & Automation' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience & Edu' },
  { id: 'faq', label: 'FAQ' }
];

export default function ThemeNavigation() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      let current = '';
      const offset = 300;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const top = element.getBoundingClientRect().top;
          if (top < offset) {
            current = section.id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="theme-navigation">
      {sections.map((section) => (
        <a 
          key={section.id}
          href={`#${section.id}`} 
          className={`nav-dot ${activeSection === section.id ? 'active' : ''}`}
          title={section.label}
        >
          <span className="nav-label">{section.label}</span>
        </a>
      ))}
    </div>
  );
}
