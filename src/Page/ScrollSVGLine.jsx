import React, { useState, useEffect } from 'react';
import '../Style/Components/ScrollToTopButton.css'

export default function ScrollSVGLine() {
  const [length, setLength] = useState(0);
  const [totalLength, setTotalLength] = useState(0);

  useEffect(() => {
    const path = document.querySelector('#scrollPath');
    const total = path.getTotalLength();
    setTotalLength(total);

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;
      setLength(total * scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <svg className="scroll-svg" viewBox="0 0 200 1000">
      <path
        id="scrollPath"
        d="M100 0 C120 150, 80 300, 100 450 C120 600, 80 750, 100 900"
        fill="none"
        stroke="#5285f3ff"
        strokeWidth="2"
        strokeDasharray={totalLength}
        strokeDashoffset={totalLength - length}
        style={{ transition: 'stroke-dashoffset 0.1s linear' }}
      />
    </svg>
  );
}
