import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import ContactBanner from "../../public/Images/Contact/Contact_banner.png"
import ContactMObBanner from "../../public/Images/Contact/Contact_mobile.png"
import AllPageBanner from '@/component/AllPageBanner';
import ContactForm from '@/component/Contact/ContactForm';
import { MdCall, MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";

const initialValues = {
  name: "",
  mobile: "",
  email: "",
  message: "",

};

const Contact = () => {
  return (
    <>
    {/* Conatct Page Banner Starts Here */}
    <AllPageBanner 
      title="Contact Us"
      description="This is the contact us page"
      button="Contact Us"
      bgImage={ContactBanner}
      mobBgImage={ContactMObBanner}
    />
    {/* Conatct Page Banner Ends Here */}



    <div className='md:flex w-full px-[24px] md:px-20 py-[30px] md:py-20 justify-between gap-20'>

      <div className='flex flex-col md:w-[55%] justify-center'>
        <h2 className='text-[25px] md:text-[35px] xl:text-[30px] w-[100%] md:w-[60%] font-coromont tracking-[2px] leading-[1.4em] md:leading-[1.6em] mb-6'>Get in touch</h2>
        
        {/* Call Icons with Number starts here */}
        <div className='flex items-center gap-6'>
          <div className='bg-gold text-white w-[40px] md:w-[50px] h-[40px] md:h-[50px] rounded-full flex items-center justify-center'>
            <MdCall className='text-white text-[20px] md:text-[25px] bg-gold'/>
            
          </div>
          <Link href='tel:8984103719' className='md:tracking-[0.7px]'>
            <span>+91 8984103719</span>
          </Link>
        </div>
        {/* Call Icons with Number Ends here */}

        {/* Email Icons with Number starts here */}
        <div className='flex items-center gap-6 mt-[30px] md:mt-[50px]'>
          <div className='bg-gold text-white w-[40px] md:w-[50px] h-[40px] md:h-[50px] rounded-full flex items-center justify-center'>
            <MdEmail className='text-white text-[20px] md:text-[25px] bg-gold'/>
            
          </div>
          <Link href='mailto:info@pradoshphotography.com' className='md:tracking-[0.7px]'>
            <span>info@pradoshphotography.com</span>
          </Link>
        </div>
        {/* Email Icons with Number Ends here */}

        {/* Address Icons with Number starts here */}
        <div className='flex items-center gap-6 mt-[30px] md:mt-[50px]'>
          <div className='bg-gold text-white w-[40px] md:w-[50px] h-[40px] md:h-[50px] rounded-full flex items-center justify-center'>
          <IoLocation  className='text-white text-[20px] md:text-[25px] bg-gold'/>
            
          </div>
          <Link href='/' className='md:tracking-[0.7px]'>
            <span>Marathali, Bangalore</span>
          </Link>
        </div>
        {/* Address Icons with Number Ends here */}

      </div>

      
      <div className='md:w-[45%] bg-[#FFECD8] shadow-sm px-[15px] md:px-10 py-[25px] md:py-10 border rounded-lg mt-[50px] md:mt-[0px]'>
        <h2 className='text-[22px] md:text-[35px] xl:text-[30px] w-[100%] md:w-[60%] font-coromont tracking-[2px] leading-[1.4em] md:leading-[1.6em] mb-6'>Fill the form</h2>
        <ContactForm />
      </div>

      
    </div>
  </>
  )
  }
export default Contact
