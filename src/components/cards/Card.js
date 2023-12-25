import React from 'react'
import './card.css'
function Card({ emoji, heading, detail, link, techs }) {
  return (
    <div className='card'>
      <img src={emoji}></img>
      <div className='carddiv-body'>
        <span>{heading}</span>
        <span>{detail}<br></br>Technologies used:<br></br>{techs}</span>
        
        <a href={link} target='_blank'>
        <button className='btns c-btn'>visit</button>
        </a>
        
      </div>

    </div>
  )
}

export default Card
