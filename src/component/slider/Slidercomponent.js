import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './slider.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import img from '../../assets/-473Wx593H-469138739-multi-MODEL.avif'
import img1 from '../../assets/61LTJSjq18L._AC_UY300_.jpg'
import img2 from '../../assets/8202766315-500x500.webp'
import img3 from '../../assets/cover.avif'
import img4 from '../../assets/jewellery-look.webp'
import img5 from '../../assets/w8v79_512.webp'

const Slidercomponent = () => {
    return (
        <>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide><img src={img} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img4} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img5} alt="" /></SwiperSlide>
          </Swiper>
          </>
      );
}

export default Slidercomponent
