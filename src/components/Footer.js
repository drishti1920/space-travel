import React from 'react'
import './FooterStyles.css'
//importing alll the icons
import { FaFacebook } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaMailBulk, } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa'
import { FaSearchLocation } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'



const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaSearchLocation  size={20} style={{color:'#ffffff', marginRight:'2rem'}}  />
                
                <div>
                    <p>15 Tomahawk Street</p>
                    <h4>Bristol, US</h4>
                </div>
                </div>

<div className='phone'>
<h4><FaPhone size={20} style={{color:'#ffffff', marginRight:'2rem'}}  />  9-876-543-210</h4>
</div>

<div className='email'>
<h4><FaMailBulk size={20} style={{color:'#ffffff', marginRight:'2rem'}} />  anonymous@nowhere.com</h4>
</div>




            </div>
        
        
        <div className='right'>
            <h4>About the company</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                 sed do eiusmod tempor incididunt ut l
                abore et dolore magna aliqua. Ut enim ad minim veniam
                </p>

                <div className='social'>
                    <FaFacebook size={20} style={{color:'#ffffff', marginRight:'1rem'}}  />
                    <FaTwitter size={20} style={{color:'#ffffff', marginRight:'1rem'}}  />
                    <FaLinkedin size={20} style={{color:'#ffffff', marginRight:'1rem'}}  />
                </div>
        </div>
        
        
        
        
        
        
        
        </div>

    </div>
  )
}

export default Footer