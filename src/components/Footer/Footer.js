import React from 'react'
import './Footer.css'
import wave from '../images/wave.svg'
function Footer() {
  return (
    <div className='footer'>
      <img className='f-img' src={wave}></img>
      <div className='footer-content'>
        <span>rajadaragani@gmail.com</span>
        <div className='f-icons'>
        <i class="fa-brands fa-github"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-linkedin-in"></i>
        </div>
      </div>
    </div>
  )
}

export default Footer
