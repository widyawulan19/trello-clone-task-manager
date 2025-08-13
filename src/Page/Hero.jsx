import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoPlayOutline } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";
import '../Style/Page/Hero.css';
// import '../Style/Components/Navbar.css'
import hero1 from '../Assets/hero1.png';
import hero2 from '../Assets/hero2.png';
import Navbar from '../components/Navbar';

const Hero = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);
  
    const scrollToSection = (id) => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

  return (
    <section className="hero-section-wrapper">
      <div className='hero-container'>

        {/* NAVBAR  */}
        <div className="navbar">
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
        {/* SECTION */}
        <div className="hero-section">
          {/* Komponen mengapung */}
          <div className="floating">
            <div className="floating-1">
              <img src={hero1} alt="" />
            </div>
            <div className="floating-2">
              <img src={hero2} alt="" />
            </div>
          </div>

          {/* MAIN CONTENT */}
          <div className="hero-section-main">
            <h1 className='gradient-text'>Trello Clone</h1>
            <h1>Task Management App</h1>
            <div className="des">
              <p>A task and team management web app built with React, Node.js, and PostgreSQL.</p>
              <p>Featuring modern drag-and-drop functionality and real-time collaboration.</p>
            </div>

            {/* BUTTON */}
            <div className="btn-demo">
              <button className='demo'> <IoPlayOutline size={20}/> Live Demo</button>
              <button>
                <a href="https://github.com/widyawulan19/trello-inod.git">
                  <FiGithub/> View Source Code
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
