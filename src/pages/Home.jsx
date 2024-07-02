import React from 'react'
import HeroSection from '../component/HeroSection'
import CategoryPage from '../component/CategoryPage'
import img from '../assets/jewellery-look.webp'


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
                <img src={img} alt="" className=' w-[100%] h-[100%] rounded-xl ' />
              </div>
            </div>
            <div className='bg-red-800 xl:w-80 lg:w-80 md:w-[45%] w-full rounded-xl my-2 mx-0 '  >
              <div className='xl:w-80 lg:w-80 md:w-[100%] sm:mx-0 h-[350px] w-[100%] shadow-lg rounded-xl cursor-pointer bg-red-50'>
                <img src={img} alt="" className=' w-[100%] h-[100%] rounded-xl ' />
              </div>
            </div>
            <div className='bg-red-800 xl:w-80 lg:w-80 md:w-[45%] w-full rounded-xl my-2 mx-0 '  >
              <div className='xl:w-80 lg:w-80 md:w-[100%] sm:mx-0 h-[350px] w-[100%] shadow-lg rounded-xl cursor-pointer bg-red-50'>
                <img src={img} alt="" className=' w-[100%] h-[100%] rounded-xl ' />
              </div>
            </div>
            <div className='bg-red-800 xl:w-80 lg:w-80 md:w-[45%] w-full rounded-xl my-2 mx-0 '  >
              <div className='xl:w-80 lg:w-80 md:w-[100%] sm:mx-0 h-[350px] w-[100%] shadow-lg rounded-xl cursor-pointer bg-red-50'>
                <img src={img} alt="" className=' w-[100%] h-[100%] rounded-xl ' />
              </div>
            </div>
            <div className='bg-red-800 xl:w-80 lg:w-80 md:w-[45%] w-full rounded-xl my-2 mx-0 '  >
              <div className='xl:w-80 lg:w-80 md:w-[100%] sm:mx-0 h-[350px] w-[100%] shadow-lg rounded-xl cursor-pointer bg-red-50'>
                <img src={img} alt="" className=' w-[100%] h-[100%] rounded-xl ' />
              </div>
            </div>
            <div className='bg-red-800 xl:w-80 lg:w-80 md:w-[45%] w-full rounded-xl my-2 mx-0 '  >
              <div className='xl:w-80 lg:w-80 md:w-[100%] sm:mx-0 h-[350px] w-[100%] shadow-lg rounded-xl cursor-pointer bg-red-50'>
                <img src={img} alt="" className=' w-[100%] h-[100%] rounded-xl ' />
              </div>
            </div>
            <div className='bg-red-800 xl:w-80 lg:w-80 md:w-[45%] w-full rounded-xl my-2 mx-0 '  >
              <div className='xl:w-80 lg:w-80 md:w-[100%] sm:mx-0 h-[350px] w-[100%] shadow-lg rounded-xl cursor-pointer bg-red-50'>
                <img src={img} alt="" className=' w-[100%] h-[100%] rounded-xl ' />
              </div>
            </div>
            <div className='bg-red-800 xl:w-80 lg:w-80 md:w-[45%] w-full rounded-xl my-2 mx-0 '  >
              <div className='xl:w-80 lg:w-80 md:w-[100%] sm:mx-0 h-[350px] w-[100%] shadow-lg rounded-xl cursor-pointer bg-red-50'>
                <img src={img} alt="" className=' w-[100%] h-[100%] rounded-xl ' />
              </div>
            </div>
            <div className='bg-red-800 xl:w-80 lg:w-80 md:w-[45%] w-full rounded-xl my-2 mx-0 '  >
              <div className='xl:w-80 lg:w-80 md:w-[100%] sm:mx-0 h-[350px] w-[100%] shadow-lg rounded-xl cursor-pointer bg-red-50'>
                <img src={img} alt="" className=' w-[100%] h-[100%] rounded-xl ' />
              </div>
            </div>



          </div>
        </div>
      </div >
    </>
  )
}

export default Home
