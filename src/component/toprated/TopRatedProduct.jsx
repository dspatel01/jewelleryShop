import React from 'react'
import neckless from '../../assets/61LTJSjq18L._AC_UY300_.jpg'
import ring1 from '../../assets/ring1.webp'
import ring2 from '../../assets/w8v79_512.webp'
import earings from '../../assets/8202766315-500x500.webp'
import { useNavigate } from 'react-router-dom';

const TopRatedProduct = () => {
    const navigation = useNavigate()

    const hendledeatiledProductInfo = (name) => {
        return navigation("/product/detailsPage/" + name)
    }


    return (
        <>
            <div className='w-full flex justify-around items-center flex-wrap mb-2 '>
                <div className='relative xl:w-72 lg:w-72 md:w-60 sm:w-40 w-40 xl:h-80 lg:h-80 md:h-80 sm:h-64 h-64  rounded-lg bg-[#f7f7f7] my-4 cursor-pointer' onClick={() => hendledeatiledProductInfo("neckless")}>
                    <div className='bg-black w-10 h-10 text-white rounded-full absolute top-2 right-4  flex justify-center items-center'>20%</div>
                    <img className='rounded-t-lg w-full xl:h-[235px] lg:h-[235px] md:h-[235px] sm:h-[180px] h-[180px]' src={ring2} alt="" />
                    <div className='mx-2'>
                        <h1>Neckless</h1>
                        <div className='flex justify-between'>
                            <div>Price: ₹1000</div>
                            <div className='line-through'> ₹1500</div>
                        </div>
                        <div className='mb-1 flex justify-center items-center  bg-green-800 px-2 w-[fit-content]'>
                            <div className='text-yellow-500 text-xl'>&#9733; </div>
                            <div className='text-yellow-500 tracking-wide ml-1'>2.5</div>
                        </div>
                    </div>
                </div>
         
                <div className='relative xl:w-72 lg:w-72 md:w-60 sm:w-40 w-40 xl:h-80 lg:h-80 md:h-80 sm:h-64 h-64 bg-[#f7f7f7] rounded-lg my-4 cursor-pointer' onClick={() => hendledeatiledProductInfo("earing")}>
                    <div className='bg-black w-10 h-10 text-white rounded-full absolute top-2 right-4  flex justify-center items-center'>20%</div>
                    <img className='rounded-t-lg w-full xl:h-[235px] lg:h-[235px] md:h-[235px] sm:h-[180px] h-[180px]' src={earings} alt="" />
                    <div className='mx-2'>
                        <h1>Earnings</h1>
                        <div className='flex justify-between'>
                            <div>Price: ₹1000</div>
                            <div className='line-through'> ₹1500</div>
                        </div>
                        <div className='mb-1 flex justify-center items-center  bg-green-800 px-2 w-[fit-content]'>
                            <div className='text-yellow-500 text-xl'>&#9733; </div>
                            <div className='text-yellow-500 tracking-wide ml-1'>4</div>
                        </div>
                    </div>
                </div>
             
                <div className='relative xl:w-72 lg:w-72 md:w-60 sm:w-40 w-40 xl:h-80 lg:h-80 md:h-80 sm:h-64 h-64 bg-[#f7f7f7] rounded-lg my-4 cursor-pointer' onClick={() => hendledeatiledProductInfo("ring")}>
                    <div className='bg-black w-10 h-10 text-white rounded-full absolute top-2 right-4  flex justify-center items-center'>20%</div>
                    <img className='rounded-t-lg w-full xl:h-[235px] lg:h-[235px] md:h-[235px] sm:h-[180px] h-[180px]' src={ring1} alt="" />
                    <div className='mx-2'>
                        <h1>Rings</h1>
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

                  <div className='relative xl:w-72 lg:w-72 md:w-60 sm:w-40 w-40 xl:h-80 lg:h-80 md:h-80 sm:h-64 h-64 bg-[#f7f7f7] rounded-lg my-4 cursor-pointer'>
                    <div className='bg-black w-10 h-10 text-white rounded-full absolute top-2 right-4  flex justify-center items-center'>20%</div>
                    <img className='rounded-t-lg w-full xl:h-[235px] lg:h-[235px] md:h-[235px] sm:h-[180px] h-[180px]' src={neckless} alt="" />
                    <div className='mx-2'>
                        <h1>Earnings</h1>
                        <div className='flex justify-between'>
                            <div>Price: ₹1000</div>
                            <div className='line-through'> ₹1500</div>
                        </div>
                        <div className='mb-1 flex justify-center items-center  bg-green-800 px-2 w-[fit-content]'>
                            <div className='text-yellow-500 text-xl'>&#9733; </div>
                            <div className='text-yellow-500 tracking-wide ml-1'>4.5</div>
                        </div>
                    </div>
                </div>

                <div className='relative xl:w-72 lg:w-72 md:w-60 sm:w-40 w-40 xl:h-80 lg:h-80 md:h-80 sm:h-64 h-64 bg-[#f7f7f7] rounded-lg my-4 cursor-pointer'>
                    <div className='bg-black w-10 h-10 text-white rounded-full absolute top-2 right-4  flex justify-center items-center'>20%</div>
                    <img className='rounded-t-lg w-full xl:h-[235px] lg:h-[235px] md:h-[235px] sm:h-[180px] h-[180px]' src={neckless} alt="" />
                    <div className='mx-2'>
                        <h1>Earnings</h1>
                        <div className='flex justify-between'>
                            <div>Price: ₹1000</div>
                            <div className='line-through'> ₹1500</div>
                        </div>
                        <div className='mb-1 flex justify-center items-center  bg-green-800 px-2 w-[fit-content]'>
                            <div className='text-yellow-500 text-xl'>&#9733; </div>
                            <div className='text-yellow-500 tracking-wide ml-1'>4.5</div>
                        </div>
                    </div>
                </div>


                <div className='relative xl:w-72 lg:w-72 md:w-60 sm:w-40 w-40 xl:h-80 lg:h-80 md:h-80 sm:h-64 h-64 bg-[#f7f7f7] rounded-lg my-4 cursor-pointer'>
                    <div className='bg-black w-10 h-10 text-white rounded-full absolute top-2 right-4  flex justify-center items-center'>20%</div>
                    <img className='rounded-t-lg w-full xl:h-[235px] lg:h-[235px] md:h-[235px] sm:h-[180px] h-[180px]' src={neckless} alt="" />
                    <div className='mx-2'>
                        <h1>Earnings</h1>
                        <div className='flex justify-between'>
                            <div>Price: ₹1000</div>
                            <div className='line-through'> ₹1500</div>
                        </div>
                        <div className='mb-1 flex justify-center items-center  bg-green-800 px-2 w-[fit-content]'>
                            <div className='text-yellow-500 text-xl'>&#9733; </div>
                            <div className='text-yellow-500 tracking-wide ml-1'>4.5</div>
                        </div>
                    </div>
                </div>

                <div className='relative xl:w-72 lg:w-72 md:w-60 sm:w-40 w-40 xl:h-80 lg:h-80 md:h-80 sm:h-64 h-64 bg-[#f7f7f7] rounded-lg my-4 cursor-pointer'>
                    <div className='bg-black w-10 h-10 text-white rounded-full absolute top-2 right-4  flex justify-center items-center'>20%</div>
                    <img className='rounded-t-lg w-full xl:h-[235px] lg:h-[235px] md:h-[235px] sm:h-[180px] h-[180px]' src={neckless} alt="" />
                    <div className='mx-2'>
                        <h1>Earnings</h1>
                        <div className='flex justify-between'>
                            <div>Price: ₹1000</div>
                            <div className='line-through'> ₹1500</div>
                        </div>
                        <div className='mb-1 flex justify-center items-center  bg-green-800 px-2 w-[fit-content]'>
                            <div className='text-yellow-500 text-xl'>&#9733; </div>
                            <div className='text-yellow-500 tracking-wide ml-1'>4.5</div>
                        </div>
                    </div>
                </div>

                <div className='relative xl:w-72 lg:w-72 md:w-60 sm:w-40 w-40 xl:h-80 lg:h-80 md:h-80 sm:h-64 h-64 bg-[#f7f7f7] rounded-lg my-4 cursor-pointer'>
                    <div className='bg-black w-10 h-10 text-white rounded-full absolute top-2 right-4  flex justify-center items-center'>20%</div>
                    <img className='rounded-t-lg w-full xl:h-[235px] lg:h-[235px] md:h-[235px] sm:h-[180px] h-[180px]' src={neckless} alt="" />
                    <div className='mx-2'>
                        <h1>Earnings</h1>
                        <div className='flex justify-between'>
                            <div>Price: ₹1000</div>
                            <div className='line-through'> ₹1500</div>
                        </div>
                        <div className='mb-1 flex justify-center items-center  bg-green-800 px-2 w-[fit-content]'>
                            <div className='text-yellow-500 text-xl'>&#9733; </div>
                            <div className='text-yellow-500 tracking-wide ml-1'>4.5</div>
                        </div>
                    </div>
                </div>

            </div>

            <div className='flex justify-center'>
                <button className='bg-black text-white mt-8 px-12 py-3 text-xl rounded-lg'>See more</button>
            </div> 


        </>
    )
}

export default TopRatedProduct






//  <div className='relative xl:w-80 lg:w-80 md:w-[100%] sm:mx-0  w-[100%]  shadow-lg rounded-xl cursor-pointer bg-red-50 xl:h-[350px] lg:h-[350px] mg:h-[350px] sm:h-[220px] h-[220px]' onClick={() => hendledeatiledProductInfo("neckless")}>