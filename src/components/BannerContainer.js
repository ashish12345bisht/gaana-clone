import React from 'react';
import '../styles/BannerContainer.css'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
  return (
    <div className="banner">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={100}
        slidesPerView="3"
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <img
            className="banner-images"
            src="https://img.freepik.com/free-psd/music-concept-banner-template_23-2148707322.jpg?size=626&ext=jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="banner-images"
            src="https://img.freepik.com/free-psd/music-concept-banner-template_23-2148707322.jpg?size=626&ext=jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="banner-images"
            src="https://img.freepik.com/free-psd/music-concept-banner-template_23-2148707322.jpg?size=626&ext=jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="banner-images"
            src="https://img.freepik.com/free-psd/music-concept-banner-template_23-2148707322.jpg?size=626&ext=jpg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};