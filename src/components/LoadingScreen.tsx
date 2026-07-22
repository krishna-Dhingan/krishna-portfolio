"use client";

import React, { useEffect, useState } from 'react';
import './LoadingScreen.css';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const duration = 800; // 0.8 seconds duration
    const interval = 16; // ~60fps smooth step
    const step = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress(prev => {
        const next = prev + step;
        if (next >= 100) {
          clearInterval(timer);
          setIsFinished(true);
          setTimeout(() => setIsHidden(true), 400);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);

  if (isHidden) return null;

  return (
    <div className={`loading-screen ${isFinished ? 'fade-out' : ''}`}>
      <div className="loading-content">
        <h1 className="loading-brand">KrishnaDhingan</h1>
        <div className="loading-bar-container">
          <div className="loading-bar" style={{ width: `${progress}%` }}></div>
        </div>
        <p className="loading-percentage">{Math.round(progress)}%</p>
      </div>
    </div>
  );
}
