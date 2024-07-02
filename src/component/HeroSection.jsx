import React from 'react'
import img from '../assets/cover.avif'


const HeroSection = () => {
    return (
        <>

            <div className=' bg-gray-500 w-full xl:h-[80vh] lg:h-[80vh] md:h-[60vh] sm:h-[50vh] h-[50vh]'>
                <img className=' w-full xl:h-[80vh] lg:h-[80vh] md:h-[60vh] sm:h-[50vh] h-[50vh]' src={img} alt="" />
            </div>
          
        </>
    )
}

export default HeroSection
