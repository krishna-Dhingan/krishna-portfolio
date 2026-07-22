"use client";

import { useState } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import HeroParallax from '@/components/HeroParallax';
import About from '@/components/About';
import CoreExpertise from '@/components/CoreExpertise';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import ThemeNavigation from '@/components/ThemeNavigation';

export default function Home() {
  return (
    <main className="main-content">
      <LoadingScreen />
      
      <ThemeNavigation />
      
      <HeroParallax />
      
      <div style={{ position: 'relative', zIndex: 10, backgroundColor: 'var(--background)' }}>
        <About />
        <CoreExpertise />
        <Projects />
        <Experience />
        <Education />
        <FAQ />
        <Footer />
      </div>
    </main>
  );
}
