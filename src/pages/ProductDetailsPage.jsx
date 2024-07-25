import React, { useState } from 'react'
import img from '../assets/-473Wx593H-469138739-multi-MODEL.avif'
// import img1 from '../assets/8202766315-500x500.webp'
import img2 from '../assets/ring1.webp'
import img3 from '../assets/w8v79_512.webp'
import img4 from '../assets/ring1.webp'


const ProductDetailsPage = () => {

  const [picture, setPicture] = useState(img4)
  const [incresItem, setIncresItem] = useState(1)

  const selectImage = (item) => {
    setPicture(item);
  }




  return (
    <>
      <div className=' mt-[80px] text-center text-4xl font-bold mb-8'> <h1>Product Details</h1></div>

      <div className='flex justify-around flex-wrap'>
        <div className='xl:w-[40%] lg:w-[40%] md:w-[40%] sm:w-full w-full flex justify-center border'>
          <div className='border ml-8' >
            <img className='cursor-pointer w-24 h-24 border' src={img} alt="" onClick={() => selectImage(img)} />
            <img className='cursor-pointer w-24 h-24 border' src={img2} alt="" onClick={() => selectImage(img2)} />
            <img className='cursor-pointer w-24 h-24 border' src={img3} alt="" onClick={() => selectImage(img3)} />
            <img className='cursor-pointer w-24 h-24 border' src={img4} alt="" onClick={() => selectImage(img4)} />
          </div>

          <div className='w-96 h-[385px] mr-8 flex justify-center items-center'  >
            <img className='h-[100%]' src={picture} alt="" />
          </div>
        </div>
        <div className='xl:w-[50%] lg:w-[50%] md:w-[50%] sm:w-full w-full bg-[#f1f1f1]'>
          <div className="mt-5 ml-5">
            <h1 className='font-bold text-3xl'>Golden Dimond Ring</h1>
            <p className='font-bold text-xl'>Rs. 250,000.00</p>
            <div className="flex text-yellow-500">
              <div className='mt-1 flex justify-center items-center  bg-green-800 px-2 w-[fit-content]'>
                <div className='text-yellow-500 text-xl'>&#9733; </div>
                <div className='tracking-wide ml-1'>3.5</div>
              </div>
              <div className='ml-8 mt-1 w-[2px] h-6 bg-black'></div>
              <p className='ml-8 mt-1'>5 Customer Review</p>
            </div>
            <div className="mt-5 w-[90%]">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, recusandae voluptatum sit in omnis porro culpa maxime doloribus. Enim dolorem laboriosam quae accusamus sunt fugit tenetur dolores et, earum eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, cumque?</p>
            </div>

            <div className="flex mt-5 items-center justify-between flex-wrap">
                    <div className=" flex justify-center items-center sm:w-[fit-content] w-[fit-content] rounded-md ">
                      <button className='text-2xl font-bold bg-black py-0 px-4 text-white mr-4' onClick={() => incresItem <= 1 ? " " : setIncresItem(incresItem - 1)}>-</button>
                     <div className='text-xl'> {incresItem}</div>
                      <button className='text-2xl font-bold bg-black py-0 px-4 text-white ml-4' onClick={() => incresItem === 6 ? setIncresItem(incresItem) : setIncresItem(incresItem + 1)}>+</button>
                    </div>
                    <div className='w-40 bg-black text-white text-center py-4 sm:mr-5 mr-5'>  <button >Add To Cart</button></div>
                    <div className='xl:w-40 lg:w-40 md:w-40 sm:w-full w-full bg-black text-white text-center py-4 mr-5 xl:mt-5 lg:mt-4 md:mt-4 sm:mt-8 mt-8 mb-5'> <button >Buy Now</button></div>
                  </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default ProductDetailsPage
