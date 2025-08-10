import React from 'react'
import { IoLogoReact, IoLogoNodejs, IoCode, IoLayers,IoLogoCss3 } from "react-icons/io5";
import { GoDatabase } from "react-icons/go";
import '../Style/Page/ProjectView.css'

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
        <h1>Project Overview</h1>
        <p>This Trello clone demonstrates modern web development practices with a focus on user experience, real-time collaboration, and scalable architecture. Built from the ground up with performance and maintainability in mind.</p>
        <div className="btn-project">
            {IconProject.map((feature)=>(
                <div className='btn-box' key={feature.id}>
                    <div className="btn-icon" style={{color:feature.color}}>
                        {feature.icon}
                    </div>
                    <div className="btn-name">
                        <h4>{feature.title}</h4>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ProjectView