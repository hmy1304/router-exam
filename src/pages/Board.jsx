import React from 'react'
import { communityPosts } from '../data/post'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles/Board.css'

const Board = () => {
  return (
    <section className='board-sec'>
      <div className="inner">
          <h2>community board</h2>
          <Swiper 
          navigation={true} 
          pagination={true}
          loop
          modules={[Navigation, Pagination]} 
          className="board-slide">
          {communityPosts.map(({id, title, content})=> (
            <SwiperSlide className={`slider slider${id}`} key={id}>
              <div className="slide-inner">
                <h4>{title}</h4>
                <p>{content}</p>
              </div>
            </SwiperSlide>
          ))}
          
        </Swiper>




        {/* <ul className='post-list'>
          {communityPosts.map(({id, title, content})=> (
            <li key={id}className="post-item">
              <h3>
                {title}
              </h3>
              <p>
                {content}
              </p>
            </li>
          ))}
        </ul> */}
      </div>
    </section>
  )
}

export default Board