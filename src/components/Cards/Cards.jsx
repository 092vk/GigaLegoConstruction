import React from 'react'
import './Cards.css'

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css'

// import data from '../../utils/slider.json'

import { sliderSettings } from '../../utils/common'

function Cards({ data }) {
  console.log(data)
  return (
    <section className='r-wrapper'>
      <div className='paddings innerWidth r-container'>
        <div className="r-head flexColStart">
          <span className='orangeText'>Explore Services</span>
          <span className='primaryText'>Services We Provide</span>
        </div>

        <Swiper {...sliderSettings}>
          <SliderButtons />
          {
            data ? data.map((card, i) => (
              <SwiperSlide key={i}>
                <a href={card.link}>
                <div className="flexColStart r-card">
                  <img src={card.image} alt='home' />
                  <span className='primaryText'>{card.name}</span>
                </div>
                </a>
              </SwiperSlide>
            )) : <p>Loading...</p>
          }
        </Swiper>
      </div>
    </section>
  )
}

export default Cards

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className='flexCenter r-buttons'>
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  )
}
