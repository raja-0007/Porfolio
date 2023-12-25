import React, { useContext } from 'react'
import './skills.css'

import nodejs from '../images/nodejs.png'
import html from '../images/html.png'
import mongodb from '../images/mongodb.png'
import reactjs from '../images/reactjs.png'
import expressjs from '../images/express.png'
import jquery from '../images/jquery.png'
import css from '../images/css.png'
import bootstrap from '../images/bootstrap.png'
import javascript from '../images/javascript.png'
import resume from './My Resume4.pdf'
import { motion } from 'framer-motion'
import { themecontext } from '../../Context'
function Skills() {
    const theme = useContext(themecontext)
    const darkmode = theme.state.darkmode

    return (
        <div className='row skills' id='Skills'>
            <div className='col-lg-6 skills-left'>
                <span style={{
                    background: darkmode ? 'black' : '',
                    color: darkmode ? 'white' : ''
                }}>My Awesome</span>
                <span>skills</span>
                <span>
                    <span style={{
                        background: darkmode ? 'black' : '',
                        color: darkmode ? 'white' : ''
                    }}>Web Technologies</span>
                    <div className='skillslist'>
                        <span>
                            <span className='skilldetails'>
                                <span style={{
                                    background: darkmode ? 'hsl(0, 0%, 0%,.68)' : '',
                                    color: darkmode ? 'white' : ''
                                }}>Frontend Technologies</span>
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Javascript</li>


                                </ul>
                            </span>

                            <span className='skilldetails'>

                                <span style={{
                                    background: darkmode ? 'hsl(0, 0%, 0%,.68)' : '',
                                    color: darkmode ? 'white' : ''
                                }}>Frontend Libraries</span>
                                <ul>
                                    <li>Bootstrap</li>
                                    <li>Jquery</li>
                                    <li>Reactjs</li>
                                </ul>
                            </span>

                        </span>
                        <span >
                            <span className='skilldetails'>

                                <span style={{
                                    background: darkmode ? 'hsl(0, 0%, 0%,.68)' : '',
                                    color: darkmode ? 'white' : ''
                                }}>Backend Technologies</span>
                                <ul>
                                    <li>Nodejs</li>
                                </ul>
                            </span>

                            <span className='skilldetails'>

                                <span style={{
                                    background: darkmode ? 'hsl(0, 0%, 0%,.68)' : '',
                                    color: darkmode ? 'white' : ''
                                }}>Backend Frameworks</span>
                                <ul>
                                    <li>Expressjs</li>
                                </ul>
                            </span>

                        </span>
                        <span >
                            <span className='skilldetails'>
                            
                                <span style={{
                                    background: darkmode ? 'hsl(0, 0%, 0%,.68)' : '',
                                    color: darkmode ? 'white' : ''
                                }}>Database</span>
                                <ul>
                                    <li>MongoDB</li>
                                </ul>
                            </span>
                            <span className='skilldetails'>
                            
                                <span style={{
                                    background: darkmode ? 'hsl(0, 0%, 0%,.68)' : '',
                                    color: darkmode ? 'white' : ''
                                }}>Additional Skills</span>
                                <ul>
                                    <li>Git Hub</li>
                                    <li>Git Bash</li>
                                </ul>
                            </span>

                        </span>
                    </div>



                </span>
                <a href={resume} download>
                    <button className='btns s-btn'>Download cv</button>
                </a>
            </div>
            <div className='col-lg-6 skills-right'>
                <motion.div
                    initial={{ rotate: 45 }}
                    whileInView={{ rotate: 0 }}
                    viewport={{ margin: '-40px' }}
                    transition={{ duration: 3, type: 'spring' }}
                    className='p-backcircle'>
                    <div className='p-seccircle'>
                        <img className='p-img' src={reactjs}></img>
                    </div>
                    <div className='p-seccircle'>
                        <img className='p-img' src={nodejs}></img>
                    </div>
                    <div className='p-seccircle'>
                        <img className='p-img' src={mongodb}></img>
                    </div>
                    <div className='p-seccircle'>
                        <img className='p-img' src={expressjs}></img>
                    </div>
                    <motion.div
                        initial={{ rotate: -65 }}
                        whileInView={{ rotate: 0 }}
                        viewport={{ margin: '-40px' }}
                        transition={{ duration: 3, type: 'spring' }}
                        className='p-maincircle'>
                        <div className='p-seccircle'>
                            <img className='p-img' src={javascript}></img>
                        </div>
                        <div className='p-seccircle'>
                            <img className='p-cssimg' src={css}></img>
                        </div>
                        <div className='p-seccircle'>
                            <img className='p-img' src={bootstrap}></img>
                        </div>
                        <div className='p-seccircle'>
                            <img className='p-img' src={jquery}></img>
                        </div>
                        <div className='p-seccircle'>
                            <img className='p-img' src={html}></img>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default Skills
