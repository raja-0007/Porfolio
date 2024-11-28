import React, { useContext } from 'react'
import { themecontext } from '../../Context'
import './Tools.css'
import { motion } from 'framer-motion'


const Tools = () => {
    const transiton = { duration: 2, type: 'spring' }
    const theme = useContext(themecontext)
    const darkmode = theme.state.darkmode
    const toolsList = ['ReactFlow', 'Redux', 'Jwt', 'vimeo', 'stripe', 'mirotalkP2P', 'EditorJs', 'sockets']
    const icons = {
        ReactFlow: '/ToolsImages/reactflowLogo2.png',
        Redux: '/ToolsImages/redux.png',
        Jwt: '/ToolsImages/jwtLogo.png',
        vimeo: '/ToolsImages/vimeoLogo.png',
        stripe: '/ToolsImages/stripeLogo.png',
        mirotalkP2P: '/ToolsImages/mirotalkLogo.png',
        EditorJs: '/ToolsImages/editorjsLogo.png',
        sockets: '/ToolsImages/socketsLogo.png'
    }

    const positions={
        ReactFlow:{
            initial:{ top: '-55%', right: '55%' },
            whileInView:{ right: '0%', top: '0%' }
        }

    ,
        Redux:{
            initial:{ top: '75%', left: '-11%' },
            whileInView:{ top: '0%', left: '0%' }
        },
        Jwt:{
            initial:{ top: '35%', left: '11%' },
            whileInView:{ top: '0%', left: '0%' }
        },
        vimeo:{
            initial:{ top: '-55%', right: '-55%' },
            whileInView:{ top: '0%', right: '0%' }
        },
        stripe:{
            initial:{ top: '55%', left: '-55%' },
            whileInView:{ top: '0%', left: '0%' }
        },
        mirotalkP2P:{
            initial:{ top: '15%', left: '11%' },
            whileInView:{ top: '0%', left: '0%' }
        },
        EditorJs:{
            initial:{ top: '35%', right: '-11%' },
            whileInView:{ top: '0%', right: '0%' }
        },
        sockets:{
            initial:{ top: '55%', right: '-55%' },
            whileInView:{ top: '0%', right: '0%' }
        }

    }
    return (
        <div className='tools' id='tools'>
            <span style={{
                background: darkmode ? 'black' : '',
                color: darkmode ? 'white' : ''
            }}>Libraries and</span>
            <span>Tools</span>

            <div className='toolsDiv gap-14'>
                {toolsList.map((tool, i) => {
                    return (
                        

                        <div className='tool'>
                            <motion.div
                    initial={positions[tool].initial}
                    whileInView={positions[tool].whileInView}
                    transition={transiton}
                    className='i-floatingdiv-tools'>

                            <div className='toolImg' style={{
                                background: darkmode ? 'white' : 'white',
                            }}><img style={{ width: '100%' }} src={icons[tool]} alt='tool'/></div><p style={{
                                background: darkmode ? 'black' : '',
                                color: darkmode ? 'white' : ''
                            }}>{tool}</p>
                    </motion.div>
                            </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Tools