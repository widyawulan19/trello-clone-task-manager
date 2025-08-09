import React, { useEffect, useRef } from 'react';
import '../Style/Page/Screenshot.css';

const Screenshot = () => {
  const scrollRef = useRef(null);

  const images = [
    require('../Assets/ss1.png'),
    require('../Assets/ss2.png'),
    require('../Assets/ss3.png'),
    require('../Assets/ss4.png'),
    require('../Assets/ss5.png'),
    require('../Assets/ss6.png'),
    require('../Assets/ss7.png'),
    require('../Assets/ss8.png'),
    require('../Assets/ss9.png'),
    require('../Assets/ss10.png'),
    require('../Assets/ss11.png'),
    require('../Assets/ss12.png'),
    require('../Assets/ss13.png'),
    require('../Assets/ss14.png'),
    require('../Assets/ss15.png'),
    require('../Assets/ss17.png'),
    require('../Assets/ss18.png'),
    require('../Assets/ss19.png'),
  ];

useEffect(() => {
    const container = scrollRef.current;
    let scrollInterval;

    if (!container) return;

    // total tinggi 1 set gambar
    const totalHeight = container.scrollHeight / 2;

    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        container.scrollTop += 1;

        // kalau udah melewati 1 set gambar, balikin ke awal set pertama
        if (container.scrollTop >= totalHeight) {
          container.scrollTop = 0;
        }
      }, 20); // ubah kecepatan di sini
    };

    startAutoScroll();

    return () => clearInterval(scrollInterval);
  }, []);


  return (
    <div className="ss-container">
        <div className="ss-title">
            <h1>Feature Showcase</h1>
            <h4>
                Explore the key features of Trello Clone through a clean and interactive interface.
            </h4>
        </div>
      
      <div className="ss-box-content" ref={scrollRef}>
        <div className="screenshot-masonry">
          {images.map((src, i) => (
            <div className="screenshot-item" key={i}>
              <img src={src} alt={`shot-${i}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Screenshot;
