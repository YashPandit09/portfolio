'use client';
import { useState, useEffect, useCallback } from 'react';

const roles = ['AI Developer', 'Full-Stack Engineer', 'Blockchain Builder'];

export default function TypewriterEffect() {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const current = roles[roleIndex];
    if (!isDeleting) {
      setText(current.substring(0, text.length + 1));
      if (text.length + 1 === current.length) {
        setTimeout(() => setIsDeleting(true), 2000);
        return;
      }
    } else {
      setText(current.substring(0, text.length - 1));
      if (text.length - 1 === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
        return;
      }
    }
  }, [text, roleIndex, isDeleting]);

  useEffect(() => {
    const speed = isDeleting ? 50 : 100;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting]);

  return (
    <div className="hero-typewriter">
      {text}
      <span className="cursor" />
    </div>
  );
}
