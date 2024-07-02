import React from 'react'
import img from '../assets/jewellery-look.webp'


const HeroSection = () => {
    return (
        <>

            <div className='relative top-0 bg-gray-500 w-full xl:h-[90vh] lg:h-[90vh] md:h-[70vh] sm:h-[60vh] h-[60vh]'>
                <img className=' w-full xl:h-[90vh] lg:h-[90vh] md:h-[70vh] sm:h-[60vh] h-[60vh] object-cover' src={img} alt="" />
            </div>
          
        </>
    )
}

export default HeroSection
