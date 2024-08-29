import React from 'react'
// import img from '../assets/jewellery-look.webp'

import background from '../assets/gray-abstract-wireframe-technology-background.jpg'
import background1 from '../assets/backgroud.jpg'
import background2 from '../assets/4877010.jpg'

import img1 from '../assets/WhatsApp Image 2024-08-21 at 2.12.39 PM (1).jpeg'
import img2 from '../assets/WhatsApp Image 2024-08-21 at 2.12.39 PM (2).jpeg'
import img3 from '../assets/WhatsApp Image 2024-08-21 at 2.12.37 PM (2).jpeg'

// import cover1 from '../assets/cover-img-1.png'
// import cover2 from '../assets/cover-img-2.png'
// import cover3 from '../assets/cover-img-3.png'

import { Link } from 'react-router-dom'


const HeroSection = () => {
    return (
        <>
 


 
            <div className='flex '>
                <div className='my-5 relative top-[0px] min-w-[100vw] w-[100%] mt-4 xl:h-[80vh] lg:h-[60vh] md:h-[40vh] sm:h-[40vh] h-[40vh] flex justify-center'>
                    <img className=' rounded-[50px] w-[95%] xl:h-[80vh] lg:h-[60vh] md:h-[40vh] sm:h-[40vh] h-[40vh] object-cover mr-3' src={background1} alt="" />

                    <div className=' rounded-l-[50px] ml-8 h-[100%]  textShadow absolute left-0   w-[50%] font-extrabold flex items-center justify-center flex-col text-white  '>
                        {/* <p className='py-8 xl:pl-16 lg:pl-16 md:pl-10 sm:pl-6 pl-2 xl:text-[4.5rem] lg:text-[4.5rem] md:text-[3.5rem] sm:text-[2.5rem] text-[2.5rem] heroText '>Jewels That Speak the Language of Love</p> */}

                        {/* <div className='flex '>
                            <Link className='cursor-pointer tracking-wider bg-black text-white py-3 px-10 rounded-full mr-2 left-0 shadow-sm hover:shadow-black border' to='/Contact'>Contact</Link>
                            <Link className='tracking-wider border hover:border-none border-gray-600 text-white py-3 px-10 rounded-full ml-2 shadow-sm hover:shadow-lg cursor-pointer hover:shadow-black hover:bg-blue-500' to='/all-product'>Buy Now</Link>
                        </div> */}
                    </div>
                    <div className='w-[45.2%] h-[100%] flex items-center justify-center absolute xl:right-12 lg:right-12 md:right-8 sm:right-6 right-2    rounded-r-[50px]'>
                        <img src={img1} className='w-[85%] h-[85%] absolute right-4 rounded-full scale-110 shadow-xl shadow-gray-500' alt="" />
                    </div>
                </div>

                <div className='relative top-[0px] min-w-[100vw] mt-2 xl:h-[80vh] lg:h-[60vh]  md:h-[40vh] sm:h-[40vh] h-[40vh] flex justify-center'>
                    <img className=' rounded-[50px] w-[95%] xl:h-[80vh] lg:h-[60vh] md:h-[70vh] sm:h-[60vh] h-[40vh] object-cover' src={background2} alt="" />

                    <div className=' rounded-l-[50px] ml-8 h-[100%]  textShadow absolute left-0   w-[50%] font-extrabold flex items-center justify-center flex-col text-white  '>
                        {/* <p className='py-8 xl:pl-16 lg:pl-16 md:pl-10 sm:pl-6 pl-2 xl:text-[4.5rem] lg:text-[4.5rem] md:text-[3.5rem] sm:text-[2.5rem] text-[2.5rem] heroText '>Jewels That Speak the Language of Love</p>

                        <div className='flex '>
                         
                           <Link className='cursor-pointer tracking-wider bg-black text-white py-3 px-10 rounded-full mr-2 left-0 shadow-sm hover:shadow-black border' to='/Contact'>Contact</Link>
                            
                            <Link className='tracking-wider border hover:border-none border-gray-600 text-white py-3 px-10 rounded-full ml-2 shadow-sm hover:shadow-lg cursor-pointer hover:shadow-black hover:bg-blue-500' to='/all-product'>Buy Now</Link>
                        </div> */}
                    </div>
                    <div className='w-[45.2%] h-[100%] flex items-center justify-center absolute xl:right-12 lg:right-12 md:right-8 sm:right-6 right-2 rounded-r-[50px]'>
                        <img src={img2} className='w-[85%] h-[85%] absolute right-4 rounded-full scale-110 shadow-xl shadow-gray-500' alt="" />
                    </div>
                </div>

                <div className='relative top-[0px]  min-w-[100vw] mt-2 xl:h-[80vh] lg:h-[60vh]  md:h-[40vh] sm:h-[40vh] h-[40vh] flex justify-center'>
                    <img className=' rounded-[50px] w-[95%] xl:h-[80vh] lg:h-[60vh] md:h-[70vh] sm:h-[60vh] h-[40vh] object-cover' src={background} alt="" />

                    <div className=' rounded-l-[50px] ml-8 h-[100%]  textShadow absolute left-0   w-[50%] font-extrabold flex items-center justify-center flex-col text-white  '>
                        {/* <p className='py-8 xl:pl-16 lg:pl-16 md:pl-10 sm:pl-6 pl-2 xl:text-[4.5rem] lg:text-[4.5rem] md:text-[3.5rem] sm:text-[2.5rem] text-[2.5rem] heroText '>Jewels That Speak the Language of Love</p> */}

                        {/* <div className='flex '>
                            <Link className='cursor-pointer tracking-wider bg-black text-white py-3 px-10 rounded-full mr-2 left-0 shadow-sm hover:shadow-black border' to='/Contact'>Contact</Link>
                            <Link className='tracking-wider border hover:border-none border-gray-600 text-white py-3 px-10 rounded-full ml-2 shadow-sm hover:shadow-lg cursor-pointer hover:shadow-black hover:bg-blue-500' to='/all-product'>Buy Now</Link>
                        </div> */}
                    </div>
                    <div className='w-[45.2%] h-[100%] flex items-center justify-center absolute xl:right-12 lg:right-12 md:right-8 sm:right-6 right-2    rounded-r-[50px]'>
                        <img src={img3} className='w-[85%] h-[85%] absolute right-4 rounded-full scale-110 shadow-xl shadow-gray-500' alt="" />
                    </div>
                </div>
            </div> 



{/* 
            <div className='mt-4 max-w-max[100vw]'>
                <div>
                    <img src={cover1} alt="" />
                </div>
            </div> */}
        </>
    )
}

export default HeroSection
