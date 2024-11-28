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
import nextjs from '../images/nextjs.png'
import tailwind from '../images/tailwind.png'
import github from '../images/github.png'
import resume from './MyResume.pdf'
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
                    <div className='flex gap-10 justify-evenly'>
                        <span className='flex flex-col gap-3'>
                            <span className='skilldetails'>
                                <span style={{
                                    background: darkmode ? 'hsl(0, 0%, 0%,.68)' : '',
                                    color: darkmode ? 'white' : ''
                                }}>Frontend Technologies</span>
                                <ul className='list-disc ps-3'>
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
                                <ul className='list-disc ps-3'>
                                    <li>Reactjs</li>
                                    <li>Nextjs</li>
                                    <li>React Native</li>
                                    <li>Tailwind</li>
                                    <li>Bootstrap</li>
                                    <li>Jquery</li>
                                    {/* <li>Redux Toolkit</li> */}
                                </ul>
                            </span>

                        </span>
                        <span className='flex flex-col gap-3'>
                            <span className='skilldetails'>

                                <span style={{
                                    background: darkmode ? 'hsl(0, 0%, 0%,.68)' : '',
                                    color: darkmode ? 'white' : ''
                                }}>Backend Technologies</span>
                                <ul className='list-disc ps-3'>
                                    <li>Nodejs</li>
                                </ul>
                            </span>

                            <span className='skilldetails'>

                                <span style={{
                                    background: darkmode ? 'hsl(0, 0%, 0%,.68)' : '',
                                    color: darkmode ? 'white' : ''
                                }}>Backend Frameworks</span>
                                <ul className='list-disc ps-3'>
                                    <li>Expressjs</li>
                                </ul>
                            </span>
                            <span className='skilldetails'>

                                <span style={{
                                    background: darkmode ? 'hsl(0, 0%, 0%,.68)' : '',
                                    color: darkmode ? 'white' : ''
                                }}>Database</span>
                                <ul className='list-disc ps-3'>
                                    <li>MongoDB</li>
                                </ul>
                            </span>
                            <span className='skilldetails'>

                                <span style={{
                                    background: darkmode ? 'hsl(0, 0%, 0%,.68)' : '',
                                    color: darkmode ? 'white' : ''
                                }}>Additional Skills</span>
                                <ul className='list-disc ps-3'>
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
                    <div className='p-seccircle'>
                        <img className='p-img' src={github}></img>
                    </div>
                    <div className='p-seccircle'>
                        <img className='p-img' src={nextjs}></img>
                    </div>
                    <div className='p-seccircle'>
                        <img className='p-img' src={tailwind}></img>
                    </div>
                    <div className='p-seccircle'>
                        <div className='p-img'><svg width="60" height="60" viewBox="0 0 550 550" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="275" cy="275" r="275" fill="#23272D" />
                            <path d="M275.242 270.209C288.339 270.209 298.957 259.592 298.957 246.495C298.957 233.397 288.339 222.78 275.242 222.78C262.145 222.78 251.527 233.397 251.527 246.495C251.527 259.592 262.145 270.209 275.242 270.209Z" fill="#61DAFB" />
                            <path d="M275.25 295.082C345.528 295.082 402.5 273.329 402.5 246.496C402.5 219.662 345.528 197.909 275.25 197.909C204.972 197.909 148 219.662 148 246.496C148 273.329 204.972 295.082 275.25 295.082Z" stroke="#61DAFB" stroke-width="11.5682" />
                            <path d="M233.168 270.789C268.307 331.651 315.632 370.114 338.87 356.697C362.109 343.28 352.461 283.065 317.322 222.202C282.183 161.339 234.859 122.877 211.62 136.294C188.382 149.71 198.029 209.926 233.168 270.789Z" stroke="#61DAFB" stroke-width="11.5682" />
                            <path d="M233.168 222.202C198.029 283.065 188.382 343.28 211.62 356.697C234.859 370.113 282.183 331.651 317.322 270.788C352.461 209.925 362.109 149.71 338.87 136.293C315.632 122.876 268.307 161.339 233.168 222.202Z" stroke="#61DAFB" stroke-width="11.5682" />
                            <path d="M141.662 427V391.209H156.872C160.697 391.209 163.472 391.535 165.197 392.186C166.939 392.82 168.33 393.96 169.372 395.604C170.414 397.247 170.935 399.127 170.935 401.243C170.935 403.929 170.145 406.15 168.566 407.908C166.988 409.65 164.628 410.748 161.486 411.204C163.049 412.116 164.335 413.117 165.344 414.207C166.369 415.298 167.744 417.234 169.47 420.018L173.84 427H165.197L159.973 419.212C158.117 416.429 156.848 414.679 156.164 413.963C155.48 413.23 154.756 412.734 153.991 412.474C153.226 412.197 152.014 412.059 150.354 412.059H148.889V427H141.662ZM148.889 406.346H154.235C157.702 406.346 159.867 406.199 160.729 405.906C161.592 405.613 162.268 405.109 162.756 404.393C163.244 403.676 163.488 402.781 163.488 401.707C163.488 400.503 163.163 399.534 162.512 398.802C161.877 398.053 160.974 397.581 159.802 397.386C159.216 397.304 157.458 397.264 154.528 397.264H148.889V406.346ZM190.236 418.748L197.072 419.896C196.193 422.402 194.802 424.314 192.897 425.633C191.009 426.935 188.641 427.586 185.793 427.586C181.285 427.586 177.948 426.113 175.783 423.167C174.074 420.807 173.22 417.828 173.22 414.231C173.22 409.935 174.343 406.574 176.589 404.148C178.835 401.707 181.675 400.486 185.109 400.486C188.967 400.486 192.01 401.764 194.24 404.319C196.47 406.858 197.536 410.757 197.438 416.014H180.251C180.3 418.048 180.853 419.635 181.911 420.774C182.969 421.897 184.287 422.459 185.866 422.459C186.94 422.459 187.844 422.166 188.576 421.58C189.309 420.994 189.862 420.05 190.236 418.748ZM190.627 411.814C190.578 409.829 190.065 408.323 189.089 407.298C188.112 406.256 186.924 405.735 185.524 405.735C184.027 405.735 182.79 406.281 181.813 407.371C180.837 408.462 180.357 409.943 180.373 411.814H190.627ZM205.681 408.982L199.455 407.859C200.155 405.353 201.359 403.497 203.068 402.293C204.777 401.089 207.316 400.486 210.686 400.486C213.745 400.486 216.024 400.853 217.521 401.585C219.019 402.301 220.069 403.221 220.671 404.344C221.289 405.451 221.599 407.493 221.599 410.472L221.525 418.479C221.525 420.758 221.631 422.443 221.843 423.533C222.071 424.607 222.486 425.763 223.088 427H216.301C216.122 426.544 215.902 425.869 215.642 424.974C215.528 424.567 215.446 424.298 215.397 424.168C214.226 425.307 212.972 426.162 211.638 426.731C210.303 427.301 208.879 427.586 207.365 427.586C204.696 427.586 202.588 426.862 201.042 425.413C199.512 423.965 198.747 422.133 198.747 419.92C198.747 418.455 199.097 417.153 199.797 416.014C200.497 414.858 201.473 413.979 202.727 413.377C203.996 412.758 205.819 412.221 208.195 411.766C211.402 411.163 213.623 410.602 214.86 410.081V409.397C214.86 408.079 214.535 407.143 213.884 406.59C213.233 406.02 212.004 405.735 210.197 405.735C208.977 405.735 208.024 405.979 207.341 406.468C206.657 406.94 206.104 407.778 205.681 408.982ZM214.86 414.549C213.981 414.842 212.59 415.192 210.686 415.599C208.781 416.006 207.536 416.404 206.95 416.795C206.055 417.43 205.607 418.235 205.607 419.212C205.607 420.172 205.965 421.002 206.682 421.702C207.398 422.402 208.309 422.752 209.416 422.752C210.653 422.752 211.833 422.345 212.956 421.531C213.786 420.913 214.331 420.156 214.592 419.261C214.771 418.675 214.86 417.56 214.86 415.916V414.549ZM248.493 408.738L241.73 409.959C241.503 408.608 240.982 407.591 240.168 406.907C239.37 406.224 238.329 405.882 237.043 405.882C235.334 405.882 233.967 406.476 232.941 407.664C231.932 408.836 231.428 410.805 231.428 413.572C231.428 416.648 231.94 418.821 232.966 420.091C234.007 421.36 235.399 421.995 237.141 421.995C238.443 421.995 239.509 421.629 240.339 420.896C241.169 420.148 241.755 418.87 242.097 417.063L248.835 418.211C248.135 421.303 246.792 423.639 244.807 425.218C242.821 426.797 240.16 427.586 236.823 427.586C233.031 427.586 230.004 426.39 227.741 423.997C225.495 421.604 224.372 418.292 224.372 414.061C224.372 409.78 225.503 406.451 227.766 404.075C230.028 401.683 233.088 400.486 236.945 400.486C240.103 400.486 242.609 401.17 244.465 402.537C246.337 403.888 247.679 405.955 248.493 408.738ZM263.107 401.072V406.541H258.42V416.99C258.42 419.106 258.461 420.343 258.542 420.701C258.64 421.043 258.843 421.328 259.152 421.556C259.478 421.784 259.868 421.897 260.324 421.897C260.959 421.897 261.879 421.678 263.083 421.238L263.669 426.561C262.074 427.244 260.267 427.586 258.249 427.586C257.012 427.586 255.897 427.382 254.904 426.976C253.911 426.552 253.179 426.015 252.707 425.364C252.251 424.697 251.934 423.802 251.755 422.679C251.608 421.881 251.535 420.27 251.535 417.845V406.541H248.386V401.072H251.535V395.921L258.42 391.917V401.072H263.107ZM276.906 427V391.209H283.938L298.586 415.11V391.209H305.3V427H298.049L283.62 403.66V427H276.906ZM315.544 408.982L309.318 407.859C310.018 405.353 311.223 403.497 312.932 402.293C314.641 401.089 317.18 400.486 320.549 400.486C323.609 400.486 325.887 400.853 327.385 401.585C328.882 402.301 329.932 403.221 330.534 404.344C331.153 405.451 331.462 407.493 331.462 410.472L331.389 418.479C331.389 420.758 331.494 422.443 331.706 423.533C331.934 424.607 332.349 425.763 332.951 427H326.164C325.985 426.544 325.765 425.869 325.505 424.974C325.391 424.567 325.31 424.298 325.261 424.168C324.089 425.307 322.836 426.162 321.501 426.731C320.166 427.301 318.742 427.586 317.229 427.586C314.559 427.586 312.451 426.862 310.905 425.413C309.375 423.965 308.61 422.133 308.61 419.92C308.61 418.455 308.96 417.153 309.66 416.014C310.36 414.858 311.337 413.979 312.59 413.377C313.859 412.758 315.682 412.221 318.059 411.766C321.265 411.163 323.487 410.602 324.724 410.081V409.397C324.724 408.079 324.398 407.143 323.747 406.59C323.096 406.02 321.867 405.735 320.061 405.735C318.84 405.735 317.888 405.979 317.204 406.468C316.521 406.94 315.967 407.778 315.544 408.982ZM324.724 414.549C323.845 414.842 322.453 415.192 320.549 415.599C318.645 416.006 317.399 416.404 316.813 416.795C315.918 417.43 315.471 418.235 315.471 419.212C315.471 420.172 315.829 421.002 316.545 421.702C317.261 422.402 318.173 422.752 319.279 422.752C320.516 422.752 321.696 422.345 322.819 421.531C323.649 420.913 324.195 420.156 324.455 419.261C324.634 418.675 324.724 417.56 324.724 415.916V414.549ZM347.639 401.072V406.541H342.951V416.99C342.951 419.106 342.992 420.343 343.073 420.701C343.171 421.043 343.374 421.328 343.684 421.556C344.009 421.784 344.4 421.897 344.855 421.897C345.49 421.897 346.41 421.678 347.614 421.238L348.2 426.561C346.605 427.244 344.799 427.586 342.78 427.586C341.543 427.586 340.428 427.382 339.436 426.976C338.443 426.552 337.71 426.015 337.238 425.364C336.783 424.697 336.465 423.802 336.286 422.679C336.14 421.881 336.066 420.27 336.066 417.845V406.541H332.917V401.072H336.066V395.921L342.951 391.917V401.072H347.639ZM349.899 397.557V391.209H356.76V397.557H349.899ZM349.899 427V401.072H356.76V427H349.899ZM368.444 427L357.995 401.072H365.197L370.08 414.305L371.496 418.724C371.87 417.601 372.106 416.86 372.204 416.502C372.432 415.77 372.676 415.037 372.937 414.305L377.868 401.072H384.924L374.621 427H368.444ZM401.662 418.748L408.498 419.896C407.619 422.402 406.228 424.314 404.323 425.633C402.435 426.935 400.067 427.586 397.219 427.586C392.71 427.586 389.374 426.113 387.209 423.167C385.5 420.807 384.646 417.828 384.646 414.231C384.646 409.935 385.769 406.574 388.015 404.148C390.261 401.707 393.101 400.486 396.535 400.486C400.393 400.486 403.436 401.764 405.666 404.319C407.896 406.858 408.962 410.757 408.864 416.014H391.677C391.726 418.048 392.279 419.635 393.337 420.774C394.395 421.897 395.713 422.459 397.292 422.459C398.366 422.459 399.27 422.166 400.002 421.58C400.734 420.994 401.288 420.05 401.662 418.748ZM402.053 411.814C402.004 409.829 401.491 408.323 400.515 407.298C399.538 406.256 398.35 405.735 396.95 405.735C395.453 405.735 394.216 406.281 393.239 407.371C392.263 408.462 391.783 409.943 391.799 411.814H402.053Z" fill="#61DAFB" />
                        </svg></div>
                        
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
