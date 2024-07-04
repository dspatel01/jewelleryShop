import React from 'react';
// Import Swiper React components
import { FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './testimonialSlider.css';

import { FaRegStar } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const TestmonialSlider = () => {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 5,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          {/* <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt=" " /> */}
          <div className='w-80 h-80 bg-[#f1f1f1] '>
            <div className='w-full flex mt-5 items-start justify-end '>
              <FaRegStar className='mr-2 text-xl text-yellow-600' />
              <FaRegStar className='mr-2 text-xl text-yellow-600' />
              <FaRegStar className='mr-2 text-xl text-yellow-600' />
              <FaRegStar className='mr-2 text-xl text-yellow-600' />
              <FaRegStar className='mr-5 text-xl text-yellow-600' />
            </div>
            <FaQuoteLeft className='ml-2 mt-2 mb-0 text-4xl text-gray-500' />
            <p className='text-[16px] mx-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quod optio illum est suscipit necessitatibus possimus totam! Non perferendis ducimus consectetur debitis iusto qui quibusdam.</p>
            <FaQuoteRight className='mr-2 mt-0 mb-2 text-4xl text-gray-500 float-right' />
              <p className='mt-10 italic underline text-[16px] float-right'>Dileep patel</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='w-80 h-80 bg-[#f1f1f1] '>
            <div className='w-full flex mt-5 items-start justify-end '>
              <FaRegStar className='mr-2 text-xl text-yellow-600' />
              <FaRegStar className='mr-2 text-xl text-yellow-600' />
              <FaRegStar className='mr-2 text-xl text-yellow-600' />
              <FaRegStar className='mr-2 text-xl text-yellow-600' />
              <FaRegStar className='mr-5 text-xl text-yellow-600' />
            </div>
            <FaQuoteLeft className='ml-2 mt-2 mb-0 text-4xl text-gray-500' />
            <p className='text-[16px] mx-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quod optio illum est suscipit necessitatibus possimus totam! Non perferendis ducimus consectetur debitis iusto qui quibusdam.</p>
            <FaQuoteRight className='mr-2 mt-0 mb-2 text-4xl text-gray-500 float-right' />
              <p className='mt-10 italic underline text-[16px] float-right'>Dileep patel</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='w-80 h-80 bg-[#f1f1f1] '>
            <div className='w-full flex mt-5 items-start justify-end '>
              <FaRegStar className='mr-2 text-xl text-yellow-600' />
              <FaRegStar className='mr-2 text-xl text-yellow-600' />
              <FaRegStar className='mr-2 text-xl text-yellow-600' />
              <FaRegStar className='mr-2 text-xl text-yellow-600' />
              <FaRegStar className='mr-5 text-xl text-yellow-600' />
            </div>
            <FaQuoteLeft className='ml-2 mt-2 mb-0 text-4xl text-gray-500' />
            <p className='text-[16px] mx-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quod optio illum est suscipit necessitatibus possimus totam! Non perferendis ducimus consectetur debitis iusto qui quibusdam.</p>
            <FaQuoteRight className='mr-2 mt-0 mb-2 text-4xl text-gray-500 float-right' />
              <p className='mt-10 italic underline text-[16px] float-right'>Dileep patel</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='w-80 h-80 bg-[#f1f1f1] '>
            <div className='w-full flex mt-5 items-start justify-end '>
              <FaRegStar className='mr-2 text-xl text-yellow-600' />
              <FaRegStar className='mr-2 text-xl text-yellow-600' />
              <FaRegStar className='mr-2 text-xl text-yellow-600' />
              <FaRegStar className='mr-2 text-xl text-yellow-600' />
              <FaRegStar className='mr-5 text-xl text-yellow-600' />
            </div>
            <FaQuoteLeft className='ml-2 mt-2 mb-0 text-4xl text-gray-500' />
            <p className='text-[16px] mx-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quod optio illum est suscipit necessitatibus possimus totam! Non perferendis ducimus consectetur debitis iusto qui quibusdam.</p>
            <FaQuoteRight className='mr-2 mt-0 mb-2 text-4xl text-gray-500 float-right' />
              <p className='mt-10 italic underline text-[16px] float-right'>Dileep patel</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='w-80 h-80 bg-[#f1f1f1] '>
            <div className='w-full flex mt-5 items-start justify-end '>
              <FaRegStar className='mr-2 text-xl text-yellow-600' />
              <FaRegStar className='mr-2 text-xl text-yellow-600' />
              <FaRegStar className='mr-2 text-xl text-yellow-600' />
              <FaRegStar className='mr-2 text-xl text-yellow-600' />
              <FaRegStar className='mr-5 text-xl text-yellow-600' />
            </div>
            <FaQuoteLeft className='ml-2 mt-2 mb-0 text-4xl text-gray-500' />
            <p className='text-[16px] mx-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quod optio illum est suscipit necessitatibus possimus totam! Non perferendis ducimus consectetur debitis iusto qui quibusdam.</p>
            <FaQuoteRight className='mr-2 mt-0 mb-2 text-4xl text-gray-500 float-right' />
              <p className='mt-10 italic underline text-[16px] float-right'>Dileep patel</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='w-80 h-80 bg-[#f1f1f1] '>
            <div className='w-full flex mt-5 items-start justify-end '>
              <FaRegStar className='mr-2 text-xl text-yellow-600' />
              <FaRegStar className='mr-2 text-xl text-yellow-600' />
              <FaRegStar className='mr-2 text-xl text-yellow-600' />
              <FaRegStar className='mr-2 text-xl text-yellow-600' />
              <FaRegStar className='mr-5 text-xl text-yellow-600' />
            </div>
            <FaQuoteLeft className='ml-2 mt-2 mb-0 text-4xl text-gray-500' />
            <p className='text-[16px] mx-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quod optio illum est suscipit necessitatibus possimus totam! Non perferendis ducimus consectetur debitis iusto qui quibusdam.</p>
            <FaQuoteRight className='mr-2 mt-0 mb-2 text-4xl text-gray-500 float-right' />
              <p className='mt-10 italic underline text-[16px] float-right'>Dileep patel</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='w-80 h-80 bg-[#f1f1f1] '>
            <div className='w-full flex mt-5 items-start justify-end '>
              <FaRegStar className='mr-2 text-xl text-yellow-600' />
              <FaRegStar className='mr-2 text-xl text-yellow-600' />
              <FaRegStar className='mr-2 text-xl text-yellow-600' />
              <FaRegStar className='mr-2 text-xl text-yellow-600' />
              <FaRegStar className='mr-5 text-xl text-yellow-600' />
            </div>
            <FaQuoteLeft className='ml-2 mt-2 mb-0 text-4xl text-gray-500' />
            <p className='text-[16px] mx-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quod optio illum est suscipit necessitatibus possimus totam! Non perferendis ducimus consectetur debitis iusto qui quibusdam.</p>
            <FaQuoteRight className='mr-2 mt-0 mb-2 text-4xl text-gray-500 float-right' />
              <p className='mt-10 italic underline text-[16px] float-right'>Dileep patel</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='w-80 h-80 bg-[#f1f1f1] '>
            <div className='w-full flex mt-5 items-start justify-end '>
              <FaRegStar className='mr-2 text-xl text-yellow-600' />
              <FaRegStar className='mr-2 text-xl text-yellow-600' />
              <FaRegStar className='mr-2 text-xl text-yellow-600' />
              <FaRegStar className='mr-2 text-xl text-yellow-600' />
              <FaRegStar className='mr-5 text-xl text-yellow-600' />
            </div>
            <FaQuoteLeft className='ml-2 mt-2 mb-0 text-4xl text-gray-500' />
            <p className='text-[16px] mx-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quod optio illum est suscipit necessitatibus possimus totam! Non perferendis ducimus consectetur debitis iusto qui quibusdam.</p>
            <FaQuoteRight className='mr-2 mt-0 mb-2 text-4xl text-gray-500 float-right' />
              <p className='mt-10 italic underline text-[16px] float-right'>Dileep patel</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='w-80 h-80 bg-[#f1f1f1] '>
            <div className='w-full flex mt-5 items-start justify-end '>
              <FaRegStar className='mr-2 text-xl text-yellow-600' />
              <FaRegStar className='mr-2 text-xl text-yellow-600' />
              <FaRegStar className='mr-2 text-xl text-yellow-600' />
              <FaRegStar className='mr-2 text-xl text-yellow-600' />
              <FaRegStar className='mr-5 text-xl text-yellow-600' />
            </div>
            <FaQuoteLeft className='ml-2 mt-2 mb-0 text-4xl text-gray-500' />
            <p className='text-[16px] mx-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quod optio illum est suscipit necessitatibus possimus totam! Non perferendis ducimus consectetur debitis iusto qui quibusdam.</p>
            <FaQuoteRight className='mr-2 mt-0 mb-2 text-4xl text-gray-500 float-right' />
              <p className='mt-10 italic underline text-[16px] float-right'>Dileep patel</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default TestmonialSlider
