export const sliderSettings = {
    slidesPerView: 1,
    spaceBetween: 50,
    breakpoints: {
      340: {
        slidesPerView: 2
      },
      480: {
        slidesPerView: 2
      },
      600: {
        slidesPerView: 3
      },
      750: {
        slidesPerView: 3
      },
      1100: {
        slidesPerView: 4
      }
    },
    autoplay: {
      delay: 2500, // Time between transitions (in milliseconds)
      disableOnInteraction:true// Disable autoplay when user interacts with the swiper
    }
  };
  