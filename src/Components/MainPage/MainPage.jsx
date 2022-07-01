import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Pagination } from "swiper";
import 'swiper/css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBookmark } from "@fortawesome/fontawesome-free-regular"
import './MainPage.css'

const MainPage = () => {
    return (
        <div className="mainbg">
            <div className="mainpost">
                <span className='mTitle'>
              
                    UPGRADE</span>
                <span className='msynopsis'>A Man Re-lives his life by the help of <br></br> the only thing he disguised,<br></br> The robots</span>
                <button className='mbutton'>
                <FontAwesomeIcon className='micon' icon={faBookmark}></FontAwesomeIcon>
                    Read More</button>
            </div>
            <div className="cards">
                <span className='cTitle'>Discover</span>
                <Swiper
                slidesPerView={5}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper">
                    <SwiperSlide>
                        <img src="https://res.cloudinary.com/dp9icjdvf/image/upload/v1654939148/thebatman22.jpg" alt="botmon" />
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src="https://res.cloudinary.com/dp9icjdvf/image/upload/v1654939148/thebatman22.jpg" alt="botmon" />
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src="https://res.cloudinary.com/dp9icjdvf/image/upload/v1654939148/thebatman22.jpg" alt="botmon" />
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src="https://res.cloudinary.com/dp9icjdvf/image/upload/v1654939148/thebatman22.jpg" alt="botmon" />
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src="https://res.cloudinary.com/dp9icjdvf/image/upload/v1654939148/thebatman22.jpg" alt="botmon" />
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src="https://res.cloudinary.com/dp9icjdvf/image/upload/v1654939148/thebatman22.jpg" alt="botmon" />
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src="https://res.cloudinary.com/dp9icjdvf/image/upload/v1654939148/thebatman22.jpg" alt="botmon" />
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src="https://res.cloudinary.com/dp9icjdvf/image/upload/v1654939148/thebatman22.jpg" alt="botmon" />
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src="https://res.cloudinary.com/dp9icjdvf/image/upload/v1654939148/thebatman22.jpg" alt="botmon" />
                    </SwiperSlide>
                    </Swiper>
            </div>
        </div>
    )
}

export default MainPage
