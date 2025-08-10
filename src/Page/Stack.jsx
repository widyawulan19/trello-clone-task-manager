import React from 'react'
import '../Style/Page/Stack.css'
import { IoLogoReact, IoLogoNodejs, IoCode, IoLayers,IoLogoCss3 } from "react-icons/io5";
import { GoDatabase } from "react-icons/go";

const Stack=()=> {

    const IconProject = [
            {
                id:1,
                title:'React',
                icon : <IoLogoReact/>,
                color: '#4085F3',
                desc:'Frontend Framework'
            },
            {
                id:2,
                title:'Node.js',
                icon : <IoLogoNodejs/>,
                color: '#2FC362',
                desc:'Backend Runtime'
            },
            {
                id:3,
                title:'PostgreSQL',
                icon : <GoDatabase/>,
                color: '#3971E9',
                desc:'Database'
            },
            {
                id:4,
                title:'Express.js',
                icon : <IoCode/>,
                color: '#BB83F7',
                desc:'Web Framework'
            },
            {
                id:5,
                title:'Redux',
                icon : <IoLayers/>,
                color: '#EE6063',
                desc:'State Management'
            },
            {
                id:6,
                title:'CSS',
                icon : <IoLogoCss3/>,
                color: '#25B7A6',
                desc:'Styling Framework'
            }
            
        ];

    // Gandakan list supaya animasi loop mulus
    const InfiniteData = [...IconProject, ...IconProject];

  return (
    <div className='stack-container' id='technologies'>
        <div className="stack-title">
            <h1>Technology Stack</h1>
            <p>Built with modern, industry-standard technologies for scalability and performance</p>
        </div>
        
        <div className="btn-stack-wrapper">
            <div className="btn-stack-container">
            {InfiniteData.map((feature, idx) => (
                <div className='btn-box' key={idx}>
                <div className="btn-icon" style={{ color: feature.color }}>
                    {feature.icon}
                </div>
                <div className="btn-name">
                    <h4>{feature.title}</h4>
                    <p>{feature.desc}</p>
                </div>
                </div>
            ))}
            </div>
        </div>
    </div>
  )
}

export default Stack