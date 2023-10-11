import React, { useContext } from 'react'
import './Portfolio.css'
import Card from '../cards/Card'
import prj1 from '../images/Screenshot (198).png'
import prj2 from '../images/Screenshot (200).png'
import prj3 from '../images/Screenshot (201).png'
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

                        <Card
                            emoji={prj1}
                            heading={'Weather App'}
                            detail={'This is an user-friendly react app that enables the user to findthe weather at any city across the globe. This fetchesthe weather report from APIs(openweatherAPI)'}
                            link={'https://weatherapp-ten-zeta.vercel.app/'}
                        />


                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='project'>
                            <Card
                                emoji={prj2}
                                heading={'Noteit'}
                                detail={'a user-friendly notes app using reactjswhich enables the user to create, edit, archive, delete, searchthe notes and this also enables users to set and manageremainders.'}
                                link={'https://github.com/raja-0007/Noteit'}
                            />
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='project'>
                            <Card
                                emoji={prj3}
                                heading={'Design'}
                                detail={'figma, sketch, photoshop, adove, adobe xd'}
                            />
                        </div>

                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Portfolio
