import React from 'react'
import earings from '../assets/61LTJSjq18L._AC_UY300_.jpg'
import ring1 from '../assets/ring1.webp'
import neckless from '../assets/-473Wx593H-469138739-multi-MODEL.avif'
import earings1 from '../assets/8202766315-500x500.webp'
import { useNavigate } from 'react-router-dom'

const CategoryPage = () => {

    const navigation = useNavigate()

    const handleFilteredItem = (item) => {
        navigation("/" + item)
    }

    return (
        <>

            <div className=' top-[600px] w-full flex items-center justify-center mt-10 mb-20 '>

                <div className='w-[90%] flex flex-wrap justify-between'>
                    <div>
                        <div className='my-2 xl:w-28 lg:w-28 md:w-28 sm:w-24 w-24 shadow-2xl xl:h-28 lg:h-28 md:h-28 sm:h-24 h-24 rounded-full cursor-pointer' onClick={() => {
                            handleFilteredItem("earing")
                        }}>
                            <img src={earings} alt="" className='rounded-full object-fit xl:w-28 lg:w-28 md:w-28 sm:w-24 w-24 xl:h-28 lg:h-28 md:h-28 sm:h-24 h-24' />

                        </div>
                        <p className='text-center text-lg mr-3'>Earings</p>
                    </div>
                    <div>
                       <div className='my-2 xl:w-28 lg:w-28 md:w-28 sm:w-24 w-24 shadow-2xl xl:h-28 lg:h-28 md:h-28 sm:h-24 h-24 rounded-full cursor-pointer' onClick={() => {
                            handleFilteredItem("Ring")
                        }}>
                            <img src={neckless} alt="" className='rounded-full object-fit xl:w-28 lg:w-28 md:w-28 sm:w-24 w-24 xl:h-28 lg:h-28 md:h-28 sm:h-24 h-24' />

                        </div>
                        <p className='text-center text-lg mr-3'>Ring</p>
                    </div>
                    <div>
                       <div className='my-2 xl:w-28 lg:w-28 md:w-28 sm:w-24 w-24 shadow-2xl xl:h-28 lg:h-28 md:h-28 sm:h-24 h-24 rounded-full cursor-pointer' onClick={() => {
                            handleFilteredItem("Ring")
                        }}>
                            <img src={ring1} alt="" className='rounded-full object-fit xl:w-28 lg:w-28 md:w-28 sm:w-24 w-24 xl:h-28 lg:h-28 md:h-28 sm:h-24 h-24' />

                        </div>
                        <p className='text-center text-lg mr-3'>Ring</p>
                    </div>
                    <div>
                       <div className='my-2 xl:w-28 lg:w-28 md:w-28 sm:w-24 w-24 shadow-2xl xl:h-28 lg:h-28 md:h-28 sm:h-24 h-24 rounded-full cursor-pointer'>
                            <img src={earings} alt="" className='rounded-full object-fit xl:w-28 lg:w-28 md:w-28 sm:w-24 w-24 xl:h-28 lg:h-28 md:h-28 sm:h-24 h-24' />

                        </div>
                        <p className='text-center text-lg mr-3'>Earings</p>
                    </div>
                    <div>
                       <div className='my-2 xl:w-28 lg:w-28 md:w-28 sm:w-24 w-24 shadow-2xl xl:h-28 lg:h-28 md:h-28 sm:h-24 h-24 rounded-full cursor-pointer'>
                            <img src={earings1} alt="" className='rounded-full object-fit xl:w-28 lg:w-28 md:w-28 sm:w-24 w-24 xl:h-28 lg:h-28 md:h-28 sm:h-24 h-24' />

                        </div>
                        <p className='text-center text-lg mr-3'>Bracelets</p>
                    </div>
                    <div>
                       <div className='my-2 xl:w-28 lg:w-28 md:w-28 sm:w-24 w-24 shadow-2xl xl:h-28 lg:h-28 md:h-28 sm:h-24 h-24 rounded-full cursor-pointer'>
                            <img src={earings} alt="" className='rounded-full object-fit xl:w-28 lg:w-28 md:w-28 sm:w-24 w-24 xl:h-28 lg:h-28 md:h-28 sm:h-24 h-24' />

                        </div>
                        <p className='text-center text-lg mr-3'>Earings</p>
                    </div>

                    <div>
                       <div className='my-2 xl:w-28 lg:w-28 md:w-28 sm:w-24 w-24 shadow-2xl xl:h-28 lg:h-28 md:h-28 sm:h-24 h-24 rounded-full cursor-pointer'>
                            <img src={earings} alt="" className='rounded-full object-fit xl:w-28 lg:w-28 md:w-28 sm:w-24 w-24 xl:h-28 lg:h-28 md:h-28 sm:h-24 h-24' />

                        </div>
                        <p className='text-center text-lg mr-3'>Earings</p>
                    </div>
                  





                </div>
            </div>
        </>
    )
}

export default CategoryPage
