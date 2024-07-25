import React from 'react'
import HeroSection from '../component/HeroSection'
import CategoryPage from '../component/CategoryPage'
//import earings from '../assets/61LTJSjq18L._AC_UY300_.jpg'
// import ring1 from '../assets/ring1.webp'
import neckless from '../assets/-473Wx593H-469138739-multi-MODEL.avif'
// import ring2 from '../assets/w8v79_512.webp'
import TestimonialSlider from '../component/slider/TestmonialSlider'
import { BsPatchCheck } from "react-icons/bs";
import { BsTrophy } from "react-icons/bs";
import { MdOutlineLocalShipping } from "react-icons/md";
import { MdOutlineSupportAgent } from "react-icons/md";

import TopRatedProduct from '../component/toprated/TopRatedProduct'
import Banner1 from '../component/banner/Banner1'



const Home = () => {
  return (
    <>
      <div className='w-full'>
        <HeroSection />
        <h1 className='text-center text-4xl mt-10 '>Our Category</h1>
        <CategoryPage />

        <h1 className='text-center text-4xl my-5 '>Top Rated Products</h1>

        <TopRatedProduct />


        <Banner1 />
        <h1 className='text-center text-4xl mt-20 '>Latest Products</h1>
        <div className='w-full flex justify-around items-center flex-wrap my-10 '>
          <div className='relative xl:w-72 lg:w-72 md:w-60 sm:w-40 w-40 xl:h-80 lg:h-80 md:h-80 sm:h-64 h-64  rounded-lg bg-[#f7f7f7] my-4 cursor-pointer '>
            <div className='bg-black w-10 h-10 text-white rounded-full absolute top-2 right-4  flex justify-center items-center'>20%</div>
            <img className='rounded-t-lg w-full xl:h-[235px] lg:h-[235px] md:h-[235px] sm:h-[180px] h-[180px]' src={neckless} alt="" />
            <div className='mx-2'>
              <h1>Neckless</h1>
              <div className='flex justify-between'>
                <div>Price: ₹1000</div>
                <div className='line-through'> ₹1500</div>
              </div>
              <div className='mb-1 flex justify-center items-center  bg-green-800 px-2 w-[fit-content]'>
                <div className='text-yellow-500 text-xl'>&#9733; </div>
                <div className='text-yellow-500 tracking-wide ml-1'>3.5</div>
              </div>
            </div>
          </div>

          <div className='relative xl:w-72 lg:w-72 md:w-60 sm:w-40 w-40 xl:h-80 lg:h-80 md:h-80 sm:h-64 h-64 bg-[#f7f7f7] rounded-lg my-4 cursor-pointer '>
            <div className='bg-black w-10 h-10 text-white rounded-full absolute top-2 right-4  flex justify-center items-center'>20%</div>
            <img className='rounded-t-lg w-full xl:h-[235px] lg:h-[235px] md:h-[235px] sm:h-[180px] h-[180px]' src={neckless} alt="" />
            <div className='mx-2'>
              <h1>Neckless</h1>
              <div className='flex justify-between'>
                <div>Price: ₹1000</div>
                <div className='line-through'> ₹1500</div>
              </div>
              <div className='mb-1 flex justify-center items-center  bg-green-800 px-2 w-[fit-content]'>
                <div className='text-yellow-500 text-xl'>&#9733; </div>
                <div className='text-yellow-500 tracking-wide ml-1'>3.5</div>
              </div>
            </div>
          </div>

          <div className='relative xl:w-72 lg:w-72 md:w-60 sm:w-40 w-40 xl:h-80 lg:h-80 md:h-80 sm:h-64 h-64 bg-[#f7f7f7] rounded-lg my-4 cursor-pointer '>
            <div className='bg-black w-10 h-10 text-white rounded-full absolute top-2 right-4  flex justify-center items-center'>20%</div>
            <img className='rounded-t-lg w-full xl:h-[235px] lg:h-[235px] md:h-[235px] sm:h-[180px] h-[180px]' src={neckless} alt="" />
            <div className='mx-2'>
              <h1>Neckless</h1>
              <div className='flex justify-between'>
                <div>Price: ₹1000</div>
                <div className='line-through'> ₹1500</div>
              </div>
              <div className='mb-1 flex justify-center items-center  bg-green-800 px-2 w-[fit-content]'>
                <div className='text-yellow-500 text-xl'>&#9733; </div>
                <div className='text-yellow-500 tracking-wide ml-1'>3.5</div>
              </div>
            </div>
          </div>

          <div className='relative xl:w-72 lg:w-72 md:w-60 sm:w-40 w-40 xl:h-80 lg:h-80 md:h-80 sm:h-64 h-64 bg-[#f7f7f7] rounded-lg my-4 cursor-pointer '>
            <div className='bg-black w-10 h-10 text-white rounded-full absolute top-2 right-4  flex justify-center items-center'>20%</div>
            <img className='rounded-t-lg w-full xl:h-[235px] lg:h-[235px] md:h-[235px] sm:h-[180px] h-[180px]' src={neckless} alt="" />
            <div className='mx-2'>
              <h1>Neckless</h1>
              <div className='flex justify-between'>
                <div>Price: ₹1000</div>
                <div className='line-through'> ₹1500</div>
              </div>
              <div className='mb-1 flex justify-center items-center  bg-green-800 px-2 w-[fit-content]'>
                <div className='text-yellow-500 text-xl'>&#9733; </div>
                <div className='text-yellow-500 tracking-wide ml-1'>3.5</div>
              </div>
            </div>
          </div>

        </div>




        {/* testimonial */}

        <TestimonialSlider />



        {/* shippingDetails */}

        <div className=" w-full h-[fit-content] flex justify-around items-center bg-[#f1f1f1]  flex-wrap">
          <div className="cursor-pointer flex justify-around items-center flex-col my-10">
            <div className='text-5xl mb-2'>
              <BsTrophy />
            </div>
            <div className='text-center text-xl'>
              <h3>Hight Quality</h3>
              <p>crafted from top metarials</p>
            </div>
          </div>
          <div className="cursor-pointer flex justify-around items-center flex-col py-10">
            <div className='text-5xl mb-2'>
              <BsPatchCheck />
            </div>
            <div className='text-center text-xl'>
              <h3>Warranty Protection</h3>
              <p>over 2 years</p>
            </div>
          </div>

          <div className="cursor-pointer flex justify-around items-center flex-col py-10">
            <div className='text-5xl mb-2'>
              <MdOutlineLocalShipping />
            </div>
            <div className='text-center text-xl'>
              <h3>Free Shiping</h3>
              <p>order over 150 ₹</p>
            </div>
          </div>

          <div className="cursor-pointer flex justify-around items-center flex-col py-10">
            <div className='text-5xl mb-2'>
              <MdOutlineSupportAgent />

            </div>
            <div className='text-center text-xl'>
              <h3>24/7</h3>
              <p>dedicated support</p>
            </div>
          </div>
        </div>


      </div >
    </>
  )
}

export default Home
