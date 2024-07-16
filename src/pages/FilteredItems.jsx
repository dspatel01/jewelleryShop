import React from 'react'
import data from '../data/data.json'
import { Link, useNavigate, useParams } from 'react-router-dom'
import neckless from '../assets/-473Wx593H-469138739-multi-MODEL.avif'
import { FaRegStar } from "react-icons/fa";

const FilteredItems = () => {

    const param = useParams();
    const navgation = useNavigate()


    const filterCategory = param.name;
    const newData = data.product.filter((item) => item.p_category === filterCategory)

    const handleSingleItem = (id) => {
        navgation("/product/detailsPages/" + id)
    }

    return (
        <>
            <div className='mt-28'><Link className='w-28  ml-8 bg-black text-white text-center py-2 px-6 text-2xl rounded-lg' to='/'>Back</Link></div>
            <div className=' w-[100%] flex  justify-around flex-wrap'>
                {
                    newData.map((i, index) => {
                        return (

                            <div className='relative xl:w-72 lg:w-72 md:w-[100%] sm:mx-0 h-[350px] w-[100%] shadow-lg rounded-xl cursor-pointer bg-red-50 my-5' onClick={() => handleSingleItem(i.p_id)} >

                                <img src={neckless} alt="" className=' w-[100%] h-[100%] rounded-xl ' />
                                <div className='bg-black w-10 h-10 text-white rounded-full absolute top-2 right-4  flex justify-center items-center'>20%</div>
                                <div className=' w-full absolute bottom-0  bg-[rgba(0,0,0,0.8)] text-white rounded-b-xl py-2'>
                                    <h1 className='ml-5 text-2xl font-bold tracking-wide'> {i.p_name}</h1>
                                    <div className='flex ml-5 text-xl'>
                                        <div><span className='font-bold tracking-wide'>Price: </span>{i.p_price}</div>
                                        <div className='line-through ml-9'>{i.p_discount}</div>

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

                        )
                    })
                }   </div>
        </>
    )
}

export default FilteredItems
