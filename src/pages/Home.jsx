import React from 'react'
import HeroSection from '../component/HeroSection'
import CategoryPage from '../component/CategoryPage'


const Home = () => {
  return (
    <>
      <div className='w-full'>
        <HeroSection />
        <h1 className='text-center text-4xl mt-10 '>Our Category</h1>
        <CategoryPage />
        <h1 className='text-center text-4xl my-10 '>Top Rated Products</h1>

        <div className='w-full flex items-center justify-center mt-10 mb-20 '>

                <div className='w-[90%] flex justify-between flex-wrap mx-4'>
                    <div className=''>
                        <div className='bg-slate-700 my-2 w-64 h-80 shadow-2xl rounded-xl cursor-pointer'>
                            {/* <img src={earings} alt="" className='rounded-full object-cover' /> */}

                        </div> 
                        <p className='text-center text-lg mr-3'>Earings</p>
                    </div>
                    <div className=''>
                        <div className='bg-slate-700 my-2 w-64 h-80 shadow-2xl rounded-xl cursor-pointer'>
                            {/* <img src={earings} alt="" className='rounded-full object-cover' /> */}

                        </div> 
                        <p className='text-center text-lg mr-3'>Earings</p>
                    </div>
                    <div className=''>
                        <div className='bg-slate-700 my-2 w-64 h-80 shadow-2xl rounded-xl cursor-pointer'>
                            {/* <img src={earings} alt="" className='rounded-full object-cover' /> */}

                        </div> 
                        <p className='text-center text-lg mr-3'>Earings</p>
                    </div>
                    <div className=''>
                        <div className='bg-slate-700 my-2 w-64 h-80 shadow-2xl rounded-xl cursor-pointer'>
                            {/* <img src={earings} alt="" className='rounded-full object-cover' /> */}

                        </div> 
                        <p className='text-center text-lg mr-3'>Earings</p>
                    </div>
                    <div className=''>
                        <div className='bg-slate-700 my-2 w-64 h-80 shadow-2xl rounded-xl cursor-pointer'>
                            {/* <img src={earings} alt="" className='rounded-full object-cover' /> */}

                        </div> 
                        <p className='text-center text-lg mr-3'>Earings</p>
                    </div>
                    <div className=''>
                        <div className='bg-slate-700 my-2 w-64 h-80 shadow-2xl rounded-xl cursor-pointer'>
                            {/* <img src={earings} alt="" className='rounded-full object-cover' /> */}

                        </div> 
                        <p className='text-center text-lg mr-3'>Earings</p>
                    </div>
                    <div className=''>
                        <div className='bg-slate-700 my-2 w-64 h-80 shadow-2xl rounded-xl cursor-pointer'>
                            {/* <img src={earings} alt="" className='rounded-full object-cover' /> */}

                        </div> 
                        <p className='text-center text-lg mr-3'>Earings</p>
                    </div>
                    <div className=''>
                        <div className='bg-slate-700 my-2 w-64 h-80 shadow-2xl rounded-xl cursor-pointer'>
                            {/* <img src={earings} alt="" className='rounded-full object-cover' /> */}

                        </div> 
                        <p className='text-center text-lg mr-3'>Earings</p>
                    </div>

                </div>
            </div>
      </div>
    </>
  )
}

export default Home
