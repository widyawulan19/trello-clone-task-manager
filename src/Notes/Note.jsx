import React, { useEffect, useRef } from 'react';
import './Screenshots.css';

export default function Screenshots() {
  const scrollRef = useRef(null);

  const images = [
    '/images/web1.png',
    '/images/mobile1.png',
    '/images/web2.png',
    '/images/mobile2.png',
    '/images/web3.png',
    '/images/mobile3.png',
    '/images/web4.png',
    '/images/mobile4.png',
    '/images/web5.png',
    '/images/mobile5.png'
  ];

  useEffect(() => {
    const container = scrollRef.current;
    let scrollInterval;

    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (container) {
          // kalau udah mentok ke bawah, balik ke atas
          if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
            container.scrollTop = 0;
          } else {
            container.scrollTop += 1; // kecepatan scroll
          }
        }
      }, 20); // semakin kecil semakin cepat
    };

    startAutoScroll();

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="screenshot-wrapper" ref={scrollRef}>
      <div className="screenshot-masonry">
        {images.map((src, i) => (
          <div className="screenshot-item" key={i}>
            <img src={src} alt={`shot-${i}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
