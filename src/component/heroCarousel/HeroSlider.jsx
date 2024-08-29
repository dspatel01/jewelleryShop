import React, { useEffect, useState } from 'react'
import AppCrouser from './App_Carousel';
import Hero from '../hero/Hero';

const HeroSlider = () => {

    let heroData = [
        { text1: 'Dive into', text2: 'what you love' },
        { text1: 'Indulge', text2: 'your passion' },
        { text1: 'Give in to', text2: 'your passion' }
    ]

    const [heroCount, setHeroCount] = useState(0);
    const [playStatus, setPlayStatus] = useState(false)

    useEffect(() => {
        setInterval(() => {
            setHeroCount((count) => { return count === 2 ? 0 : count + 1 })
        }, 3000)
    }, [])

    return (
        <div>
            <AppCrouser playStatus={playStatus} heroCount={heroCount} />
            <Hero
                setPlayStatus={setPlayStatus}
                heroData={heroData[heroCount]}
                heroCount={heroCount}
                setHeroCount={setHeroCount}
                playStatus={playStatus}
            />
        </div>
    )
}

export default HeroSlider
