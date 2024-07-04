import React, { useState } from 'react'
import { FaBarsStaggered } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import { BsHandbag } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import { CgClose } from "react-icons/cg";
import { NavLink } from 'react-router-dom';



const Navbar = () => {

    const [menuClose, setMenuClose] = useState(false)
    const [search, setSearch] = useState(false)

    const handleMenuBar = () => {
        if (!menuClose) {
            setMenuClose(true)
            setSearch(false);
        } else {
            setMenuClose(false);
            
        }
    }

    const handleSearchBar = () => {
        if (!search) {
            setSearch(true)
            setMenuClose(false);
        } else {
            setSearch(false);
           
        }
    }


    const searchItem = () =>{
        alert("hello")
    }
    return (
        <>
            <div className='absolute right-0 left-0 bg-[rgba(32,32,32,0.86)] backdrop-blur-sm backdrop-saturate-100 w-[100%] h-10 flex text-white items-center justify-between py-8 '>
                <div className='text-3xl xl:ml-10 lg:ml-10 md:ml-10 sm:ml-6 ml-4' onClick={() => handleMenuBar()}>
                    {!menuClose ? <FaBarsStaggered className='text-4xl rotate-10 hover:rotate-180 delay-100 ease-in-out' /> : <div><CgClose className='text-4xl transition-all hover:rotate-180 delay-200 ease-in-out' /> </div>}
                </div>
                <div className='' >
                    <h1 className='drop-shadow-2xl tracking-wider xl:text-3xl lg:text-3xl md:text-text-2xl sm:text-3xl text-xl ml-[80px] italic text-center'>
                        DP-Jewellery
                    </h1>
                </div>
                <div className='xl:text-3xl lg:text-3xl md:text-2xl sm:text-2xl text-3xl flex xl:mr-10 lg:mr-10 md:mr-10 sm:mr-6 mr-2'>
                    <IoSearchOutline className='cursor-pointer ' onClick={() => handleSearchBar()} />
                    <BsHandbag className='cursor-pointer md:mx-5 sm:mx-8 mx-3' />
                    <CiUser className='cursor-pointer' />
                </div>
            </div>
            {menuClose ? <div className='z-10 absolute top-24 w-[100%] h-[84.4vh] bg-[rgba(32,32,32,0.81)] backdrop-blur-sm backdrop-saturate-100  flex items-center justify-center text-white text-2xl'>
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




            {search ? <div className='z-100 absolute left-0 top-24 w-[100%] h-[84.4vh] bg-[rgba(80,79,79,0.73)] backdrop-blur-sm backdrop-saturate-100  flex items-center justify-center text-white text-2xl'>
                <input type="text" 
                className='text-white w-[40%] h-14 mb-12 bg-[transparent] rounded-l-full backdrop-blur-sm backdrop-saturate-100 outline-none shadow-2xl shadow-black text-center  border border-r-[transparent] ' 
                  placeholder='Search products '
                  />
                <button onClick={searchItem} className='w-[10%] h-14 mb-12 bg-[rgba(49,48,48,0.88)] rounded-r-full backdrop-blur-sm backdrop-saturate-100 shadow-black outline-none shadow-2xl text-center ' >Search</button>
            </div> :
                <> </>
            }
        </>
    )
}

export default Navbar
