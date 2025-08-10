import React, { useState, useEffect } from 'react';
import { HiArrowUp } from 'react-icons/hi';

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  // Tampilkan tombol kalau scroll lebih dari 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) setVisible(true);
      else setVisible(false);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {visible && (
        <button
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            background: '#2A67E7',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            padding: '12px',
            cursor: 'pointer',
            boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
            zIndex: 1000,
          }}
          aria-label="Scroll to top"
        >
          <HiArrowUp size={24} />
        </button>
      )}
    </>
  );
}
