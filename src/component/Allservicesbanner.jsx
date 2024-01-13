import React, {useEffect} from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Allservicesbanner = ({bgImage,mobBgImage, title, button}) => {
  useEffect(() => {
    Aos.init();
  }, [])

  return (
    <>
      <div className='justify-center items-center' data-aos ='fade' data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" data-aos-once="true">
            <div className='relative w-[100%]'>
                <Image src={bgImage}
                alt='Servicebanner'
                className='w-auto h-auto object-cover hidden md:flex'
                />
                <Image src={mobBgImage}
                alt='Service Banner'
                className='w-[100%] object-cover h-[650px] flex md:hidden'
                />
                <div className='absolute top-[45%] left-[50%] translate-x-[-50%] flex flex-col justify-center text-center mx-auto w-[100%]'>
                    <h1 className='text-white text-[32px] md:text-[35px] xl:text-[38px] font-coromont tracking-[2px] leading-[1.3em] md:leading-[1.6em]'>{title}</h1>                      
                    <Link href="/contact" className='relative flex h-[35px] md:h-[45px] w-[130px] md:w-[160px] mx-auto mt-[30px] items-center justify-center overflow-hidden bg-transprent text-white font-josefin uppercase text-[12px] md:text-[15px] tracking-[1px] border border-white shadow-md transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-gold hover:text-white hover:border-gold before:duration-500 before:ease-out hover:shadow-gold-600 hover:before:h-56 hover:before:w-56'>
                      <span className="relative z-10">{button}</span>
                    </Link>
                </div>
                
            </div>
        </div>
    </>
  )
}

export default Allservicesbanner
