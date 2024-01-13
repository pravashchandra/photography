import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const AllPageBanner = ({title, description, button, bgImage, mobBgImage}) => {
  return (
    <>
        <div className='justify-center' data-aos ='fade' data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" data-aos-once="true" >
            <div className='relative w-[100%]'>
                <Image src={bgImage}
                alt='Service Banner'
                className='w-[100%] h-[550px] object-cover hidden md:flex'
                />
                <Image src={mobBgImage}
                alt='Service Banner'
                className='w-[100%] object-cover h-[650px] flex md:hidden'
                />

                <div className='absolute top-[30%] md:top-[40%] left-[50%] translate-x-[-50%] w-[100%] text-center md:text-left flex flex-col justify-center px-[24px] md:px-20  uppercase'>
                    <h1 className='text-white text-[30px] md:text-[35px] xl:text-[38px] font-coromont tracking-[2px] leading-[1em] md:leading-[1.6em]'>{title}</h1>
                    {/* <p className='text-[white] text-[15px] md:text-[16px] lg:text-[17px]'>{description}</p> */}
                    <div className='mt-[30px] mx-auto md:ml-0'>
                        <Link href="/contact" className='relative flex h-[35px] md:h-[45px] w-[130px] md:w-[160px] items-center justify-center overflow-hidden bg-transprent text-white font-josefin uppercase text-[12px] md:text-[15px] tracking-[1px] border border-white shadow-md transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-gold hover:text-white hover:border-gold before:duration-500 before:ease-out hover:shadow-gold-600 hover:before:h-56 hover:before:w-56'>
                            <span className="relative z-10">{button}</span>
                        </Link>
                    </div>
                </div>
                
            </div>
        </div>
    </>
  )
}

export default AllPageBanner
