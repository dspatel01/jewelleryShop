import React from 'react'
import earings from '../assets/61LTJSjq18L._AC_UY300_.jpg'
import ring1 from '../assets/ring1.webp'
import neckless from '../assets/-473Wx593H-469138739-multi-MODEL.avif'

const CategoryPage = () => {
    return (
        <>
          
            <div className='w-full flex items-center justify-center mt-10 mb-20 '>

                <div className='w-[90%] flex justify-between flex-wrap mx-4'>
                    <div className=''>
                        <div className='my-2 w-32 shadow-2xl h-32 rounded-full cursor-pointer'>
                            <img src={earings} alt="" className='rounded-full object-cover' />

                        </div> 
                        <p className='text-center text-lg mr-3'>Earings</p>
                    </div>
                    <div className=''>
                        <div className='my-2 w-32 shadow-2xl h-32 rounded-full cursor-pointer'>
                            <img src={ring1} alt="" className='rounded-full object-fit' />

                        </div> 
                        <p className='text-center text-lg mr-3'>Ring</p>
                    </div>
                    <div className=''>
                        <div className='my-2 w-32 shadow-2xl h-32 rounded-full cursor-pointer'>
                            <img src={neckless} alt="" className='w-32 h-32 rounded-full object-cover' />

                        </div> 
                        <p className='text-center text-lg mr-3'>Neckless</p>
                    </div>
                    <div className=''>
                        <div className='my-2 w-32 shadow-2xl h-32 rounded-full cursor-pointer'>
                            <img src={earings} alt="" className='rounded-full object-fit' />

                        </div> 
                        <p className='text-center text-lg mr-3'>Earings</p>
                    </div>
                    <div className=''>
                        <div className='my-2 w-32 shadow-2xl h-32 rounded-full cursor-pointer'>
                            <img src={earings} alt="" className='rounded-full object-fit' />

                        </div> 
                        <p className='text-center text-lg mr-3'>Earings</p>
                    </div>
                    <div className=''>
                        <div className='my-2 w-32 shadow-2xl h-32 rounded-full cursor-pointer'>
                            <img src={earings} alt="" className='rounded-full object-fit' />

                        </div> 
                        <p className='text-center text-lg mr-3'>Earings</p>
                    </div>

                    <div className=''>
                        <div className='my-2 w-32 shadow-2xl h-32 rounded-full cursor-pointer'>
                            <img src={earings} alt="" className='rounded-full object-fit' />

                        </div> 
                        <p className='text-center text-lg mr-3'>Earings</p>
                    </div>
                    <div className=''>
                        <div className='my-2 w-32 shadow-2xl h-32 rounded-full cursor-pointer'>
                            <img src={earings} alt="" className='rounded-full object-fit' />

                        </div> 
                        <p className='text-center text-lg mr-3'>Earings</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default CategoryPage
