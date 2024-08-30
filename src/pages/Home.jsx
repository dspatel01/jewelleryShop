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

        <h1 className='text-center text-[6vmin] mb-5 mt-[-20px] border-2 border-gray-900 w-fit mx-auto py-0'><span className='bg-black text-white px-5 py-2'>Our</span> <span className='mr-3'>Category</span> </h1>
        <CategoryPage />
        
        <h1 className='text-center my-5 text-[6vmin]'>Top Rated Products</h1>

        <TopRatedProduct />

        <Banner1 />

        <h1 className='text-center text-[6vmin] mb-5 mt-[50px] border-2 border-gray-900 w-fit mx-auto py-0'><span className='bg-black text-white px-5 py-2'>Latest</span> <span className='mr-3'>Products</span> </h1>
        <LatestProduct />
      </div >
    </>
  )
}

export default Home
