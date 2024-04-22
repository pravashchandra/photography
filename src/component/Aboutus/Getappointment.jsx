import React from 'react';
import Link from 'next/link';

const Getappointment = () => {
  return (
    <>
      <div className='w-full px-[24px] md:px-20 py-[0px] pb-[50px] md:pb-[100px] mx-auto flex flex-col items-center justify-center text-center'>
      <h2 className='font-coromont text-[30px] md:text-[35px] xl:text-[45px] mb-2'>Get Appointment</h2>
        <div className='flex mt-[30px] space-x-4 md:space-x-10 '>
        <Link href="/contact" className="relative flex h-[45px] md:h-[40px] lg:h-[45px] w-[150px] md:w-[140px] lg:w-[170px] items-center justify-center overflow-hidden bg-transpernt text-gold font-josefin uppercase text-[13px] tracking-[1px] border border-gold transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-gold hover:text-white hover:border-gold before:duration-500 before:ease-out  hover:before:h-56 hover:before:w-56" data-aos ='fade' data-aos-once="true" >
          <span className="relative z-10">Get Quote</span>
        </Link>
        <a href="https://api.whatsapp.com/send?phone=8984103719" target="_blank" className="relative flex h-[45px] md:h-[40px] lg:h-[45px] w-[150px] md:w-[140px] lg:w-[170px] items-center justify-center overflow-hidden bg-transpernt text-gold font-josefin uppercase text-[13px] tracking-[1px] border border-gold transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-gold hover:text-white hover:border-gold before:duration-500 before:ease-out  hover:before:h-56 hover:before:w-56" data-aos ='fade' data-aos-once="true" >
          <span className="relative z-10">Whatsapp</span>
        </a>
        </div>
      </div>
    </>
  )
}

export default Getappointment
