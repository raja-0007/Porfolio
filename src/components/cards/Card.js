import React, { useContext } from 'react'
import './card.css'
import { themecontext } from '../../Context'
function Card({ emoji, heading, detail, link, techs }) {
  const theme = useContext(themecontext)
    const darkmode = theme.state.darkmode
  return (
    <div className='card'>
      <img src={emoji} ></img>
      <div className='carddiv-body'>
        <span style={{
          color: darkmode ? 'white' : ''
        }}>{heading}</span>
        <span>{detail}</span>
        <span ><span className='text-dark'>Technologies used:</span><br></br>{techs}</span>

        <a href={link} target='_blank' className='visitLink '>
          visit
        </a>

      </div>

    </div>
  )
}

export default Card
