import React, { useContext, useState } from 'react'
import './card.css'
import { themecontext } from '../../Context'
import { FaCircleChevronDown } from "react-icons/fa6";
import { FaCircleChevronUp } from "react-icons/fa6";


function Card({ emoji, heading, detail, link, techs }) {
  const theme = useContext(themecontext)
    const darkmode = theme.state.darkmode
    const [details, setDetails] = useState(false)
  return (
    <div className='card'>
      <img src={emoji}></img>
      <div className={` ${details ? 'carddiv-body' : 'carddiv-body-hide'}`} style={{
          backgroundColor: darkmode ? 'black' : ''
        }}>
        <span style={{
          color: darkmode ? 'white' : ''
        }}>{heading}</span>
        <span>{detail}</span>
        <span ><span style={{
          color: darkmode ? 'white' : 'black'
        }}>Technologies used:</span><br></br>{techs}</span>

        <a href={link} target='_blank' className='visitLink '>
          visit
        </a>

      </div>
      <button style={{position:'absolute', right:2, bottom:2, backgroundColor:'hsl(39, 100%, 50%)', borderRadius:10, padding:6, color:'white'}} className='flex items-center gap-1' onClick={() => setDetails(!details)}>details {!details ? <FaCircleChevronDown />:<FaCircleChevronUp />}      </button>

    </div>
  )
}

export default Card
