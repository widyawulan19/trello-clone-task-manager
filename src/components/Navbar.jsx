import React, { useState } from 'react';
import { FiGithub } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import '../Style/Page/Hero.css'; // Kalau mau, bisa bikin CSS khusus navbar

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="hero-navbar">
      <div className="hn-left">
        <h2>Trello Clone Porto</h2>
      </div>

      {/* Hamburger icon */}
      <div className="hn-hamburger" onClick={toggleMenu}>
        <GiHamburgerMenu size={28} />
      </div>

      <div className={`hn-center ${menuOpen ? 'open' : ''}`}>
        <button onClick={() => scrollToSection('overview')}>Overview</button>
        <button onClick={() => scrollToSection('features')}>Features</button>
        <button onClick={() => scrollToSection('screenshot')}>Showcase</button>
        <button onClick={() => scrollToSection('technologies')}>Technologies</button>
        <button onClick={() => scrollToSection('learning')}>Learning</button>
        <button onClick={() => scrollToSection('explore')}>Explore</button>
      </div>

      <div className="hn-right">
        <a href="https://github.com/widyawulan19/">
          <FiGithub className='hn-icon' />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
