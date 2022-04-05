import React from 'react'
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);
const Swipes = (props) => {
    const {images} = props;
  return (
     <Swiper
        effect={"coverflow"}
        grabCursor={true}      
        centeredSlides={true}
        slidesPerView={"auto"}
           coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}  
        className="mySwiper"
      >
        {images.map((img, i) => {
         return (
            <SwiperSlide key={i}>
              <img src={img} alt="" />
            </SwiperSlide>
          );   
     })}
      </Swiper>
  )
}

export default Swipes