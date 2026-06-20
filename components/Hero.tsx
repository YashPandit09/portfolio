'use client';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { track } from '@vercel/analytics';
import TypewriterEffect from './TypewriterEffect';

const ThreeBackground = dynamic(() => import('./ThreeBackground'), { ssr: false });

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
});

export default function Hero() {
  return (
    <section id="home" className="hero">
      <ThreeBackground />

      {/* Ambient blurred blobs */}
      <div className="hero-blob hero-blob-1" />
      <div className="hero-blob hero-blob-2" />
      <div className="hero-blob hero-blob-3" />

      <div className="container hero-inner">
        <div className="hero-content">
          <motion.p className="hero-greeting" {...fadeUp(0.1)}>
            {'> whoami'}
          </motion.p>
          <motion.h1 className="hero-name" {...fadeUp(0.2)}>
            Hi, I&apos;m <span className="gradient-text">Yash Pandit</span>
          </motion.h1>
          <motion.div {...fadeUp(0.35)}>
            <TypewriterEffect />
          </motion.div>
          <motion.p className="hero-tagline" {...fadeUp(0.45)}>
            Building AI-powered web experiences that matter.
          </motion.p>
          <motion.p className="hero-bio" {...fadeUp(0.55)}>
            B.Tech student at Universal AI University building AI products, modern web apps, and blockchain-powered solutions.
          </motion.p>
          <motion.div className="hero-ctas" {...fadeUp(0.65)}>
            <a href="#projects" className="btn btn-primary" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
              View Projects <span className="btn-arrow">→</span>
            </a>
            <a href="/Yash_Pandit_Resume.pdf" download className="btn btn-outline" onClick={() => track('resume_download', { location: 'hero' })}>
              Download Resume ↓
            </a>
          </motion.div>
          <motion.div className="hero-socials" {...fadeUp(0.8)}>
            <a href="https://github.com/YashPandit09" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-github">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/yashpandit09/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-linkedin">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="mailto:yash.pandit@universalai.in" aria-label="Email" className="social-email">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </a>
          </motion.div>
        </div>
        <motion.div className="hero-photo-wrapper" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3 }}>
          <div className="hero-photo-glow" />
          <div className="hero-photo">
            <Image src="/yash-photo.jpg" alt="Yash Pandit" width={380} height={380} priority />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
