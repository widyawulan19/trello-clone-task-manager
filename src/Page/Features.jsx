import React, { useEffect, useRef } from 'react'
import '../Style/Page/Features.css'
import { RxCardStackPlus } from "react-icons/rx";
import { FiUsers } from "react-icons/fi";
import { LuTags } from "react-icons/lu";
import { BsFillCalendar2DateFill } from "react-icons/bs";
import { IoFlash } from "react-icons/io5";
import { FaMobileAlt } from "react-icons/fa";

const Features = () => {
  const FeatureData = [
    {
      id: 1,
      title:'Marketing Data to Card',
      icon: <RxCardStackPlus/> ,
      color: '#2A67E7',
      background:'#E9F0FD',
      desc:'Add marketing data in just one click, and the system instantly transforms it into an interactive card within your workspace. Keep track of marketing tasks effortlessly and stay organized with ease.'
    },
    {
      id: 2,
      title:'Workspace Management',
      icon: <FiUsers/> ,
      color: '#2FC362',
      background:'#EAF9EF',
      desc:'Create and manage multiple workspaces with team collaboration features, role-based permissions, and shared board access.'
    },
    {
      id: 3,
      title:'Card Labels & Images',
      icon: <LuTags/> ,
      color: '#923EE6',
      background:'#F3E8FE',
      desc:'Organize tasks with colorful labels, add cover images, and customize cards for better visual organization and priority management.'
    },
    {
      id: 4,
      title:'Employee Scheduling',
      icon: <BsFillCalendar2DateFill/> ,
      color: '#E85A23',
      background:'#FEEDD6',
      desc:'Easily manage employee schedules with an intuitive calendar view. Keep shifts, tasks, and deadlines well-organized for maximum efficiency.'
    },
    {
      id: 5,
      title:'Real-time Updates',
      icon: <IoFlash/> ,
      color: '#E45B5F',
      background:'#FDE2E2',
      desc:'Live synchronization across all connected devices using WebSocket connections for instant collaboration and updates.'
    },
    {
      id: 6,
      title:'Responsive Design',
      icon: <FaMobileAlt/> ,
      color: '#48AEA2',
      background:'#CDFBF1',
      desc:'Fully responsive interface that works seamlessly across desktop, tablet, and mobile devices with touch-optimized interactions.'
    }
  ];

  const featureRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, idx) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('show');
            }, idx * 300); // delay 150ms per item
          }
        });
      },
      { threshold: 0.2 }
    );

    featureRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className='features-container' id='features'>
      <div className="feature-title">
        <h1>Key Features</h1>
        <h3>Built with modern web technologies to deliver a seamless task management experience</h3>
      </div>
      
      <div className="features-box-container">
        {FeatureData.map((feature, idx) => (
          <div
            className='features-box hidden'
            key={feature.id}
            ref={(el) => (featureRefs.current[idx] = el)}
          >
            <div className="features-icon">
              <div
                className="fi-box"
                style={{ backgroundColor: feature.background, color: feature.color }}
              >
                {feature.icon}
              </div>
            </div>
            <h4>{feature.title}</h4>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Features;
