import React from 'react'
import HeroSection from '../component/HeroSection'
import CategoryPage from '../component/CategoryPage'


const Home = () => {
  return (
    <div className='w-full'>
      <HeroSection />
      <h1 className='text-center text-4xl mt-10 '>Our Category</h1>
      <CategoryPage />
      <h1 className='text-center text-4xl my-10 '>Top Rated Products</h1>
    </div>
  )
}

export default Home
