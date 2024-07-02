import React from 'react'
import HeroSection from '../component/HeroSection'
import CategoryPage from '../component/CategoryPage'
import earings from '../assets/61LTJSjq18L._AC_UY300_.jpg'
import ring1 from '../assets/ring1.webp'
import neckless from '../assets/-473Wx593H-469138739-multi-MODEL.avif'
import ring2 from '../assets/w8v79_512.webp'




const Home = () => {
  return (
    <>
      <div className='w-full'>
        <HeroSection />
        <h1 className='text-center text-4xl mt-10 '>Our Category</h1>
        <CategoryPage />
        <h1 className='text-center text-4xl my-10 '>Top Rated Products</h1>

        <div className='w-full flex items-center justify-center mt-10 mb-20 '>

          <div className='w-[100%] flex justify-around flex-wrap mx-4 '>
            <div className='bg-red-800 xl:w-80 lg:w-80 md:w-[45%] w-full rounded-xl my-2 mx-0 '  >
              <div className='xl:w-80 lg:w-80 md:w-[100%] sm:mx-0 h-[350px] w-[100%] shadow-lg rounded-xl cursor-pointer bg-red-50'>
                <img src={earings} alt="" className=' w-[100%] h-[100%] rounded-xl ' />
              </div>
            </div>
            <div className='bg-red-800 xl:w-80 lg:w-80 md:w-[45%] w-full rounded-xl my-2 mx-0 '  >
              <div className='xl:w-80 lg:w-80 md:w-[100%] sm:mx-0 h-[350px] w-[100%] shadow-lg rounded-xl cursor-pointer bg-red-50'>
                <img src={ring1} alt="" className=' w-[100%] h-[100%] rounded-xl ' />
              </div>
            </div>
            <div className='bg-red-800 xl:w-80 lg:w-80 md:w-[45%] w-full rounded-xl my-2 mx-0 '  >
              <div className='xl:w-80 lg:w-80 md:w-[100%] sm:mx-0 h-[350px] w-[100%] shadow-lg rounded-xl cursor-pointer bg-red-50'>
                <img src={neckless} alt="" className=' w-[100%] h-[100%] rounded-xl ' />
              </div>
            </div>
            <div className='bg-red-800 xl:w-80 lg:w-80 md:w-[45%] w-full rounded-xl my-2 mx-0 '  >
              <div className='xl:w-80 lg:w-80 md:w-[100%] sm:mx-0 h-[350px] w-[100%] shadow-lg rounded-xl cursor-pointer bg-red-50'>
                <img src={earings} alt="" className=' w-[100%] h-[100%] rounded-xl ' />
              </div>
            </div>
            <div className='bg-red-800 xl:w-80 lg:w-80 md:w-[45%] w-full rounded-xl my-2 mx-0 '  >
              <div className='xl:w-80 lg:w-80 md:w-[100%] sm:mx-0 h-[350px] w-[100%] shadow-lg rounded-xl cursor-pointer bg-red-50'>
                <img src={neckless} alt="" className=' w-[100%] h-[100%] rounded-xl ' />
              </div>
            </div>
            <div className='bg-red-800 xl:w-80 lg:w-80 md:w-[45%] w-full rounded-xl my-2 mx-0 '  >
              <div className='xl:w-80 lg:w-80 md:w-[100%] sm:mx-0 h-[350px] w-[100%] shadow-lg rounded-xl cursor-pointer bg-red-50'>
                <img src={ring1} alt="" className=' w-[100%] h-[100%] rounded-xl ' />
              </div>
            </div>
            <div className='bg-red-800 xl:w-80 lg:w-80 md:w-[45%] w-full rounded-xl my-2 mx-0 '  >
              <div className='xl:w-80 lg:w-80 md:w-[100%] sm:mx-0 h-[350px] w-[100%] shadow-lg rounded-xl cursor-pointer bg-red-50'>
                <img src={neckless} alt="" className=' w-[100%] h-[100%] rounded-xl ' />
              </div>
            </div>
            <div className='bg-red-800 xl:w-80 lg:w-80 md:w-[45%] w-full rounded-xl my-2 mx-0 '  >
              <div className='xl:w-80 lg:w-80 md:w-[100%] sm:mx-0 h-[350px] w-[100%] shadow-lg rounded-xl cursor-pointer bg-red-50'>
                <img src={ring2} alt="" className=' w-[100%] h-[100%] rounded-xl ' />
              </div>
            </div>
         
           



          </div>
        </div>
      </div >
    </>
  )
}

export default Home
