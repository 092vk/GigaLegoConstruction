import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css'
import { Autoplay } from 'swiper/modules';

const SimpleSlider = ({ cardsData }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,

  };

  return (
    <div className="slider-wrapper">
    <Slider {...settings}>
      {cardsData.map((card, index) => (
        <div key={index} className='Scard'>
          <img src={card.image} alt={card.name} />
          <div className='slider-card'>
            <h3>{card.name}</h3>
            <p>{card.info}</p>
          </div>
        </div>
      ))}
    </Slider>
    </div>
  );
};

export default SimpleSlider;
