import React from 'react'
import './TrainingStyles.css'
import Pod from '../assets/pod.jpg'
import Moon from '../assets/moon.jpg'
import { Link } from 'react-router-dom'

const Training = () => {
  return (
    <div className='training'>
       <div className='left'>
        <h1>Training</h1>
        <p>The trainees must learn medicine, language, robotics and piloting, space system engineering, the organization of space systems, and the acronyms in aerospace engineering during the basic training.</p>
        <Link to='/contact'><button className='btn'>Contact</button></Link>
       </div>

       <div className='right'>
        <div className='img-container'>
            <div className='image-stack top'>
                <img src={Moon} className='img' alt='' />
            </div>

            <div className='image-stack bottom'>
                <img src={Pod} className='img' alt='' />
            </div>

        </div>
        
        

       </div>

    </div>
  )
}

export default Training