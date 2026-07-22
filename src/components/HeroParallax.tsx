"use client";

import React, { useEffect, useRef, useState } from 'react';
import './HeroParallax.css';

interface HeroParallaxProps {
  onLoadProgress: (progress: number) => void;
}

export default function HeroParallax({ onLoadProgress }: HeroParallaxProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Refs for scroll-linked DOM animations
  const leftBlockRef = useRef<HTMLDivElement>(null);
  const rightBlockRef = useRef<HTMLDivElement>(null);
  const focusAreasRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);

  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const frameCount = 150;

  const currentFrame = (index: number) => 
    `/sequence/frame_${index.toString().padStart(3, '0')}_delay-0.066s.png`;

  // Preload frames progressively. Unblock loading screen after the first few frames!
  useEffect(() => {
    let loadedImages = 0;
    const imgArray: HTMLImageElement[] = [];
    const minFramesToUnlock = 10; // Number of frames to wait for before unlocking the site

    const preloadImages = () => {
      for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        
        img.onload = () => {
          loadedImages++;
          
          // Progress bar up to 100% based on the first few frames only
          if (loadedImages <= minFramesToUnlock) {
            onLoadProgress((loadedImages / minFramesToUnlock) * 100);
          }
          
          // Once the minimum frames are loaded, unlock the UI
          if (loadedImages === minFramesToUnlock) {
            setImages(imgArray);
          }
        };
        
        img.onerror = () => {
          loadedImages++; 
          if (loadedImages <= minFramesToUnlock) {
            onLoadProgress((loadedImages / minFramesToUnlock) * 100);
          }
          if (loadedImages === minFramesToUnlock) {
            setImages(imgArray);
          }
        };
        
        imgArray.push(img);
      }
      
      // Edge case: if we have less than minFramesToUnlock total frames
      if (frameCount < minFramesToUnlock) {
        setImages(imgArray);
        onLoadProgress(100);
      }
    };

    preloadImages();
  }, [onLoadProgress]);

  // Handle high-performance canvas rendering AND DOM text animations
  useEffect(() => {
    if (images.length === 0 || !canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d', { alpha: false }); // Optimized context
    if (!context) return;

    let targetScrollFraction = 0;
    let currentScrollFraction = 0;
    let animationFrameId: number;

    const drawImageToCanvas = (img: HTMLImageElement, alpha: number = 1) => {
      // Guard against trying to draw incomplete images which can throw errors
      if (!img || !img.complete || img.naturalWidth === 0) return;

      const hRatio = canvas.width / img.width;
      const vRatio = canvas.height / img.height;
      const ratio = Math.max(hRatio, vRatio) * 1.01; // Slight zoom to prevent borders
      const centerShift_x = (canvas.width - img.width * ratio) / 2;
      const centerShift_y = (canvas.height - img.height * ratio) / 2;
      
      context.globalAlpha = alpha;
      context.drawImage(img, 0, 0, img.width, img.height,
                        centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
    };

    const render = () => {
      // Linear Interpolation (Lerp) for buttery smooth frame transitions
      currentScrollFraction += (targetScrollFraction - currentScrollFraction) * 0.1;

      // If we are close enough to the target, lock it to prevent micro-calculations
      if (Math.abs(targetScrollFraction - currentScrollFraction) < 0.0001) {
        currentScrollFraction = targetScrollFraction;
      }
      // --- 1. Canvas Background Animation ---
      const floatIndex = currentScrollFraction * (frameCount - 1);
      const index1 = Math.floor(floatIndex);
      const index2 = Math.min(frameCount - 1, index1 + 1);
      const blend = floatIndex - index1;

      if (images[index1]) {
        drawImageToCanvas(images[index1], 1);
      }
      if (blend > 0 && images[index2]) {
        drawImageToCanvas(images[index2], blend);
      }

      // --- 2. Scroll-Linked Storytelling DOM Animations ---
      // Step 1: Left block (0 - 0.25)
      const leftProgress = Math.min(1, Math.max(0, (currentScrollFraction - 0.0) / 0.25));
      if (leftBlockRef.current) {
        leftBlockRef.current.style.opacity = leftProgress.toString();
        leftBlockRef.current.style.transform = `translateY(${(1 - leftProgress) * 30}px)`;
      }

      // Step 2: Right block (0.3 - 0.55)
      const rightProgress = Math.min(1, Math.max(0, (currentScrollFraction - 0.3) / 0.25));
      if (rightBlockRef.current) {
        rightBlockRef.current.style.opacity = rightProgress.toString();
        rightBlockRef.current.style.transform = `translateY(${(1 - rightProgress) * 30}px)`;
      }

      // Step 3: Bottom elements (0.6 - 0.85)
      const bottomProgress = Math.min(1, Math.max(0, (currentScrollFraction - 0.6) / 0.25));
      if (focusAreasRef.current) {
        focusAreasRef.current.style.opacity = bottomProgress.toString();
        focusAreasRef.current.style.transform = `translateY(${(1 - bottomProgress) * 30}px)`;
      }
      if (socialRef.current) {
        socialRef.current.style.opacity = bottomProgress.toString();
        socialRef.current.style.transform = `translate(-50%, ${(1 - bottomProgress) * 30}px)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth || window.innerWidth;
      canvas.height = canvas.offsetHeight || window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = containerRef.current!.scrollHeight - window.innerHeight;
      targetScrollFraction = Math.max(0, Math.min(1, scrollTop / maxScroll));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial target
    render(); // Start loop
    
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [images]);

  return (
    <div className="hero-container" ref={containerRef}>
      <div className="sticky-wrapper">
        <canvas ref={canvasRef} className="hero-canvas" />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-left">
            <div ref={leftBlockRef} style={{ opacity: 0 }}>
              <p className="hero-intro">Welcome to</p>
              <h1 className="hero-title">
                KRISHNA<br />
                DHINGAN
              </h1>
            </div>
            <div className="hero-focus-areas" ref={focusAreasRef} style={{ opacity: 0 }}>
              <div className="focus-item">
                <span className="focus-index">#01</span>
                <span className="focus-label">Manual Testing</span>
              </div>
              <div className="focus-item">
                <span className="focus-index">#02</span>
                <span className="focus-label">Automation Testing</span>
              </div>
              <div className="focus-item">
                <span className="focus-index">#03</span>
                <span className="focus-label">API Testing</span>
              </div>
              <div className="focus-item">
                <span className="focus-index">#04</span>
                <span className="focus-label">Database Testing</span>
              </div>
            </div>
          </div>
          <div className="hero-right" ref={rightBlockRef} style={{ opacity: 0 }}>
            <h2 className="hero-subheadline">
              Build Reliable, Bug-Free Software Faster With Precise QA
            </h2>
            <p className="hero-description">
              Learn how thorough manual and automation testing can catch defects early, validate APIs and databases, and keep releases stable. Discover practical test cases, tools, and workflows designed to turn requirements into verified, quality-checked software.
            </p>
          </div>
        </div>
        <div className="hero-social" ref={socialRef} style={{ opacity: 0 }}>
          <a href="https://linkedin.com/in/krishna-dhingan" target="_blank" rel="noreferrer" className="social-icon">IN</a>
          <a href="https://github.com/krishna-Dhingan" target="_blank" rel="noreferrer" className="social-icon">GH</a>
          <a href="mailto:krishnadhingan5@gmail.com" className="social-icon">@</a>
        </div>
      </div>
    </div>
  );
}
