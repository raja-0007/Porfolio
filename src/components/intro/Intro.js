import React, { useContext } from 'react'
import './intro.css'
import pic from '../images/IMG.jpg'
import crown from '../images/crown.png'
import Floatingdiv from '../floatingdiv/Floatingdiv'
import { motion } from 'framer-motion'
import { themecontext } from '../../Context'
import { Link } from 'react-scroll'

function Intro() {
    const transiton = { duration: 2, type: 'spring' }
    const theme = useContext(themecontext)
    const darkmode = theme.state.darkmode
    return (
        <div className='row intro' id='Intro'>
            <div className='col-lg-6 i-left'>
                <div className='i-name'>
                    <span style={{
                        
                        color: darkmode ? 'white' : ''
                    }}>Hi! I am</span>
                    <span>Raja Daragani</span>
                    <span>Web developer with high level of knowledge in web designing
                        and development, producing the quality work
                    </span>

                </div>
                <Link className='btns i-btn' spy={true} to={'Contact'} smooth={true}>Hire me</Link>
                
                <div className='i-icons'>
                    <a href='https://github.com/raja-0007' target='_blank'>
                    <i class="fa-brands fa-github"></i>
                    </a>

                    <a href='https://instagram.com/raja_dhoni_07?igshid=OGQ5ZDc2ODk2ZA==' target='_blank'>
                    <i class="fa-brands fa-instagram"></i>
                    </a>
                    
                    <a href='https://www.linkedin.com/in/raja-daragani07' target='_blank'>
                    <i class="fa-brands fa-linkedin-in"></i>
                    </a>
                    
                </div>

            </div>
            <div className='col-lg-6 i-right'>
                <div className='i-picdiv'>
                    <img src={pic} className='i-pic'></img>
                </div>
                <motion.div
                    initial={{ top: '15%', right: '0%' }}
                    whileInView={{ right: '10%', top: '18%' }}
                    transition={transiton}
                    className='i-floatingdiv'>
                    <Floatingdiv image={crown} txt1={'Full Stack'} txt2={'Developer'} />
                </motion.div>
                <motion.div
                    initial={{ top: '75%', left: '-11%' }}
                    whileInView={{ top: '72%', left: '1%' }}
                    transition={transiton}
                    className='i-floatingdiv2'>
                    <Floatingdiv image={crown} txt1={'Best Design'} txt2={'and Development'} />
                </motion.div>

            </div>
        </div>
    )
}

export default Intro
