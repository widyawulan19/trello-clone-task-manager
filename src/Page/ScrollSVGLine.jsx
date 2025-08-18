import React, { useState, useEffect } from 'react';
import '../Style/Components/ScrollToTopButton.css'

export default function ScrollSVGLine() {
  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY; // posisi scroll sekarang
    const docHeight = document.body.scrollHeight - window.innerHeight; // tinggi total halaman yang bisa discroll
    const scrollPercent = (scrollTop / docHeight) * 100; // persentase scroll
    setScrollHeight(scrollPercent);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="scroll-line-container">
      <div
        className="scroll-line"
        style={{ height: `${scrollHeight}%` }}
      ></div>
    </div>
  );
}
