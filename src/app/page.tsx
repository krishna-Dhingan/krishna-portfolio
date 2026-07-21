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
  const [loadProgress, setLoadProgress] = useState(0);

  return (
    <main className="main-content">
      <LoadingScreen progress={loadProgress} />
      
      <ThemeNavigation />
      
      <HeroParallax onLoadProgress={setLoadProgress} />
      
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
