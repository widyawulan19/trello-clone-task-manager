import React from 'react'
import '../Style/Page/Learning.css'
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";

const Learning=()=> {

    const frontend = [
        {
            id:1,
            desc:'Advanced React concepts including hooks, context, and performance optimization'
        },
        {
            id:2,
            desc:'Complex state management with Redux and middleware implementation'
        },
        {
            id:3,
            desc:'Responsive design principles and mobile-first development approach'
        },
        {
            id:4,
            desc:'Drag-and-drop functionality with React DnD library integration'
        }
    ]

    const backend = [
        {
            id:1,
            desc:'RESTful API design and implementation with Express.js framework'
        },
        {
            id:2,
            desc:'Database design and optimization with PostgreSQL and Sequelize ORM'
        },
        {
            id:3,
            desc:'Authentication and authorization using JWT tokens and bcrypt'
        },
        {
            id:4,
            desc:'Real-time communication implementation with WebSocket technology'
        }

    ]

  return (
    <div className='learning-container' id='learning'>
        <div className="learning-header">
            <h1>Learning Outcomes</h1>
            <h4>Key skills and knowledge gained through building this comprehensive application</h4>
        </div>
        <div className="learning-content">
            <div className="learning-box">
                <h2>Frontend Development</h2>
                {frontend.map((fr)=>(
                    <div className='text' key={fr.id}>
                        <IoCheckmarkDoneCircleOutline className='icon'/>
                        <p>{fr.desc}</p>
                    </div>
                ))}
            </div>
            <div className="learning-box">
                <h2>Backend Development</h2>
                {backend.map((bk)=>(
                    <div className='text' key={bk.id}>
                        <IoCheckmarkDoneCircleOutline className='icon'/>
                        <p>{bk.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Learning