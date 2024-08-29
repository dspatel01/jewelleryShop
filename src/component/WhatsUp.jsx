import React from 'react'
import './custom.css'
import { FaWhatsapp } from "react-icons/fa";

const WhatsUp = () => {

    return (
        <>
            <a href="https://wa.me/91XXXXXXXXXX?text-Hello how can i help you" >
                <div className='whatsupAnimation w-16 h-16 fixed bottom-10 right-0 z-10 cursor-pointer shadow-xl flex items-center justify-center rounded-full bg-green-500'>
                    <FaWhatsapp className='text-6xl m-3 rounded-full text-white z-10' />
                </div>
            </a>

        </>
    )
}

export default WhatsUp
