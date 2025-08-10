import React from 'react'
import '../Style/Page/Footer.css'
import { RiShareBoxFill } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";
import { IoIosMail } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io5";

const Footer=()=> {
  return (
    <div className='footer-container' id='explore'>
        <div className="cta-content">
            <h1>Ready to Explore</h1>
            <p>Check out the live demo or dive into the source code to see how it's built</p>
            <div className="cta-btn">
                <div className="btn-box">
                    <RiShareBoxFill className='icon-btn'/>
                    Try Live Demo
                </div>
                <div className="btn-box">
                    <a href="https://github.com/widyawulan19/trello-clone-task-manager.git">
                        <FiGithub className='icon-btn'/>
                        View On Github
                    </a>
                </div>
            </div>
            <div className="icon-box">
                <div className="icon">
                    <a href="https://github.com/widyawulan19/">
                        <FiGithub/>
                    </a>
                </div>
                <div className="icon">
                    <a href="mailto:widyawulan1906@gmail.com" >
                        <IoIosMail />
                    </a>
                </div>
                <div className="icon">
                    <a href="https://www.instagram.com/luw_3d/" target="_blank" rel="noopener noreferrer">
                        <IoLogoInstagram/>
                    </a>
                </div>
            </div>
        </div>
        <div className="footer-content">
            <p>© 2025 Luw Portfolio Project. Built with passion and modern web technologies also with love.</p>
        </div>
    </div>
  )
}

export default Footer

//https://github.com/widyawulan19/trello-clone-task-manager.git
// https://www.instagram.com/luw_3d/
