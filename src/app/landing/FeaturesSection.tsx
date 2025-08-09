// File: src/app/landing/FeaturesSection.tsx
'use client';

import { useEffect, useRef } from 'react';
import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import Lottie from 'react-lottie-player';
import React from 'react';

// Register the plugin
gsap.registerPlugin(ScrollTrigger);

export default function FeaturesSection() {
  const panelsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const panels = panelsRef.current?.querySelectorAll<HTMLDivElement>('.panel');
      panels?.forEach((panel, i) => {
        const bg = panel.querySelector<HTMLDivElement>('.bg-layer');
        const mid = panel.querySelector<HTMLDivElement>('.mid-layer');
        const fg = panel.querySelector<HTMLDivElement>('.fg-layer');

        if (i % 2 === 0) {
          // Pin & scrub for panels 1 & 3
          gsap.timeline({
            scrollTrigger: {
              trigger: panel,
              start: 'top top',
              end: '+=100%',
              scrub: true,
              pin: true,
            },
          })
            .from(bg, { yPercent: -20 }, 0)
            .from(mid, { yPercent: 10 }, 0)
            .from(fg, { y: 50, autoAlpha: 0 }, 0.2);
        } else {
          // Parallax bg for panels 2 & 4
          gsap.to(bg, {
            yPercent: -20,
            ease: 'none',
            scrollTrigger: {
              trigger: panel,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          });
        }
      });
    }, panelsRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={panelsRef}>
      {/* Panel 1: Real‑Time Chat */}
      <section className="panel relative min-h-screen overflow-hidden">
        <div
          className="bg-layer absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/bg-chat.jpg')" }}
        />
        <div className="mid-layer absolute inset-0 flex items-center justify-center">
          {/* Replace with your Lottie or SVG chat illustration */}
          <Lottie
            loop
            play
            animationData={'/animation/chatting.json'}
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="fg-layer relative z-10 flex items-center justify-center h-full">
          <h2 className="text-5xl font-bold text-white">Real‑Time Chat</h2>
        </div>
      </section>

      {/* Panel 2: Secure Auth */}
      <section className="panel relative min-h-screen overflow-hidden">
        <div
          className="bg-layer absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/bg-security.jpg')" }}
        />
        <div className="mid-layer absolute inset-0 flex items-center justify-center">
          {/* Inline SVG lock */}
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-40 h-40 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 
                 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 
                 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 
                 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
            />
          </motion.svg>
        </div>
        <div className="fg-layer relative z-10 flex items-center justify-center h-full">
          <h2 className="text-5xl font-bold text-white">Secure Auth</h2>
        </div>
      </section>

      {/* Panel 3: Custom Themes */}
      <section className="panel relative min-h-screen overflow-hidden">
        <div
          className="bg-layer absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/bg-themes.jpg')" }}
        />
        <div className="mid-layer absolute inset-0 flex items-center justify-center">
          {/* Replace with theme toggle Lottie or SVG */}
          <div className="w-32 h-32">
            {/* Lottie or SVG */}
          </div>
        </div>
        <div className="fg-layer relative z-10 flex items-center justify-center h-full">
          <h2 className="text-5xl font-bold text-white">Light & Dark Modes</h2>
        </div>
      </section>

      {/* Panel 4: File Sharing */}
      <section className="panel relative min-h-screen overflow-hidden">
        <div
          className="bg-layer absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/bg-files.jpg')" }}
        />
        <div className="mid-layer absolute inset-0 flex items-center justify-center">
          {/* Replace with file sharing illustration */}
          <div className="w-32 h-32">
            {/* SVG or image */}
          </div>
        </div>
        <div className="fg-layer relative z-10 flex items-center justify-center h-full">
          <h2 className="text-5xl font-bold text-white">File Sharing</h2>
        </div>
      </section>
    </div>
  );
}
