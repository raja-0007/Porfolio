import React, { useContext, useEffect } from 'react'
import './navbar.css'
import Toggle from '../toggle/Toggle'
import { Link } from 'react-scroll'

import { themecontext } from '../../Context'
import $ from 'jquery'
function Navbar() {
  const theme = useContext(themecontext)
  const darkmode = theme.state.darkmode
  

  
  return (
    <div className='row n-wrapper  mt-3' id='Navbar'>
      <div className='col-md-5 n-left '>
        <div className='n-name'>Raja</div>
        <span>
        <Toggle />
        
        
        </span>
        <div className='menu'>
        <Link className='navlink' spy={true} to={'Navbar'} smooth={true}><span class="material-symbols-outlined">
home
</span></Link>
          <Link className='navlink' spy={true} to={'Skills'} smooth={true}>
          <span class="material-symbols-outlined">
school
</span>
          </Link>
          <Link className='navlink' spy={true} to={'Portfolio'} smooth={true}>
          <span class="material-symbols-outlined">
local_activity
</span>
          </Link>
          <Link className='navlink' spy={true} to={'Contact'} smooth={true}>
          <span class="material-symbols-outlined">
contact_mail
</span>
          </Link>
          
          
        </div>
        
      </div>
      
      
      
          
      
      <div className='col-md-7 n-right ' id='n-right'>
        <div className='n-list '>
          <ul className='n-ul' >

            <Link spy={true} to={'Navbar'} smooth={true}>
              <li style={{
                background: darkmode ? 'black' : '',
                color: darkmode ? 'white' : ''
              }}
              >Home</li>
            </Link>

            <Link spy={true} to={'Skills'} smooth={true}>
              <li>Skills</li>
            </Link>

            <Link spy={true} to={'Portfolio'} smooth={true}>
              <li>Projects</li>
            </Link>


          </ul>
        </div>
        <Link spy={true} to={'Contact'} smooth={true}>
          <button className='btns'>Contact</button>
        </Link>

      </div>
    </div>

  )
}

export default Navbar
