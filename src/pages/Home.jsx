import React, { useEffect } from 'react'
import CategoryPage from '../component/CategoryPage'
import TopRatedProduct from '../component/toprated/TopRatedProduct'
import Banner1 from '../component/banner/Banner1'
import LatestProduct from '../component/LatestProduct'
import HeroSlider from '../component/heroCarousel/HeroSlider'


const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <>
      <div className='w-full'>
        <HeroSlider />

        <h1 className='text-center text-4xl my-10 '>Our Category</h1>
        <CategoryPage />
        <h1 className='text-center text-4xl my-5 '>Top Rated Products</h1>

        <TopRatedProduct />

        <Banner1 />
        <h1 className='text-center text-4xl mt-20 '>Latest Products</h1>
        <LatestProduct />
      </div >
    </>
  )
}

export default Home
