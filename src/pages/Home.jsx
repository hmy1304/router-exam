import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { homeSlides } from '../data/homeSlide';
import './styles/Home.css'

const Home = () => {
  return (
    <section className='home'>
      <div className="inner">
        <h2>home</h2>
        Home

        <Swiper 
        navigation={true} 
        pagination={true} 
        // autoplay={true}
        loop
        modules={[Navigation, Pagination, Autoplay]} 
        className="home-slide">
          {homeSlides.map(({id, title, img, subtitle})=>(
            <SwiperSlide 
            key={id} 
            style={{backgroundImage:`url(${img})`}}>
              <div className="slide-inner">
                <h4>
                  {title}
                </h4>
                <p>{subtitle}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Home