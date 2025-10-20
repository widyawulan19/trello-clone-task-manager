import React from 'react'
import { IoLogoReact, IoLogoNodejs, IoCode, IoLayers,IoLogoCss3 } from "react-icons/io5";
import { GoDatabase } from "react-icons/go";
import '../Style/Page/ProjectView.css'
import { FaTasks, FaClipboardList, FaUsers, FaChartLine } from 'react-icons/fa';


const ProjectView=()=> {
    //DATA PROJECT
    const IconProject = [
        {
            id:1,
            title:'React',
            icon : <IoLogoReact/>,
            color: '#4085F3'
        },
        {
            id:2,
            title:'Node.js',
            icon : <IoLogoNodejs/>,
            color: '#2FC362'
        },
        {
            id:3,
            title:'PostgreSQL',
            icon : <GoDatabase/>,
            color: '#3971E9'
        },
        {
            id:4,
            title:'Express.js',
            icon : <IoCode/>,
            color: '#BB83F7'
        },
        {
            id:5,
            title:'Redux',
            icon : <IoLayers/>,
            color: '#EE6063'
        },
        {
            id:6,
            title:'CSS',
            icon : <IoLogoCss3/>,
            color: '#25B7A6'
        }
        
    ];

return (
    <div className='project-container' id='overview'>
      <div className="project-header">
        <h1>Project Overview</h1>
        <p>
          This project was developed for <strong style={{color:'#5211cb'}}>Inod Studio</strong> to efficiently manage all company activities. The web application provides several key functionalities:
        </p>
      </div>
      
      <ul className='project-features'>
        <li>
          <FaTasks className='icon' />
          <span><strong>Trello-like task management:</strong> Create workspaces, boards, and cards to track project progress in real-time.</span>
        </li>
        <li>
          <FaClipboardList className='icon' />
          <span><strong>Order tracking:</strong> Manage music orders from start to completion seamlessly.</span>
        </li>
        <li>
          <FaUsers className='icon' />
          <span><strong>Employee management:</strong> Maintain employee data and schedules to support smooth operations.</span>
        </li>
        <li>
          <FaChartLine className='icon' />
          <span><strong>Progress monitoring:</strong> Visualize project progress and ensure timely completion of tasks.</span>
        </li>
      </ul>
      <p className='text'>
        Overall, the website streamlines internal operations, enhances team collaboration, and improves efficiency across all company processes.
      </p>
    </div>
  );
}

export default ProjectView
