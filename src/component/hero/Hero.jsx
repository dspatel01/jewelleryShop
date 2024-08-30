import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import './hero.css'

const Hero = ({ heroData, setHeroCount, heroCount, setPlayStatus, playStatus }) => {
    return (
        <div className='hero'>
            <div className="hero-text absolute xl:top-40 lg:top-28 md:top-28 sm:top-28 top-24  xl:left-24 lg:left-20 md:left-20 sm:left-14 left-10 xl:text-[5.5rem] lg:text-[4.5rem] md:text-[3.5rem] sm:text-[2.8rem] text-[1.5rem]">
                <p>{heroData.text1}</p>
                <p>{heroData.text2}</p>
            </div>
            <div className=" w-fit absolute flex items-center bg-white gap-4 sm:px-2 px-2 sm:py-1 py-[2px] rounded-full xl:top-[450px] lg:top-[350px] md:top-[280px] sm:top-[240px] top-[160px]  xl:left-24 lg:left-20 md:left-20 sm:left-14 xl:text-[5rem] lg:text-[4.5rem] left-10">
                <p className='xl:text-lg lg:text-md md:text-sm sm:text-sm text-[8px]'>Explore the features</p>
                <div className='xl:text-lg lg:text-md md:text-lg sm:text-sm text-[8px] bg-orange-500 p-1 rounded-full text-white'><FaLongArrowAltRight /></div>
            </div>

            <div className="absolute xl:top-[520px] lg:top-[410px] md:top-[350px] sm:top-[280px] top-[220px] xl:left-32 lg:left-28 md:left-28 sm:left-20 left-16">
                <ul className='hero-dots '>
                    <li onClick={() => setHeroCount(0)} className={heroCount === 0 ? "hero-dot orange" : "hero-dot"}></li>
                    <li onClick={() => setHeroCount(1)} className={heroCount === 1 ? "hero-dot orange" : "hero-dot"}></li>
                    <li onClick={() => setHeroCount(2)} className={heroCount === 2 ? "hero-dot orange" : "hero-dot"}></li>
                </ul>

            </div>
        </div>
    )
}

export default Hero
