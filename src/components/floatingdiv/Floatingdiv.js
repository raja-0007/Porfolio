import React, { useContext } from 'react'
import './floatingdiv.css'
import { themecontext } from '../../Context'
function Floatingdiv({ image, txt1, txt2 }) {
  const theme = useContext(themecontext)
  const darkmode = theme.state.darkmode
  return (
    <div className='floatingdiv' style={{
      background: darkmode ? 'black' : '',
      color: darkmode ? 'white' : ''
    }}>
      <img className='f-pic' src={image} alt=''></img>
      
      <span>
        {txt1}
        <br></br>
        {txt2}
      </span>
    </div>
  )
}

export default Floatingdiv
