import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { PiWhatsappLogoThin } from "react-icons/pi";

const Footer = () => {
    return (
        <>

            <div className='w-full h-[fit-content] flex justify-around items-center flex-wrap py-20'>
                <div className='xl:w-64 lg:w-64 md:w-64 sm:w-[40%] w-[40%] ml-8 mb-2'>
                    <h1 className='text-xl font-bold'> Quick Links</h1>
                    <ul className='mt-5'>
                        <li className='my-3'>
                            <a href="/">About Us</a>
                        </li>
                        <li className='my-3'>
                            <a href="/"> Terms and Conditions</a>
                        </li>
                        <li className='my-3'>
                            <a href="/">  Privacy Policy</a>
                        </li>
                        <li className='my-3'>
                            <a href="/">Contact Us</a>
                        </li>
                        <li className='my-3'>
                            <a href="/"> Return/Refund Policy</a>
                        </li>
                        <li className='my-3'>
                            <a href="/">Terms of Service</a>
                        </li>
                    </ul>
                </div>
                <div className='xl:w-60 lg:w-60 md:w-60 sm:[40%] w-[40%] mb-2'>
                    <h1 className='text-xl font-bold'> Our Products</h1>
                    <ul className='mt-5'>
                        <li  className='my-3'>
                            <a href="/">Bracelets</a>
                        </li>
                        <li  className='my-3'>
                            <a href="/"> Earrings</a>
                        </li>
                        <li  className='my-3'>
                            <a href="/">Rings</a>
                        </li>
                        <li  className='my-3'>
                            <a href="/">Necklace</a>
                        </li>
                        <li  className='my-3'>
                            <a href="/">Chains</a>
                        </li>
                        <li  className='my-3'>
                            <a href="/">Nosepins</a>
                        </li>
                    </ul>
                </div>

                <div className='xl:w-64 lg:w-64 md:w-64 sm:[80%] w-[80%] xl:mb-20 lg:mb-20 md:mb-20 sm:mb-5 mb-5'>
                    <h1 className='text-xl font-bold'> Contact us</h1>
                    <div className='mt-5'>
                        <p className='text-lg'>
                            <span className='font-bold tracking-wide'>Address: </span>ABC Complex,
                            Noida Sector-62,Uttar Predesh 201301
                        </p>
                        <p>
                            <span className='font-bold text-lg'>Contact: +91-123467890</span>
                        </p>
                        <p>
                            <span className='font-bold text-lg'>Email:abc@gmail.com</span>
                        </p>
                    </div>
                </div>

                <div className='xl:w-72 lg:w-72 md:w-72 sm:[80%] w-[80%]'>
                    <h1 className='text-xl font-bold '> Newsletter</h1>
                  <p className='mt-5 tracking-wide'>  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, quisquam? Eos esse sequi distinctio nam?</p>
                    <div className='my-2'>
                        <input className='border outline-none pl-2 px-6 py-2' type="text" name="" id="" />
                        <button className='bg-black text-[#fff] px-6 py-2'>join</button>
                    </div>
                    <div className='flex mt-6'>
                        <FaFacebookF className='text-blue-600 text-3xl' />
                        <FaInstagram className='mx-4 text-pink-800 text-4xl' />
                        <PiWhatsappLogoThin  className='text-green-800 text-4xl'/>

                    </div>
                </div>
            </div>
            <div className='bg-black text-center py-4 text-white tracking-wide'>Copyright © All Right Reserved || ds.Patel</div>
        </>
    )
}

export default Footer
