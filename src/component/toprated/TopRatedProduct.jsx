import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import data from '../../data/data.json'
import img1 from '../../assets/WhatsApp Image 2024-08-21 at 2.12.36 PM (1).jpeg'
import img2 from '../../assets/WhatsApp Image 2024-08-21 at 2.12.36 PM.jpeg'
import img3 from '../../assets/WhatsApp Image 2024-08-21 at 2.12.37 PM (1).jpeg'
import img4 from '../../assets/WhatsApp Image 2024-08-21 at 2.12.37 PM (2).jpeg'
import img5 from '../../assets/WhatsApp Image 2024-08-21 at 2.12.37 PM.jpeg'
import img6 from '../../assets/WhatsApp Image 2024-08-21 at 2.12.38 PM (1).jpeg'
import img7 from '../../assets/WhatsApp Image 2024-08-21 at 2.12.38 PM (2).jpeg'
import img8 from '../../assets/WhatsApp Image 2024-08-21 at 2.12.38 PM.jpeg'
// import img9 from '../../assets/WhatsApp Image 2024-08-21 at 2.12.39 PM (1).jpeg'
import AOS from 'aos'
import "aos/dist/aos.css"

const TopRatedProduct = () => {
    const navigation = useNavigate()

    const hendledeatiledProductInfo = (id) => {
        // return navigation("/product/detailsPage/" + id)
        return navigation('/get-deails-of-product')
    }
    // const handleProductPage = () => {
    // return navigation("/all-product/")

    // }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    useEffect(() => {
        AOS.init({ duration: 1000 })
      }, [])
    // console.log(data.product)
    return (
        <>
            <div className='w-full flex justify-around items-center flex-wrap mb-2 '>
                {/* {data.product.map((item) => {
                    return (
                        <div data-aos="fade-up" className='relative xl:w-72 lg:w-72 md:w-60 sm:w-40 w-40 xl:h-80 lg:h-80 md:h-80 sm:h-64 h-64 rounded-lg bg-[#f7f7f7] my-4 cursor-pointer shadow-md ]' 
                        onClick={() => hendledeatiledProductInfo(item.p_id)} key={item.p_id}>
                            <div className='bg-black w-10 h-10 text-white rounded-full absolute top-2 right-4  flex justify-center items-center'>{item.p_discount}%</div>
                            <img className='rounded-t-lg w-full xl:h-[235px] lg:h-[235px] md:h-[235px] sm:h-[180px] h-[180px]' src={ring2} alt="" />
                            <div className='mx-2 mt-2'>
                                <h1>{item.p_name}</h1>
                                <div className='flex justify-between'>
                                    <div>Price: {item.p_price - item.p_price*item.p_discount/100}</div>
                                    <div className='line-through'>₹.{item.p_price}</div>
                                </div>
                                <div className='mb-1 flex justify-center items-center  bg-green-800 px-2 w-[fit-content]'>
                                    <div className='text-yellow-500 text-xl'>&#9733; </div>
                                    <div className='text-yellow-500 tracking-wide ml-1'>2.5</div>
                                </div>
                            </div>
                        </div>
                    )
                })} */}


                <div data-aos="fade-up" className='relative xl:w-72 lg:w-72 md:w-60 sm:w-40 w-40 xl:h-80 lg:h-80 md:h-80 sm:h-64 h-64 bg-[#f7f7f7] rounded-lg my-4 cursor-pointer' onClick={ hendledeatiledProductInfo}>
                    <div className='bg-black w-10 h-10 text-white rounded-full absolute top-2 right-4  flex justify-center items-center'>20%</div>
                    <img className='rounded-t-lg w-full xl:h-[235px] lg:h-[235px] md:h-[235px] sm:h-[180px] h-[180px]' src={img1} alt="" />
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

                <div data-aos="fade-up" className='relative xl:w-72 lg:w-72 md:w-60 sm:w-40 w-40 xl:h-80 lg:h-80 md:h-80 sm:h-64 h-64 bg-[#f7f7f7] rounded-lg my-4 cursor-pointer' onClick={ hendledeatiledProductInfo}>
                    <div className='bg-black w-10 h-10 text-white rounded-full absolute top-2 right-4  flex justify-center items-center'>20%</div>
                    <img className='rounded-t-lg w-full xl:h-[235px] lg:h-[235px] md:h-[235px] sm:h-[180px] h-[180px]' src={img2} alt="" />
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

                <div data-aos="fade-up" className='relative xl:w-72 lg:w-72 md:w-60 sm:w-40 w-40 xl:h-80 lg:h-80 md:h-80 sm:h-64 h-64 bg-[#f7f7f7] rounded-lg my-4 cursor-pointer' onClick={ hendledeatiledProductInfo}>
                    <div className='bg-black w-10 h-10 text-white rounded-full absolute top-2 right-4  flex justify-center items-center'>20%</div>
                    <img className='rounded-t-lg w-full xl:h-[235px] lg:h-[235px] md:h-[235px] sm:h-[180px] h-[180px]' src={img3} alt="" />
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

                <div data-aos="fade-up" className='relative xl:w-72 lg:w-72 md:w-60 sm:w-40 w-40 xl:h-80 lg:h-80 md:h-80 sm:h-64 h-64 bg-[#f7f7f7] rounded-lg my-4 cursor-pointer' onClick={ hendledeatiledProductInfo}>
                    <div className='bg-black w-10 h-10 text-white rounded-full absolute top-2 right-4  flex justify-center items-center'>20%</div>
                    <img className='rounded-t-lg w-full xl:h-[235px] lg:h-[235px] md:h-[235px] sm:h-[180px] h-[180px]' src={img4} alt="" />
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


                <div data-aos="fade-up" className='relative xl:w-72 lg:w-72 md:w-60 sm:w-40 w-40 xl:h-80 lg:h-80 md:h-80 sm:h-64 h-64 bg-[#f7f7f7] rounded-lg my-4 cursor-pointer' onClick={ hendledeatiledProductInfo}>
                    <div className='bg-black w-10 h-10 text-white rounded-full absolute top-2 right-4  flex justify-center items-center'>20%</div>
                    <img className='rounded-t-lg w-full xl:h-[235px] lg:h-[235px] md:h-[235px] sm:h-[180px] h-[180px]' src={img5} alt="" />
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

                <div data-aos="fade-up" className='relative xl:w-72 lg:w-72 md:w-60 sm:w-40 w-40 xl:h-80 lg:h-80 md:h-80 sm:h-64 h-64 bg-[#f7f7f7] rounded-lg my-4 cursor-pointer' onClick={ hendledeatiledProductInfo}>
                    <div className='bg-black w-10 h-10 text-white rounded-full absolute top-2 right-4  flex justify-center items-center'>20%</div>
                    <img className='rounded-t-lg w-full xl:h-[235px] lg:h-[235px] md:h-[235px] sm:h-[180px] h-[180px]' src={img6} alt="" />
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

                <div data-aos="fade-up" className='relative xl:w-72 lg:w-72 md:w-60 sm:w-40 w-40 xl:h-80 lg:h-80 md:h-80 sm:h-64 h-64 bg-[#f7f7f7] rounded-lg my-4 cursor-pointer' onClick={ hendledeatiledProductInfo}>
                    <div className='bg-black w-10 h-10 text-white rounded-full absolute top-2 right-4  flex justify-center items-center'>20%</div>
                    <img className='rounded-t-lg w-full xl:h-[235px] lg:h-[235px] md:h-[235px] sm:h-[180px] h-[180px]' src={img7} alt="" />
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

                <div data-aos="fade-up" className='relative xl:w-72 lg:w-72 md:w-60 sm:w-40 w-40 xl:h-80 lg:h-80 md:h-80 sm:h-64 h-64 bg-[#f7f7f7] rounded-lg my-4 cursor-pointer' onClick={ hendledeatiledProductInfo}>
                    <div className='bg-black w-10 h-10 text-white rounded-full absolute top-2 right-4  flex justify-center items-center'>20%</div>
                    <img className='rounded-t-lg w-full xl:h-[235px] lg:h-[235px] md:h-[235px] sm:h-[180px] h-[180px]' src={img8} alt="" />
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
{/* 
            <div className='flex justify-center'>
                <button className='bg-black text-white mt-8 px-12 py-3 text-xl rounded-lg' onClick={handleProductPage}>See More Product</button>
            </div> */}

            
        </>
    )
}

export default TopRatedProduct






//  <div className='relative xl:w-80 lg:w-80 md:w-[100%] sm:mx-0  w-[100%]  shadow-lg rounded-xl cursor-pointer bg-red-50 xl:h-[350px] lg:h-[350px] mg:h-[350px] sm:h-[220px] h-[220px]' onClick={() => hendledeatiledProductInfo("neckless")}>