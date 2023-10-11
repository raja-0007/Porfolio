import React from 'react'
import './Toggle.css'
import { themecontext } from '../../Context'
import { useContext } from 'react'
function Toggle() {

    const theme = useContext(themecontext)
    const darkmode = theme.state.darkmode
    const handletheme=()=>{
        theme.dispatch({type:'toggle'})
        console.log('chahc')
    }
    return (
        <div className='toggle' onClick={handletheme}>
            <span class="material-symbols-outlined">
                dark_mode
            </span>
            <span class="material-symbols-outlined">
                sunny
            </span>
            
            <div className='t-btn'  style={darkmode ? {left:'2px'}:{right:'2px'}}></div>
        </div>
    )
}

export default Toggle
