import React, { useContext } from 'react'
import './Portfolio.css'
import Card from '../cards/Card'
import prj1 from '../images/Screenshot (198).png'
import Agro from '../images/Agro.png'
import SkillSphere from '../images/SkillSphere.png'
import ByteBLOG from '../images/Screenshot (211).png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css/pagination'
import 'swiper/css'
import { themecontext } from '../../Context'

function Portfolio() {
    const theme = useContext(themecontext)
    const darkmode = theme.state.darkmode
    return (
        <div className='portfolio ' id='Portfolio'>
            <span style={{
                background: darkmode ? 'black' : '',
                color: darkmode ? 'white' : ''
            }}>Recent projects</span>
            <span>Portfolio</span>

            <div className='swiperdiv'>
                <Swiper
                    modules={[Pagination]}
                    slidesPerView={1}

                    pagination={{ clickable: true }}

                >
                    <SwiperSlide>
                        <div className='project'>
                            <Card
                                emoji={SkillSphere}
                                heading={'SkillSphere'}
                                detail={
"                                    Acomprehensive online learning platform using Next.js and Express.js. Features include user authentication(JWT, Email), course creation and management, video streaming, payment integration, and interactive user interfaces. Implemented RESTful APIs for seamless client-server communication and optimized performance for a smooth user experience."} 
                               techs={'Vimeo, Stripe, JWT Authentication, NextJs, ExpressJs, EmailJs'}
                                link={'https://github.com/raja-0007/ByteBLOG'}
                            />
                        </div>



                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='project'>
                            <Card
                                emoji={ByteBLOG}
                                heading={'ByteBLOG'}
                                detail={'This is a dynamic blogging website using React.js for the front end and Express.js for the backend. Enabled users to create, like, and comment on blogs, fostering an interactive community. Implemented a robust user authentication system to ensure secure user interactions.'}
                                techs={'Reactjs, nodejs, expressjs, mongodb, Bootstrap, Jquery'}
                                link={'https://github.com/raja-0007/ByteBLOG'}
                            />
                        </div>



                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='project'>
                            <Card
                                emoji={Agro}
                                heading={'Agro'}
                                detail={
"                                    Agro is a full-stack application using Next.js and Express.js for farmers to optimize crop yield and fertilizer usage. Integrated a weather API to provide real-time weather updates and tailored recommendations. Implemented OTP verification via email to ensure secure user registration."
                                                                }
                                techs={'NextJs, ExpressJs, EmailJs, WeatherApi, Framer-motion, Python'}
                                link={'https://github.com/raja-0007/Noteit'}
                            />
                        </div>

                    </SwiperSlide>


                    <SwiperSlide>
                        <div className='project'>
                            <Card
                                emoji={prj1}
                                heading={'Weather App'}
                                detail={'This is an user-friendly react application that enables the user to find the weather at any city across the globe. This fetches the weather report from APIs(openweatherAPI)'}
                                techs={'HTML, CSS, Reactjs, openweatherapi'}
                                link={'https://weatherapp-ten-zeta.vercel.app/'}
                            />
                        </div>



                    </SwiperSlide>
                    
                    
                </Swiper>
            </div>
        </div>
    )
}

export default Portfolio
