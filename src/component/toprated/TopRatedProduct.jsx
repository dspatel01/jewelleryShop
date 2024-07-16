import React from 'react'
import neckless from '../../assets/61LTJSjq18L._AC_UY300_.jpg'
import ring1 from '../../assets/ring1.webp'
import ring2 from '../../assets/w8v79_512.webp'
import { FaRegStar } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
// import earings from '../assets/61LTJSjq18L._AC_UY300_.jpg'

const TopRatedProduct = () => {
    const navigation = useNavigate()

    const hendledeatiledProductInfo = (name) => {
       return navigation("/product/detailsPage/" +name)
    }

 
    return (
        <>
            <div className='w-full flex items-center justify-center mt-10 mb-16 '>
                <div className='w-[100%] flex justify-around flex-wrap mx-4 '>

                    <div className='relative bg-red-800 xl:w-80 lg:w-80 md:w-[45%] sm:w-[48%] w-[48%] rounded-xl my-2 mx-0 '  >

                        <div className='relative xl:w-80 lg:w-80 md:w-[100%] sm:mx-0 h-[350px] w-[100%] shadow-lg rounded-xl cursor-pointer bg-red-50' onClick={()=>hendledeatiledProductInfo("neckless")}>

                            <img src={neckless} alt="" className=' w-[100%] h-[100%] rounded-xl ' />
                            <div className='bg-black w-10 h-10 text-white rounded-full absolute top-2 right-4  flex justify-center items-center'>20%</div>
                            <div className=' w-full absolute bottom-0  bg-[rgba(0,0,0,0.8)] text-white rounded-b-xl py-2'>
                                <h1 className='ml-5 text-2xl font-bold tracking-wide'>Neckless</h1>
                                <div className='flex ml-5 text-xl'>
                                    <div><span className='font-bold tracking-wide'>Price: </span>1500</div>
                                    <div className='line-through ml-9'>2000</div>

                                </div>
                                <div className='w-full flex mt-1 items-start ml-5 text-lg '>
                                    <FaRegStar className='mr-2 text-sm text-yellow-600' />
                                    <FaRegStar className='mr-2 text-sm text-yellow-600' />
                                    <FaRegStar className='mr-2 text-sm text-yellow-600' />
                                    <FaRegStar className='mr-2 text-sm text-yellow-600' />
                                    <FaRegStar className='mr-5 text-sm text-yellow-600' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='relative bg-red-800 xl:w-80 lg:w-80 md:w-[45%] sm:w-[48%] w-[48%] rounded-xl my-2 mx-0 '  >

                        <div className='relative xl:w-80 lg:w-80 md:w-[100%] sm:mx-0 h-[350px] w-[100%] shadow-lg rounded-xl cursor-pointer bg-red-50' onClick={()=>hendledeatiledProductInfo("earing")}>
                            <div className='bg-black w-10 h-10 text-white rounded-full absolute top-2 right-4  flex justify-center items-center'>20%</div>
                            <img src={ring2} alt="" className=' w-[100%] h-[100%] rounded-xl ' />
                            <div className=' w-full absolute bottom-0  bg-[rgba(0,0,0,0.8)] text-white rounded-b-xl py-2'>
                                <h1 className='ml-5 text-2xl font-bold tracking-wide'>Neckless</h1>
                                <div className='flex ml-5 text-xl'>
                                    <div><span className='font-bold tracking-wide'>Price: </span>1500</div>
                                    <div className='line-through ml-9'>2000</div>

                                </div>
                                <div className='w-full flex mt-1 items-start ml-5 text-lg '>
                                    <FaRegStar className='mr-2 text-sm text-yellow-600' />
                                    <FaRegStar className='mr-2 text-sm text-yellow-600' />
                                    <FaRegStar className='mr-2 text-sm text-yellow-600' />
                                    <FaRegStar className='mr-2 text-sm text-yellow-600' />
                                    <FaRegStar className='mr-5 text-sm text-yellow-600' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='relative bg-red-800 xl:w-80 lg:w-80 md:w-[45%] sm:w-[48%] w-[48%] rounded-xl my-2 mx-0 '  >

                        <div className='relative xl:w-80 lg:w-80 md:w-[100%] sm:mx-0 h-[350px] w-[100%] shadow-lg rounded-xl cursor-pointer bg-red-50'>
                            <div className='bg-black w-10 h-10 text-white rounded-full absolute top-2 right-4  flex justify-center items-center'>20%</div>
                            <img src={ring1} alt="" className=' w-[100%] h-[100%] rounded-xl ' />
                            <div className=' w-full absolute bottom-0  bg-[rgba(0,0,0,0.8)] text-white rounded-b-xl py-2'>
                                <h1 className='ml-5 text-2xl font-bold tracking-wide'>Neckless</h1>
                                <div className='flex ml-5 text-xl'>
                                    <div><span className='font-bold tracking-wide'>Price: </span>1500</div>
                                    <div className='line-through ml-9'>2000</div>

                                </div>
                                <div className='w-full flex mt-1 items-start ml-5 text-lg '>
                                    <FaRegStar className='mr-2 text-sm text-yellow-600' />
                                    <FaRegStar className='mr-2 text-sm text-yellow-600' />
                                    <FaRegStar className='mr-2 text-sm text-yellow-600' />
                                    <FaRegStar className='mr-2 text-sm text-yellow-600' />
                                    <FaRegStar className='mr-5 text-sm text-yellow-600' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='relative bg-red-800 xl:w-80 lg:w-80 md:w-[45%] sm:w-[48%] w-[48%] rounded-xl my-2 mx-0 '  >

                        <div className='relative xl:w-80 lg:w-80 md:w-[100%] sm:mx-0 h-[350px] w-[100%] shadow-lg rounded-xl cursor-pointer bg-red-50'>
                            <div className='bg-black w-10 h-10 text-white rounded-full absolute top-2 right-4  flex justify-center items-center'>20%</div>
                            <img src={neckless} alt="" className=' w-[100%] h-[100%] rounded-xl ' />
                            <div className=' w-full absolute bottom-0  bg-[rgba(0,0,0,0.8)] text-white rounded-b-xl py-2'>
                                <h1 className='ml-5 text-2xl font-bold tracking-wide'>Neckless</h1>
                                <div className='flex ml-5 text-xl'>
                                    <div><span className='font-bold tracking-wide'>Price: </span>1500</div>
                                    <div className='line-through ml-9'>2000</div>

                                </div>
                                <div className='w-full flex mt-1 items-start ml-5 text-lg '>
                                    <FaRegStar className='mr-2 text-sm text-yellow-600' />
                                    <FaRegStar className='mr-2 text-sm text-yellow-600' />
                                    <FaRegStar className='mr-2 text-sm text-yellow-600' />
                                    <FaRegStar className='mr-2 text-sm text-yellow-600' />
                                    <FaRegStar className='mr-5 text-sm text-yellow-600' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='relative bg-red-800 xl:w-80 lg:w-80 md:w-[45%] sm:w-[48%] w-[48%] rounded-xl my-2 mx-0 '  >

                        <div className='relative xl:w-80 lg:w-80 md:w-[100%] sm:mx-0 h-[350px] w-[100%] shadow-lg rounded-xl cursor-pointer bg-red-50'>
                            <div className='bg-black w-10 h-10 text-white rounded-full absolute top-2 right-4  flex justify-center items-center'>20%</div>
                            <img src={ring2} alt="" className=' w-[100%] h-[100%] rounded-xl ' />
                            <div className=' w-full absolute bottom-0  bg-[rgba(0,0,0,0.8)] text-white rounded-b-xl py-2'>
                                <h1 className='ml-5 text-2xl font-bold tracking-wide'>Neckless</h1>
                                <div className='flex ml-5 text-xl'>
                                    <div><span className='font-bold tracking-wide'>Price: </span>1500</div>
                                    <div className='line-through ml-9'>2000</div>

                                </div>
                                <div className='w-full flex mt-1 items-start ml-5 text-lg '>
                                    <FaRegStar className='mr-2 text-sm text-yellow-600' />
                                    <FaRegStar className='mr-2 text-sm text-yellow-600' />
                                    <FaRegStar className='mr-2 text-sm text-yellow-600' />
                                    <FaRegStar className='mr-2 text-sm text-yellow-600' />
                                    <FaRegStar className='mr-5 text-sm text-yellow-600' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='relative bg-red-800 xl:w-80 lg:w-80 md:w-[45%] sm:w-[48%] w-[48%] rounded-xl my-2 mx-0 '  >

                        <div className='relative xl:w-80 lg:w-80 md:w-[100%] sm:mx-0 h-[350px] w-[100%] shadow-lg rounded-xl cursor-pointer bg-red-50'>
                            <div className='bg-black w-10 h-10 text-white rounded-full absolute top-2 right-4  flex justify-center items-center'>20%</div>
                            <img src={neckless} alt="" className=' w-[100%] h-[100%] rounded-xl ' />
                            <div className=' w-full absolute bottom-0  bg-[rgba(0,0,0,0.8)] text-white rounded-b-xl py-2'>
                                <h1 className='ml-5 text-2xl font-bold tracking-wide'>Neckless</h1>
                                <div className='flex ml-5 text-xl'>
                                    <div><span className='font-bold tracking-wide'>Price: </span>1500</div>
                                    <div className='line-through ml-9'>2000</div>

                                </div>
                                <div className='w-full flex mt-1 items-start ml-5 text-lg '>
                                    <FaRegStar className='mr-2 text-sm text-yellow-600' />
                                    <FaRegStar className='mr-2 text-sm text-yellow-600' />
                                    <FaRegStar className='mr-2 text-sm text-yellow-600' />
                                    <FaRegStar className='mr-2 text-sm text-yellow-600' />
                                    <FaRegStar className='mr-5 text-sm text-yellow-600' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='relative bg-red-800 xl:w-80 lg:w-80 md:w-[45%] sm:w-[48%] w-[48%] rounded-xl my-2 mx-0 '  >

                        <div className='relative xl:w-80 lg:w-80 md:w-[100%] sm:mx-0 h-[350px] w-[100%] shadow-lg rounded-xl cursor-pointer bg-red-50'>
                            <div className='bg-black w-10 h-10 text-white rounded-full absolute top-2 right-4  flex justify-center items-center'>20%</div>
                            <img src={ring1} alt="" className=' w-[100%] h-[100%] rounded-xl ' />
                            <div className=' w-full absolute bottom-0  bg-[rgba(0,0,0,0.8)] text-white rounded-b-xl py-2'>
                                <h1 className='ml-5 text-2xl font-bold tracking-wide'>Neckless</h1>
                                <div className='flex ml-5 text-xl'>
                                    <div><span className='font-bold tracking-wide'>Price: </span>1500</div>
                                    <div className='line-through ml-9'>2000</div>

                                </div>
                                <div className='w-full flex mt-1 items-start ml-5 text-lg '>
                                    <FaRegStar className='mr-2 text-sm text-yellow-600' />
                                    <FaRegStar className='mr-2 text-sm text-yellow-600' />
                                    <FaRegStar className='mr-2 text-sm text-yellow-600' />
                                    <FaRegStar className='mr-2 text-sm text-yellow-600' />
                                    <FaRegStar className='mr-5 text-sm text-yellow-600' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='relative bg-red-800 xl:w-80 lg:w-80 md:w-[45%] sm:w-[48%] w-[48%] rounded-xl my-2 mx-0 '  >

                        <div className='relative xl:w-80 lg:w-80 md:w-[100%] sm:mx-0 h-[350px] w-[100%] shadow-lg rounded-xl cursor-pointer bg-red-50'>
                            <div className='bg-black w-10 h-10 text-white rounded-full absolute top-2 right-4  flex justify-center items-center'>20%</div>
                            <img src={ring2} alt="" className=' w-[100%] h-[100%] rounded-xl ' />
                            <div className=' w-full absolute bottom-0  bg-[rgba(0,0,0,0.8)] text-white rounded-b-xl py-2'>
                                <h1 className='ml-5 text-2xl font-bold tracking-wide'>Neckless</h1>
                                <div className='flex ml-5 text-xl'>
                                    <div><span className='font-bold tracking-wide'>Price: </span>1500</div>
                                    <div className='line-through ml-9'>2000</div>

                                </div>
                                <div className='w-full flex mt-1 items-start ml-5 text-lg '>
                                    <FaRegStar className='mr-2 text-sm text-yellow-600' />
                                    <FaRegStar className='mr-2 text-sm text-yellow-600' />
                                    <FaRegStar className='mr-2 text-sm text-yellow-600' />
                                    <FaRegStar className='mr-2 text-sm text-yellow-600' />
                                    <FaRegStar className='mr-5 text-sm text-yellow-600' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <button className='bg-black text-white mt-8 px-12 py-3 text-xl rounded-lg'>See more</button>
                </div>
            </div>
        </>
    )
}

export default TopRatedProduct
