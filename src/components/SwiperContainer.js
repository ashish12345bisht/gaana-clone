// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import Card from './Card';

import { Swiper, SwiperSlide } from "swiper/react";
import '../styles/SwiperContainer.css'
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default ({title,img,name}) => {
  return (
    <div className="swiper-container">
      <h2>{title}</h2>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView="9"
        navigation
        slidesPerGroup={3}
      >
        <SwiperSlide>
          <Card img={img} name={name} />
        </SwiperSlide>
        <SwiperSlide>
          <Card img={img} name={name} />
        </SwiperSlide>
        <SwiperSlide>
          <Card img={img} name={name} />
        </SwiperSlide>
        <SwiperSlide>
          <Card img={img} name={name} />
        </SwiperSlide>
        <SwiperSlide>
          <Card img={img} name={name} />
        </SwiperSlide>
        <SwiperSlide>
          <Card img={img} name={name} />
        </SwiperSlide>
        <SwiperSlide>
          <Card img={img} name={name} />
        </SwiperSlide>
        <SwiperSlide>
          <Card img={img} name={name} />
        </SwiperSlide>
        <SwiperSlide>
          <Card img={img} name={name} />
        </SwiperSlide>
        <SwiperSlide>
          <Card img={img} name={name} />
        </SwiperSlide>
        <SwiperSlide>
          <Card img={img} name={name} />
        </SwiperSlide>
        <SwiperSlide>
          <Card img={img} name={name} />
        </SwiperSlide>
        <SwiperSlide>
          <Card img={img} name={name} />
        </SwiperSlide>
        <SwiperSlide>
          <Card img={img} name={name} />
        </SwiperSlide>
        <SwiperSlide>
          <Card img={img} name={name} />
        </SwiperSlide>
        <SwiperSlide>
          <Card img={img} name={name} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
