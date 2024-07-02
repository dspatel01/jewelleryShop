import React, { useState } from 'react'
import { FaBarsStaggered } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import { BsHandbag } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import { CgClose } from "react-icons/cg";
import  { NavLink}  from 'react-router-dom';



const Navbar = () => {

    const [menuClose, setMenuClose] = useState(false)

    const handleMenuBar = () => {
        if (!menuClose) {
            setMenuClose(true)
            console.log("open")
        } else {
            setMenuClose(false);
            console.log("close")
        }

    }

    return (
        <>
            <div className='relative shadow-md shadow-gray-500 bg-slate-700 w-full h-10 flex text-white items-center justify-between py-8 '>
                <div className='text-3xl xl:ml-10 lg:ml-10 md:ml-10 sm:ml-6 ml-4' onClick={() => handleMenuBar()}>
                    {!menuClose ? <FaBarsStaggered className='text-4xl rotate-10 hover:rotate-180 delay-100 ease-in-out' /> : <div><CgClose className='text-4xl transition-all hover:rotate-180 delay-200 ease-in-out' /> </div>}
                </div>
                <div className='' >
                    <h1 className='drop-shadow-2xl tracking-wider xl:text-3xl lg:text-3xl md:text-text-2xl sm:text-3xl text-xl ml-[80px] italic text-center'>
                        {/* DP-Jewellery */}
                    </h1>
                </div>
                <div className='xl:text-3xl lg:text-3xl md:text-2xl sm:text-2xl text-3xl flex xl:mr-10 lg:mr-10 md:mr-10 sm:mr-6 mr-2'>
                    <IoSearchOutline className='cursor-pointer ' />
                    <BsHandbag className='cursor-pointer md:mx-5 sm:mx-8 mx-3' />
                    <CiUser className='cursor-pointer' />
                </div>
            </div>
            {menuClose ? <div className='z-10 absolute w-[100vw] h-[84.4vh] bg-slate-600 flex items-center justify-center text-white text-2xl'>
                <ul className='flex items-center justify-center flex-col'>
                    <li className='mb-10 hover:text-black hover:scale-125 ease-in-out'>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li className='mb-10 hover:text-black hover:scale-125 ease-in-out'>
                        <a href="/">Earrings</a>
                    </li>
                    <li className='mb-10 hover:text-black hover:scale-125 ease-in-out'>
                        <a href="/">Necklace</a>
                    </li>
                    <li className='mb-10 hover:text-black hover:scale-125 ease-in-out'>
                        <a href="/">Bracelets</a>
                    </li>
                    <li className='mb-10 hover:text-black hover:scale-125 ease-in-out'>
                        <a href="/">Ring</a>
                    </li>
                    <li className='mb-10 hover:text-black hover:scale-125 ease-in-out'>
                        <a href="/">NosePin</a>
                    </li>
                </ul>
            </div> : <> </>
            }
        </>
    )
}

export default Navbar
