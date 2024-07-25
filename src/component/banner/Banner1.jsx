import React from 'react';
import image1 from '../../assets/ring1.webp'
import banner1 from '../../assets/banner1.jpg'
import './banner.css'

const Banner1 = () => {
    return (
        <div className='flex justify-center items-center '>
            <div className='w-[90%] h-[50vh] flex my-10  wrapper '>
                {/* <div className='leftSide w-[60%] h-[100%]'>
                    <div className='realtive w-[100%] h-[100%] bg-[#8ca2ed] flex justify-center items-center text-[5.5rem]'>
                        <h2 className='px-5 text-center font-medium ' >
                            Latest Wedding Collection
                        </h2>
                        <div className='absolute right-[30%] bg-[#8ca2ed] w-80 h-80 rounded-full'>

                        </div>

                    </div>
                </div>
                <div className='w-[40%] h-[100%]  '>
                    <img className='w-[100%] h-[100%] pl-28 object-contain' src={image1} alt="" />
                </div> */}
                <img src={banner1} alt="" />
            </div>
        </div>
    )
}

export default Banner1
