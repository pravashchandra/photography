import React from 'react';
import Card from './Card';
import Link from 'next/link';
import Servicesdata from './Servicesdata';

const Ourservices = (val) => {

  return (
    <>
    <div className='pb-[70px]' >
    <div className='w-[100%] pt-[50px] xl:pt-[60px] flex m-auto justify-center px-[24px] xl:px-20'>
        <h2 className='font-coromont text-[30px] md:text-[38px] xl:text-[45px] mb-5 leading-[1.3em] md:leading-[1.6em] text-center'>What Service <span className='text-[#C48F56] '>We Are Providing</span></h2>
      </div>
      
      <div className='grid grid-cols-3 md:grid-cols-6 px-[24px] xl:px-20 gap-3 md:gap-4 mt-[10px] md:mt-[20px]'>
        {
          Servicesdata.map((service) =>{
            return (
              <Card key={service.id} service={service}/>
            )
          })
        }
      </div> 
      <div className='w-[100%] flex m-auto justify-center mt-[50px]'>  
        <Link href="/gallery" className="relative flex h-[45px] w-48 items-center justify-center overflow-hidden bg-white text-black font-josefin uppercase text-[13px] tracking-[1px] border border-black shadow-md transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-gold hover:text-white hover:border-gold before:duration-500 before:ease-out hover:shadow-gold-600 hover:before:h-56 hover:before:w-56">
          <span className="relative z-10">See All Services</span>
        </Link>
      </div>
    </div>
      
    </>   
  )
}
export default Ourservices
