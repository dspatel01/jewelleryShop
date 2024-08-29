import React from 'react';
import './testimonialSlider.css';

// import { FaRegStar } from "react-icons/fa";
// import { FaQuoteRight } from "react-icons/fa";
// import { EffectCoverflow, Pagination } from 'swiper/modules';
import img1 from '../../assets/ring1.webp'

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const TestmonialSlider = () => {
  return (
    <>
      <h1 className='text-center text-4xl mt-14'>What Our Customer's Say About US</h1>

      <div className='w-full h-fit my-5 flex items-center justify-center'>

        <div className='w-[90%] h-fit bg-[#f7f7f7] flex flex-col justify-center py-5'>
          <div className='flex justify-end items-center mb-2'>
            <div className='w-8 h-8 shadow-2xl bg-white rounded-full flex items-center justify-center mr-2'><BsArrowLeft /></div>
            <div className='w-8 h-8 shadow-2xl bg-white rounded-full flex items-center justify-center mr-[5%]'><BsArrowRight /></div>
          </div>
          <div className='flex items-center justify-around'>
            <div className='xl:w-[25%] xl:h-[365px] lg:w-[34%] lg:h-[365px] md:w-[45%] md:h-[365px] sm:w-[90%] sm:h-[320px] mt-5 w-[90%] h-[320px] bg-[#fff] shadow-lg rounded-[30px] backdrop-blur-2xl'>
              <img className='w-28 h-28 rounded-full mx-auto mt-8 shadow-sm border-2 border-gray-300' src={img1} alt="" />
              <p className='mt-3 mx-7 text-justify text-md text-gray-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus eveniet ab unde eligendi nobis voluptates ea eum incidunt suscipit recusandae?</p>
               <div className='absolute bottom-3 w-full flex justify-end flex-col items-end'>
                <h1 className='mt-3 text-x; italic mr-8 text-gray-600'>"Dileep Patel"</h1>
                <h1 className='italic mr-10 text-lg text-yellow-400 '>&#9733; &#9733; &#9733; &#9733;&#9733;</h1>
              </div>
            </div>

            <div className='xl:w-[25%] xl:h-[365px] lg:w-[34%] lg:h-[365px] md:w-[45%] md:h-[365px] sm:w-[90%] sm:h-[320px] mt-5 w-[90%] h-[320px] bg-[#fff] shadow-lg rounded-[30px] backdrop-blur-2xl'>
              <img className='w-28 h-28 rounded-full mx-auto mt-8 shadow-sm border-2 border-gray-300' src={img1} alt="" />
              <p className='mt-3 mx-7 text-justify text-md text-gray-500'>Lorem ipsum,  unde eligendi nobis voluptates ea eum incidunt suscipit recusandae?</p>
              <div className='absolute bottom-3 w-full flex justify-end flex-col items-end'>
                <h1 className='mt-3 text-x; italic mr-8 text-gray-600'>"Dileep Patel"</h1>
                <h1 className='italic mr-10 text-lg text-yellow-400 '>&#9733; &#9733; &#9733; &#9733;&#9733;</h1>
              </div>
            </div>

            <div className='xl:w-[25%] xl:h-[365px] lg:w-[34%] lg:h-[365px] md:w-[45%] md:h-[365px] sm:w-[90%] sm:h-[320px] mt-5 w-[90%] h-[320px] bg-[#fff] shadow-lg rounded-[30px] backdrop-blur-2xl'>
              <img className='w-28 h-28 rounded-full mx-auto mt-8 shadow-sm border-2 border-gray-300' src={img1} alt="" />
              <p className='mt-3 mx-7 text-justify text-md text-gray-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus eveniet ab unde eligendi nobis voluptates ea eum incidunt suscipit recusandae?</p>
               <div className='absolute bottom-3 w-full flex justify-end flex-col items-end'>
                <h1 className='mt-3 text-x; italic mr-8 text-gray-600'>"Dileep Patel"</h1>
                <h1 className='italic mr-10 text-lg text-yellow-400 '>&#9733; &#9733; &#9733; &#9733;&#9733;</h1>
              </div>
            </div>

          </div>

          <div className='pt-6 flex justify-center'>
            <div className='w-4 h-4 bg-gray-300 rounded-full mx-1 shadow-lg'></div>
            <div className='w-4 h-4 bg-gray-300 rounded-full mx-1 shadow-lg'></div>
            <div className='w-4 h-4 bg-blue-400 rounded-full mx-1 shadow-lg'></div>
            <div className='w-4 h-4 bg-gray-300 rounded-full mx-1 shadow-lg'></div>
            <div className='w-4 h-4 bg-gray-300 rounded-full mx-1 shadow-lg'></div>

          </div>
        </div>
      </div>



    </>
  )
}

export default TestmonialSlider
