import React from 'react'
import './Footer.css'
import wave from '../images/wave.svg'
import { Link } from 'react-scroll'
function Footer() {
  return (
    <div className='footer'>
      <div className='f-img'></div>
      <div className='footer-content'>
        <span>RAJA DARAGANI</span>
        <span><i class="fa-solid fa-envelope"></i>&nbsp;rajadaragani@gmail.com</span>
        <div className='f-icons'>
          <a href='https://github.com/raja-0007' target='_blank'><i class="fa-brands fa-github"></i></a>
          <a href='https://instagram.com/raja_dhoni_07?igshid=OGQ5ZDc2ODk2ZA==' target='_blank'><i class="fa-brands fa-instagram"></i></a>
          <a href='https://www.linkedin.com/in/raja-daragani07' target='_blank'>
          <i class="fa-brands fa-linkedin-in"></i>
          </a>
          
        </div>
      </div>
    </div>
  )
}

export default Footer
