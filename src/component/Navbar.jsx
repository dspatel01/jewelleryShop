import { FaBarsStaggered } from "react-icons/fa6";
import { CgClose } from "react-icons/cg";
import { Link, NavLink} from 'react-router-dom';
import logo from '../assets/AMSBIG.COM LOGO1.png'
import { useState } from "react";




const Navbar = () => {

    const [menuClose, setMenuClose] = useState(false)
    const [search, setSearch] = useState(false)
    const [searchProduct, setSearchProduct] = useState('')

    const handleMenuBar = () => {
        if (!menuClose) {
            setMenuClose(true)
            setSearch(false);
        } else {
            setMenuClose(false);
        }
    }

    const closeMobilemenu = () => {
        setMenuClose(false);
    }

    const searchItem = () => {
        alert(searchProduct)
    }


    return (
        <>
            <div className='sticky top-0 right-0 left-0 bg-[rgb(17,17,17)] backdrop-blur-sm backdrop-saturate-100 w-[100%] h-10 flex text-white items-center justify-between py-8 z-10'>

                <div className='ml-[4%] text-center'>
                    <Link to='/'><img src={logo} alt={logo} className="w-[100px] h-12" /></Link>
                </div>

                <div className='' >
                    {/* <div className='ml-[80px] text-center'>
                        <Link to='/'><img src={logo} alt={logo} className="w-[150px] h-16" /></Link>
                    </div> */}
                </div>
                <div className='xl:text-3xl lg:text-3xl md:text-2xl sm:text-2xl text-3xl flex xl:mr-10 lg:mr-10 md:mr-10 sm:mr-6 mr-2'>
                    {/* <IoSearchOutline className='cursor-pointer ' onClick={() => handleSearchBar()} />
                    <BsHandbag className='cursor-pointer md:mx-5 sm:mx-8 mx-3' onClick={() => handleCart()} />

                    {!userDatails ? <div className='cursor-pointer text-xl' onClick={handleProfile}>Login</div> : <div className='w-10 h-10 border rounded-full border-white'>
                        <CiUser className='cursor-pointer mx-auto my-1' onClick={() => handleProfileModel()} />
                    </div>} */}

                    {/* profile Model */}
                    {/* {
                        profilePage ? <div className='w-60 h-60 bg-[#000000de] absolute top-16 right-0'>
                            <p className='text-lg capitalize mt-2 '>{userDatails.username}</p>


                            <div className='w-full absolute bottom-1 text-center text-xl'>
                                <hr />
                                <div className='cursor-pointer' onClick={() => handleLogout()}>Logout</div>
                            </div>
                        </div> : <></>
                    } */}
                    <div className='text-[6vmin] xl:ml-10 lg:ml-10 md:ml-10 sm:ml-6 ml-4 mr-4 ' onClick={() => handleMenuBar()}>
                        {!menuClose ? <FaBarsStaggered className=' rotate-10 hover:rotate-180 delay-100 ease-in-out' /> : <div><CgClose className=' transition-all hover:rotate-180 delay-200 ease-in-out' /> </div>}
                    </div>
                </div>
            </div>
            {menuClose ? <div className='z-10 sticky top-16 w-[100%] xl:h-[12vh] lg:h-[12vh] md:h-[12vh] sm:h-[84.5vh] h-[84.5vh]  bg-[rgba(32,32,32,0.81)] backdrop-blur-sm backdrop-saturate-100  flex items-center justify-center text-white text-2xl'>
                <ul className='w-[80%] flex items-center justify-around xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col'>
                    <li className='hover:text-black hover:scale-125 ease-in-out xl:mx-0 lg:mb-0 md:mb-0 sm:mb-5 mb-5' onClick={closeMobilemenu}>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li className='hover:text-black hover:scale-125 ease-in-out xl:mx-0 lg:mb-0 md:mb-0 sm:mb-5 mb-5'>
                        <a href="/">Earrings</a>
                    </li>
                    <li className='hover:text-black hover:scale-125 ease-in-out xl:mx-0 lg:mb-0 md:mb-0 sm:mb-5 mb-5'>
                        <a href="/">Necklace</a>
                    </li>
                    <li className='hover:text-black hover:scale-125 ease-in-out xl:mx-0 lg:mb-0 md:mb-0 sm:mb-5 mb-5'>
                        <a href="/">Bracelets</a>
                    </li>
                    <li className='hover:text-black hover:scale-125 ease-in-out xl:mx-0 lg:mb-0 md:mb-0 sm:mb-5 mb-5'>
                        <a href="/">Ring</a>
                    </li>
                    <li className='hover:text-black hover:scale-125 ease-in-out xl:mx-0 lg:mb-0 md:mb-0 sm:mb-5 mb-5'>
                        <a href="/">NosePin</a>
                    </li>
                </ul>
            </div> : <> </>
            }







            {search ? <div className='z-100 absolute left-0 top-24 w-[100%] h-[12vh] bg-[rgba(5,5,5,0.99)] backdrop-blur-sm backdrop-saturate-100  flex items-center justify-center text-white xl:text-2xl lg:text-2xl md:text-2xl sm:text-xl text-xl '>
                <input type="text"
                    className='text-white xl:w-[40%] lg:w-[40%] md:w-[40%] sm:w-[70%] w-[70%] xl:h-14 lg:h-14 md:h-14 sm:h-12 h-12 bg-[transparent] rounded-l-full backdrop-blur-sm backdrop-saturate-100 outline-none shadow-2xl shadow-black text-center  border border-r-[transparent]'
                    placeholder='Search products'

                    onChange={(e) => setSearchProduct(e.target.value)}
                />
                <button onClick={searchItem} className='xl:w-[10%] lg:w-[10%] md:w-[10%] sm:w-[20%] w-[20%] xl:h-14 lg:h-14 md:h-14 sm:h-12 h-12 bg-[rgba(49,48,48,0.88)] rounded-r-full backdrop-blur-sm backdrop-saturate-100 shadow-black outline-none shadow-2xl text-center border-l-[transparent] border'>Search</button>
                <div className='absolute right-5' onClick={() => setSearch(false)}>x</div>
            </div> :
                <> </>
            }
        </>
    )
}

export default Navbar
