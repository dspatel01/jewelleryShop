import React,{useEffect} from 'react'
import pic1 from '../assets/WhatsApp Image 2024-08-21 at 2.12.39 PM.jpeg'
import pic2 from '../assets/WhatsApp Image 2024-08-21 at 2.12.39 PM (2).jpeg'
import pic3 from '../assets/WhatsApp Image 2024-08-21 at 2.12.39 PM (1).jpeg'
import pic4 from '../assets/WhatsApp Image 2024-08-21 at 2.12.38 PM.jpeg'
import AOS from 'aos'
import "aos/dist/aos.css"

const LatestProduct = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  return (
    <>
     <div className='w-full flex justify-around items-center flex-wrap my-10 '>
          <div  data-aos="fade-up" className='relative xl:w-72 lg:w-72 md:w-60 sm:w-40 w-40 xl:h-80 lg:h-80 md:h-80 sm:h-64 h-64  rounded-lg bg-[#f7f7f7] my-4 cursor-pointer '>
            <div className='bg-black w-10 h-10 text-white rounded-full absolute top-2 right-4  flex justify-center items-center'>20%</div>
            <img className='rounded-t-lg w-full xl:h-[235px] lg:h-[235px] md:h-[235px] sm:h-[180px] h-[180px]' src={pic1} alt="" />
            <div className='mx-2'>
              <h1>Neckless</h1>
              <div className='flex justify-between'>
                <div>Price: ₹1000</div>
                <div className='line-through'> ₹1500</div>
              </div>
              <div className='mb-1 flex justify-center items-center  bg-green-800 px-2 w-[fit-content]'>
                <div className='text-yellow-500 text-xl'>&#9733; </div>
                <div className='text-yellow-500 tracking-wide ml-1'>3.5</div>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" className='relative xl:w-72 lg:w-72 md:w-60 sm:w-40 w-40 xl:h-80 lg:h-80 md:h-80 sm:h-64 h-64 bg-[#f7f7f7] rounded-lg my-4 cursor-pointer '>
            <div className='bg-black w-10 h-10 text-white rounded-full absolute top-2 right-4  flex justify-center items-center'>20%</div>
            <img className='rounded-t-lg w-full xl:h-[235px] lg:h-[235px] md:h-[235px] sm:h-[180px] h-[180px]' src={pic2} alt="" />
            <div className='mx-2'>
              <h1>Neckless</h1>
              <div className='flex justify-between'>
                <div>Price: ₹1000</div>
                <div className='line-through'> ₹1500</div>
              </div>
              <div className='mb-1 flex justify-center items-center  bg-green-800 px-2 w-[fit-content]'>
                <div className='text-yellow-500 text-xl'>&#9733; </div>
                <div className='text-yellow-500 tracking-wide ml-1'>3.5</div>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" className='relative xl:w-72 lg:w-72 md:w-60 sm:w-40 w-40 xl:h-80 lg:h-80 md:h-80 sm:h-64 h-64 bg-[#f7f7f7] rounded-lg my-4 cursor-pointer '>
            <div className='bg-black w-10 h-10 text-white rounded-full absolute top-2 right-4  flex justify-center items-center'>20%</div>
            <img className='rounded-t-lg w-full xl:h-[235px] lg:h-[235px] md:h-[235px] sm:h-[180px] h-[180px]' src={pic3} alt="" />
            <div className='mx-2'>
              <h1>Neckless</h1>
              <div className='flex justify-between'>
                <div>Price: ₹1000</div>
                <div className='line-through'> ₹1500</div>
              </div>
              <div className='mb-1 flex justify-center items-center  bg-green-800 px-2 w-[fit-content]'>
                <div className='text-yellow-500 text-xl'>&#9733; </div>
                <div className='text-yellow-500 tracking-wide ml-1'>3.5</div>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" className='relative xl:w-72 lg:w-72 md:w-60 sm:w-40 w-40 xl:h-80 lg:h-80 md:h-80 sm:h-64 h-64 bg-[#f7f7f7] rounded-lg my-4 cursor-pointer '>
            <div className='bg-black w-10 h-10 text-white rounded-full absolute top-2 right-4  flex justify-center items-center'>20%</div>
            <img className='rounded-t-lg w-full xl:h-[235px] lg:h-[235px] md:h-[235px] sm:h-[180px] h-[180px]' src={pic4} alt="" />
            <div className='mx-2'>
              <h1>Neckless</h1>
              <div className='flex justify-between'>
                <div>Price: ₹1000</div>
                <div className='line-through'> ₹1500</div>
              </div>
              <div className='mb-1 flex justify-center items-center  bg-green-800 px-2 w-[fit-content]'>
                <div className='text-yellow-500 text-xl'>&#9733; </div>
                <div className='text-yellow-500 tracking-wide ml-1'>3.5</div>
              </div>
            </div>
          </div>

        </div>
    </>
  )
}

export default LatestProduct
