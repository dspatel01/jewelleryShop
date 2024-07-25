import React from 'react'
import data from '../data/data.json'
import { Link, useNavigate, useParams } from 'react-router-dom'
import neckless from '../assets/-473Wx593H-469138739-multi-MODEL.avif'

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
            <div className='w-full flex justify-around items-center flex-wrap mb-2'>
                {
                    newData.map((i, index) => {
                        return (
                                <div className='relative xl:w-72 lg:w-72 md:w-60 sm:w-40 w-40 xl:h-80 lg:h-80 md:h-80 sm:h-64 h-64  rounded-lg bg-[#f7f7f7] my-4 cursor-pointer' onClick={() => handleSingleItem(i.p_id)}>
                                    <div className='bg-black w-10 h-10 text-white rounded-full absolute top-2 right-4  flex justify-center items-center'>20%</div>
                                    <img className='rounded-t-lg w-full xl:h-[235px] lg:h-[235px] md:h-[235px] sm:h-[180px] h-[180px]' src={neckless} alt="" />
                                    <div className='mx-2'>
                                        <h1>{i.p_name}</h1>
                                        <div className='flex justify-between'>
                                            <div>Price: ₹{i.p_price}</div>
                                            <div className='line-through'> ₹:{i.p_discount}</div>
                                        </div>
                                        <div className='mb-1 flex justify-center items-center  bg-green-800 px-2 w-[fit-content]'>
                                            <div className='text-yellow-500 text-xl'>&#9733; </div>
                                            <div className='text-yellow-500 tracking-wide ml-1'>2.5</div>
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
