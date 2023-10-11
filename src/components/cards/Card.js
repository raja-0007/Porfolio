import React from 'react'
import './card.css'
function Card({ emoji, heading, detail, link }) {
  return (
    <div className='card'>
      <img src={emoji}></img>
      <div className='carddiv-body'>
        <span>{heading}</span>
        <span>{detail}</span>
        <a href={link} target='_blank'>
        <button className='c-btn'>visit</button>
        </a>
        
      </div>

    </div>
  )
}

export default Card
