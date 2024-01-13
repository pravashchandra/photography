import React, {useEffect} from 'react';
import Image from 'next/image';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Gallery = ({items}) => {
  useEffect(() => {
    Aos.init();
  }, [])
  const { leftimage1, leftimage2,leftimage3, leftimage4, centerimage, leftimage5, leftimage6, leftimage7, leftimage8} = items
  
  return (
    <>
      <div className='w-[100%] pt-[25px] xl:pt-[20px] px-[24px] xl:px-20 pb-[50px] xl:pb-[60px] flex items-center justify-center'>
        <div className='space-y-4 items-center flex-col'>
          {/* <h2 className='font-tangerine text-[38px] text-center'>{title}</h2> */}
         
                <div className='w-[100%] grid grid-col-1 xl:grid-cols-3 gap-[1.5%] '>
                  {/* ---------------------------- Left Image -------------------------------------- */}
                  <div className='grid grid-cols-2 gap-[4%] '>
                    <div className='grid grid-cols-1 gap-[4%] '>
                      <Image src={leftimage1}   alt='img_1' className='w-[100%] h-[100%] object-cover rounded-md' data-aos='zoom-in' data-aos-delay="100" />
                      <Image src={leftimage2} alt='img_1' className='w-[100%] h-[100%] object-cover rounded-md'  data-aos='zoom-in'  data-aos-delay="100"x /> 
                    </div>

                    <div className='grid grid-cols-1 gap-[4%]'>
                      <Image src={leftimage3} alt='img_1' className='w-[100%] h-[100%] object-cover rounded-md' data-aos='zoom-in' data-aos-delay="100" />
                      <Image src={leftimage4} alt='img_1' className='w-[100%] h-[100%] object-cover rounded-md' data-aos='zoom-in' data-aos-delay="100" />
                    </div>
                  </div>

                  {/* ---------------------------- Center Image -------------------------------------- */}

                  <div className='hidden md:flex'>
                    <Image src={centerimage} alt='img_1' className='w-[100%] h-[100%] object-cover rounded-md'  data-aos='zoom-in' data-aos-delay="100" />
                  </div>

                {/* ---------------------------- Right Image -------------------------------------- */}
                  <div className='grid grid-cols-2 gap-[4%] mt-4 md:mt-0'>
                    <div className='grid grid-cols-1 gap-[4%]'>
                      <Image src={leftimage5}  alt='img_1' className='w-[100%] h-[100%] object-cover rounded-md' data-aos='zoom-in' data-aos-delay="100" />
                      <Image src={leftimage6}  alt='img_1' className='w-[100%] h-[100%] object-cover rounded-md' data-aos='zoom-in' data-aos-delay="100" />
                    </div>

                    <div className='grid grid-cols-1 gap-[4%]'>
                      <Image src={leftimage7} alt='img_1'className='w-[100%] h-[100%] object-cover rounded-md' data-aos='zoom-in' data-aos-delay="100" />
                      <Image src={leftimage8} alt='img_1' className='w-[100%] h-[100%] object-cover rounded-md' data-aos='zoom-in' data-aos-delay="100" />
                    </div>
                  </div>
                </div>
            
        </div>
      </div>
      
    </>
  )
}

export default Gallery
