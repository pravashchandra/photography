import React from 'react'
import Head from 'next/head';
import Link from 'next/link';
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
    <Head>
          <title>
            Contact Us | Best Birthday Photography in Bangalore 
          </title>
          <meta
            name="description"
            content="Get in touch with us for the finest birthday photography services in Bangalore! At Pradosh Photography, we specialize in capturing the joyous moments of your special day. Contact us to discuss your requirements and let our skilled team turn your birthday celebration into a collection of beautiful memories. Reach out now for personalized and professional birthday photography services in Bangalore."
            key="desc"
          />
      </Head>
    {/* Conatct Page Banner Starts Here */}
    <AllPageBanner 
      title="Contact Us"
      button="Contact Us"
      bgImage='https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707654557/Contact/Contact_bannerr_hhwzjt.png'
      mobBgImage='https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707654557/Contact/Contact_Mob_Bannerr_sbiypm.png'
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
          <span className='text-[16px] lg:text-[17px]'>+91 8984103719</span>
          </Link>
        </div>
        {/* Call Icons with Number Ends here */}

        {/* Email Icons with Number starts here */}
        <div className='flex items-center gap-6 mt-[30px] md:mt-[50px]'>
          <div className='bg-gold text-white w-[40px] md:w-[50px] h-[40px] md:h-[50px] rounded-full flex items-center justify-center'>
            <MdEmail className='text-white text-[20px] md:text-[25px] bg-gold'/>
            
          </div>
          <Link href='mailto:info@pradoshphotography.com' className='md:tracking-[0.7px]'>
          <span className='text-[16px] lg:text-[17px]'>info@pradoshphotography.com</span>
          </Link>
        </div>
        {/* Email Icons with Number Ends here */}

        {/* Address Icons with Number starts here */}
        <div className='flex items-center gap-6 mt-[30px] md:mt-[50px]'>
          <div className='bg-gold text-white w-[40px] md:w-[50px] h-[40px] md:h-[50px] rounded-full flex items-center justify-center'>
          <IoLocation  className='text-white text-[20px] md:text-[25px] bg-gold'/>
            
          </div>
          <Link href='/' className='md:tracking-[0.7px]'>
            <span className='text-[16px] lg:text-[17px]'>Marathali, Bangalore</span>
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
