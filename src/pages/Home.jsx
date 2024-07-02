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
                    <div className=''>
                        <div className=' my-2 mx-2 w-64 h-80 shadow-lg rounded-xl cursor-pointer'>
                            <img src={img} alt="" className='rounded-xl w-64 h-80' />

                        </div> 
                       
                    </div>
                    <div className=''>
                        <div className=' my-2 mx-2 w-64 h-80 shadow-lg rounded-xl cursor-pointer'>
                            <img src={img} alt="" className='rounded-xl w-64 h-80' />

                        </div> 
                       
                    </div>
                    <div className=''>
                        <div className=' my-2 mx-2 w-64 h-80 shadow-lg rounded-xl cursor-pointer'>
                            <img src={img} alt="" className='rounded-xl w-64 h-80' />

                        </div> 
                       
                    </div>
                    <div className=''>
                        <div className=' my-2 mx-2 w-64 h-80 shadow-lg rounded-xl cursor-pointer'>
                            <img src={img} alt="" className='rounded-xl w-64 h-80' />

                        </div> 
                       
                    </div>
                    <div className=''>
                        <div className=' my-2 mx-2 w-64 h-80 shadow-lg rounded-xl cursor-pointer'>
                            <img src={img} alt="" className='rounded-xl w-64 h-80' />

                        </div> 
                       
                    </div>
                    <div className=''>
                        <div className=' my-2 mx-2 w-64 h-80 shadow-lg rounded-xl cursor-pointer'>
                            <img src={img} alt="" className='rounded-xl w-64 h-80' />

                        </div> 
                       
                    </div>
                    <div className=''>
                        <div className=' my-2 mx-2 w-64 h-80 shadow-lg rounded-xl cursor-pointer'>
                            <img src={img} alt="" className='rounded-xl w-64 h-80' />

                        </div> 
                       
                    </div>
                    <div className=''>
                        <div className=' my-2 mx-2 w-64 h-80 shadow-lg rounded-xl cursor-pointer'>
                            <img src={img} alt="" className='rounded-xl w-64 h-80' />

                        </div> 
                       
                    </div>

                </div>
            </div>
      </div>
    </>
  )
}

export default Home
