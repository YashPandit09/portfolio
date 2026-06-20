'use client';
import { useState, useEffect } from 'react';

export default function PageLoader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`page-loader ${hidden ? 'hidden' : ''}`}>
      <div className="loader-logo">YP</div>
    </div>
  );
}
