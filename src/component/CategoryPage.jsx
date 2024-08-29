import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import catg1 from '../assets/category/c_img-1724827179629.jpg'
import catg2 from '../assets/category/c_img-1724832544845.avif'
import catg3 from '../assets/category/c_img-1724833029309.png'
import catg4 from '../assets/category/c_img-1724833347192.png'
import catg5 from '../assets/category/c_img-1724833546898.png'
import catg6 from '../assets/category/c_img-1724833866006.png'
import catg7 from '../assets/category/c_img-1724834119458.png'

const CategoryPage = () => {
  // const [category, setCategory] = useState([])
  // const navigation = useNavigate()


  // const getData = () => {

  //     fetch('http://localhost:8080/category')
  //         .then((resp) => resp.json())
  //         .then(data => setCategory(data))
  // }

  // useEffect(() => {
  //     getData()
  // }, [])

  // const getFullUrl = (imageData) => {
  //     return `http://localhost:8080/category${imageData}`
  // }

  // const handleFilteredItem = (item) => {
  //     navigation("/" + item)
  // }
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <div className=' w-full relative top-0 flex items-center justify-center mb-20 '>
        <div className='w-[88%] flex flex-col justify-center '>
          <Slider {...settings} className='flex justify-center items-center flex-col'>
            {/* {
                            
                            category.length !== 0 ?
                                category &&
                                category.map((items, i) => {
                                    return (
                                     
                                        <div key={i}  >
                                            <div className='xl:mx-16 lg:ml-6 md:ml-10 sm:ml-8 ml-1 my-2 xl:w-28 lg:w-28 md:w-28 sm:w-24 w-24 shadow-2xl xl:h-28 lg:h-28 md:h-28 sm:h-24 h-24 rounded-full cursor-pointer flex justify-center items-center' onClick={() => {
                                                handleFilteredItem(items.c_name)
                                            }}>
                                                <img src={getFullUrl(items.c_img)} alt={items.c_name} className='object-contain border-gray-700 rounded-full xl:w-[80%] lg:w-[80%] md:w-[80%] sm:w-[80%] w-[80%] xl:h-[80%] lg:h-[80%] md:h-[80%] sm:h-[80%] h-[80%]' />
                                            </div>
                                            <p className='text-center text-lg'>{items.c_name}</p>
                                        </div>
                                     
                                    )
                                }) : <div className='w-[100%]'>
                                    <div className='text-center text-3xl text-gray-300'> No Category Avaliable </div>
                                </div>
                                
                        } */}


            <div >
              <div className='xl:mx-16 lg:ml-6 md:ml-10 sm:ml-8 ml-1 my-2 xl:w-28 lg:w-28 md:w-28 sm:w-24 w-24 shadow-2xl xl:h-28 lg:h-28 md:h-28 sm:h-24 h-24 rounded-full cursor-pointer flex justify-center items-center'>
                <img src={catg1} alt='' className='object-contain border-gray-700 rounded-full xl:w-[80%] lg:w-[80%] md:w-[80%] sm:w-[80%] w-[80%] xl:h-[80%] lg:h-[80%] md:h-[80%] sm:h-[80%] h-[80%]' />
              </div>
              <p className='text-center text-lg'>Earring</p>
            </div>
            <div >
              <div className='xl:mx-16 lg:ml-6 md:ml-10 sm:ml-8 ml-1 my-2 xl:w-28 lg:w-28 md:w-28 sm:w-24 w-24 shadow-2xl xl:h-28 lg:h-28 md:h-28 sm:h-24 h-24 rounded-full cursor-pointer flex justify-center items-center'>
                <img src={catg2} alt='' className='object-contain border-gray-700 rounded-full xl:w-[80%] lg:w-[80%] md:w-[80%] sm:w-[80%] w-[80%] xl:h-[80%] lg:h-[80%] md:h-[80%] sm:h-[80%] h-[80%]' />
              </div>
              <p className='text-center text-lg'>Ring</p>
            </div>
            <div >
              <div className='xl:mx-16 lg:ml-6 md:ml-10 sm:ml-8 ml-1 my-2 xl:w-28 lg:w-28 md:w-28 sm:w-24 w-24 shadow-2xl xl:h-28 lg:h-28 md:h-28 sm:h-24 h-24 rounded-full cursor-pointer flex justify-center items-center'>
                <img src={catg3} alt='' className='object-contain border-gray-700 rounded-full xl:w-[80%] lg:w-[80%] md:w-[80%] sm:w-[80%] w-[80%] xl:h-[80%] lg:h-[80%] md:h-[80%] sm:h-[80%] h-[80%]' />
              </div>
              <p className='text-center text-lg'>Bangles</p>
            </div>
            <div >
              <div className='xl:mx-16 lg:ml-6 md:ml-10 sm:ml-8 ml-1 my-2 xl:w-28 lg:w-28 md:w-28 sm:w-24 w-24 shadow-2xl xl:h-28 lg:h-28 md:h-28 sm:h-24 h-24 rounded-full cursor-pointer flex justify-center items-center'>
                <img src={catg4} alt='' className='object-contain border-gray-700 rounded-full xl:w-[80%] lg:w-[80%] md:w-[80%] sm:w-[80%] w-[80%] xl:h-[80%] lg:h-[80%] md:h-[80%] sm:h-[80%] h-[80%]' />
              </div>
              <p className='text-center text-lg'>Anklet</p>
            </div>

            <div >
              <div className='xl:mx-16 lg:ml-6 md:ml-10 sm:ml-8 ml-1 my-2 xl:w-28 lg:w-28 md:w-28 sm:w-24 w-24 shadow-2xl xl:h-28 lg:h-28 md:h-28 sm:h-24 h-24 rounded-full cursor-pointer flex justify-center items-center'>
                <img src={catg5} alt='' className='object-contain border-gray-700 rounded-full xl:w-[80%] lg:w-[80%] md:w-[80%] sm:w-[80%] w-[80%] xl:h-[80%] lg:h-[80%] md:h-[80%] sm:h-[80%] h-[80%]' />
              </div>
              <p className='text-center text-lg'>Pendent</p>
            </div>
            <div >
              <div className='xl:mx-16 lg:ml-6 md:ml-10 sm:ml-8 ml-1 my-2 xl:w-28 lg:w-28 md:w-28 sm:w-24 w-24 shadow-2xl xl:h-28 lg:h-28 md:h-28 sm:h-24 h-24 rounded-full cursor-pointer flex justify-center items-center'>
                <img src={catg6} alt='' className='object-contain border-gray-700 rounded-full xl:w-[80%] lg:w-[80%] md:w-[80%] sm:w-[80%] w-[80%] xl:h-[80%] lg:h-[80%] md:h-[80%] sm:h-[80%] h-[80%]' />
              </div>
              <p className='text-center text-lg'>Nosepin</p>
            </div>

          </Slider>
        </div>
      </div>
    </>
  )
}

export default CategoryPage
