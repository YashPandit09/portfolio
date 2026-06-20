'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { track } from '@vercel/analytics';
import { useTheme } from '@/hooks/useTheme';

const links = [
  { id: 'home', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const isHome = pathname === '/';

  // Navbar background on scroll.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Active section: pick the last section whose top has passed a line ~35% down
  // the viewport. Runs only on the home page (where the sections exist).
  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => {
      const line = window.scrollY + window.innerHeight * 0.35;
      let current = 'home';
      for (const { id } of links) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= line) current = id;
      }
      // Snap to the last link when scrolled to the very bottom.
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        current = links[links.length - 1].id;
      }
      setActiveSection(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHome]);

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    setMenuOpen(false);
    if (!isHome) return; // not on home — let the Link navigate to "/#id"
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    setMenuOpen(false);
    if (isHome) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <Link className="nav-logo" href="/" onClick={handleLogoClick}>
          {'<YP />'}
        </Link>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {links.map(({ id, label }) => (
            <li key={id}>
              <Link
                href={id === 'home' ? '/' : `/#${id}`}
                className={isHome && activeSection === id ? 'active' : ''}
                onClick={(e) => handleNavClick(e, id)}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </li>
          <li>
            <a href="/Yash_Pandit_Resume.pdf" download className="nav-resume" onClick={() => track('resume_download', { location: 'navbar' })}>
              <span className="resume-dot" /> Resume
            </a>
          </li>
        </ul>

        <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span /><span />
        </div>
      </div>
    </nav>
  );
}
