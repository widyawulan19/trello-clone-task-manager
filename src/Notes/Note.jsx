import React from 'react';
import { IoPlayOutline } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";
import '../Style/Page/Hero.css';
// import '../Style/Components/Navbar.css'
import hero1 from '../Assets/hero1.png';
import hero2 from '../Assets/hero2.png';
import Navbar from '../components/Navbar';

const Hero = () => {
  return (
    <section className="hero-section-wrapper">
      <div className='hero-container'>
        <Navbar/>
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
                <a href="https://github.com/widyawulan19/">
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
