import React, { useContext } from 'react'
import './Portfolio.css'
import Card from '../cards/Card'
import prj1 from '../images/Screenshot (198).png'
import prj2 from '../images/Screenshot (200).png'
import prj3 from '../images/Screenshot (201).png'
import prj4 from '../images/Screenshot (211).png'
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
                                emoji={prj4}
                                heading={'ByteBLOG'}
                                detail={'This is a bloging website in which users can login, create personalised blogs and react to each other’s blogs ( likes, comments ).'}
                                techs={'Reactjs, nodejs, expressjs, mongodb, Bootstrap, Jquery'}
                                link={'https://github.com/raja-0007/ByteBLOG'}
                            />
                        </div>



                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='project'>
                            <Card
                                emoji={prj2}
                                heading={'Noteit'}
                                detail={'a user-friendly notes app using reactjs which enables the user to create, edit, archive, delete, search the notes and this also enables users to set and manage remainders.'}
                                techs={'Reactjs, nodejs, expressjs, mongodb, Jquery, Bootstrap'}
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
