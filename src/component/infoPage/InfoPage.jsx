import React, { useEffect } from 'react'
import logo from '../../assets/AMSBIG.COM LOGO.jpg'

const InfoPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <>
      <div className='w-full h-[85vh] mt-3 bg-gray-200'>

        <div className='text-center pt-10 text-[6vmin] font-bold textShadow'>For more Enquiry</div>
        <div className='mx-auto w-80 h-[3px] bg-black pt-0 text-[6vmin] font-bold textShadow'></div>

        <div className='mt-10 flex items-start justify-center flex-wrap'>
          <div>
            <img src={logo} className='w-80 h-60' alt="logo" />
          </div>
          <div className='ml-5 mt-5'>
            <p className='text-2xl'> <span className='font-bold text-3xl'>Call:</span> 91-1234567890</p>
            <p className='text-2xl'><span className='font-bold text-3xl' >Email:</span> Example@text.com</p>
            <p className='text-2xl mt-6 '>
              <span className='text-3xl font-bold'>Address: </span>28/540,<br/>
              Govind Nagar, Auriya - 206122
            </p>

          </div>
        </div>
      </div>
    </>
  )
}

export default InfoPage
