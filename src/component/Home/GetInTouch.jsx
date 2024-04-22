import React from 'react'
import ContactForm from '../Contact/ContactForm'
import Link from 'next/link';
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaFacebook } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";

const GetInTouch = () => {
  return (
    <>
      <div className='w-full px-[24px] xl:px-20 pt-[50px] xl:pt-[60px] pb-[70px] md:flex gap-[60px]'>
        <div className='w-[100%] md:w-[50%] items-center'>
          <h2 className='font-coromont text-[28px] md:text-[32px] lg:text-[35px] xl:text-[45px] text-center md:text-left'>Get In Touch</h2>
          <p className='text-[15px] lg:text-[17px] xl:text-[18px] font-josefin mb-[15px] md:mb-[30px] xl:mb-[50px] w-[100%] md:w-[90%] text-center md:text-left px-[15px] md:px-[0px]'>
          Let’s embark on a creative journey together, turning your moments into cherished memories that will last a lifetime.
          </p>
          <h3 className=' text-[19px] md:text-[20px] xl:text-[20px] mt-6 mb-4 font-coromont text-center md:text-left'>Follow us on</h3>
            <div className='flex justify-center md:justify-normal text-[23px] space-x-6 text-gold '>
              <a href='https://www.instagram.com/proweddingstories85/' target='_blank'>
                <PiInstagramLogoFill className='text-[26.2px] mt-[-1px]' />
              </a> 

              <Link href='/' >
                <FaFacebook />
              </Link> 

              <a href="https://api.whatsapp.com/send?phone=8984103719" target="_blank" >
                <RiWhatsappFill />
              </a> 
             
            </div>
          
        </div>

        <div className='w-[100%] md:w-[50%] px-[20px] xl:px-10 py-10 xl:py-10 mt-[30px] md:mt-0 bg-[#FFECD8]'>
          <ContactForm />
        </div>
      </div>
    </>
  )
}

export default GetInTouch
