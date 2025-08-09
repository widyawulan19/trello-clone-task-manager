import React from 'react'
import { FiGithub } from "react-icons/fi";
import '../Style/Page/Hero.css'

function Hero() {
  return (
    <div className='hero-container'>
        <div className="hero-navbar">
            <div className="hn-left">
                Trello Clone Porto
            </div>
            <div className="hn-center">
                <button>Overview</button>
                <button>Features</button>
                <button>Tech Stack</button>
                <button>Contact</button>

            </div>
            <div className="hn-right">
                <div className="icon">
                    <FiGithub/>
                </div>
            </div>
        </div>
        <div className="hero-section">

        </div>
    </div>
  )
}

export default Hero