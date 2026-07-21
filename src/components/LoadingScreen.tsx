"use client";

import React from 'react';
import './LoadingScreen.css';

interface LoadingScreenProps {
  progress: number;
}

export default function LoadingScreen({ progress }: LoadingScreenProps) {
  return (
    <div className={`loading-screen ${progress === 100 ? 'fade-out' : ''}`}>
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
