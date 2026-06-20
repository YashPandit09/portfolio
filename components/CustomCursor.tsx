'use client';
import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const isMobile = window.innerWidth < 768 || 'ontouchstart' in window;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isMobile || prefersReduced) return;

    // Intentional client-only init: the custom cursor is enabled after mount,
    // only on capable (non-touch, motion-OK) devices.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setVisible(true);
    let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;

    const onMove = (e: MouseEvent) => { mouseX = e.clientX; mouseY = e.clientY; };
    window.addEventListener('mousemove', onMove, { passive: true });

    const animate = () => {
      if (dotRef.current) { dotRef.current.style.left = mouseX + 'px'; dotRef.current.style.top = mouseY + 'px'; }
      ringX += (mouseX - ringX) * 0.15; ringY += (mouseY - ringY) * 0.15;
      if (ringRef.current) { ringRef.current.style.left = ringX + 'px'; ringRef.current.style.top = ringY + 'px'; }
      requestAnimationFrame(animate);
    };
    const raf = requestAnimationFrame(animate);

    const addHover = () => { dotRef.current?.classList.add('hovering'); ringRef.current?.classList.add('hovering'); };
    const removeHover = () => { dotRef.current?.classList.remove('hovering'); ringRef.current?.classList.remove('hovering'); };

    const interactiveEls = document.querySelectorAll('a, button, .project-card, .skill-card');
    interactiveEls.forEach((el) => { el.addEventListener('mouseenter', addHover); el.addEventListener('mouseleave', removeHover); });

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
      interactiveEls.forEach((el) => { el.removeEventListener('mouseenter', addHover); el.removeEventListener('mouseleave', removeHover); });
    };
  }, []);

  if (!visible) return null;
  return (
    <>
      <div ref={dotRef} className="custom-cursor" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
