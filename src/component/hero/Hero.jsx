import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaRegPlayCircle } from "react-icons/fa";
import { FaPauseCircle } from "react-icons/fa";
import './hero.css'

const Hero = ({ heroData, setHeroCount, heroCount, setPlayStatus, playStatus }) => {
    return (
        <div className='hero'>
            <div className="hero-text">
                <p>{heroData.text1}</p>
                <p>{heroData.text2}</p>
            </div>
            <div className="hero-explore">
                <p>Explore the features</p>
                <div className='arrow'><FaLongArrowAltRight /></div>
            </div>

            <div className="hero-dot-play">
                <ul className='hero-dots '>
                    <li onClick={() => setHeroCount(0)} className={heroCount === 0 ? "hero-dot orange" : "hero-dot"}></li>
                    <li onClick={() => setHeroCount(1)} className={heroCount === 1 ? "hero-dot orange" : "hero-dot"}></li>
                    <li onClick={() => setHeroCount(2)} className={heroCount === 2 ? "hero-dot orange" : "hero-dot"}></li>
                </ul>

                {/* <div className='hero-play'>
                    <div onClick={() => setPlayStatus(!playStatus)} >{playStatus ? <FaPauseCircle className='text-white text-[30px]' /> : <FaRegPlayCircle className='text-white text-[30px]' />}</div>
                    <p>See the Video</p>
                </div> */}
            </div>
        </div>
    )
}

export default Hero
