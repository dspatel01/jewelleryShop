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


        <Banner1  />



        <h1 className='text-center text-4xl mt-20 '>Latest Products</h1>
        <LatestProduct />


        {/* testimonial */}
        {/* <TestimonialSlider /> */}



        {/* shippingDetails */}

        {/* <div className=" w-full h-[fit-content] flex justify-around items-center bg-[#f1f1f1]  flex-wrap">
          <div className="cursor-pointer flex justify-around items-center flex-col my-10">
            <div className='text-5xl mb-2'>
              <BsTrophy />
            </div>
            <div className='text-center text-xl'>
              <h3>Hight Quality</h3>
              <p>crafted from top metarials</p>
            </div>
          </div>
          <div className="cursor-pointer flex justify-around items-center flex-col py-10">
            <div className='text-5xl mb-2'>
              <BsPatchCheck />
            </div>
            <div className='text-center text-xl'>
              <h3>Warranty Protection</h3>
              <p>over 2 years</p>
            </div>
          </div>

          <div className="cursor-pointer flex justify-around items-center flex-col py-10">
            <div className='text-5xl mb-2'>
              <MdOutlineLocalShipping />
            </div>
            <div className='text-center text-xl'>
              <h3>Free Shiping</h3>
              <p>order over 150 ₹</p>
            </div>
          </div>

          <div className="cursor-pointer flex justify-around items-center flex-col py-10">
            <div className='text-5xl mb-2'>
              <MdOutlineSupportAgent />

            </div>
            <div className='text-center text-xl'>
              <h3>24/7</h3>
              <p>dedicated support</p>
            </div>
          </div>
        </div> */}


      </div >
    </>
  )
}

export default Home
