  import React, { useRef, useState } from 'react';
  import Image from 'next/image';
  import Testimonialscontent from '@/component/Home/testimonials/Testimonialcontent';
  import quote from '../../../../public/Images/Home/Testimonial/quoat.png'


  // Import Swiper React components
 import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


  export default function App() {
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 3
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
    return (
      <>
      <div className='px-[24px] md:px-20 py-4 relative'>
        <h3 className='font-coromont text-[30px] md:text-[35px] xl:text-[45px] mb-2 md:mb-8 leading-[1.3em] md:leading-[1.2em] text-center' >What My <span className='text-[#C48F56]'>Client</span> Says <br className='flex md:hidden'/> About Me.</h3>
        
          <Carousel responsive={responsive} rewind={true} autoPlay={true}
          containerClass='mx-[-20px]'
          className=''
           >
            {Testimonialscontent.map((test)=>{
              return(
                <div key={test.id} className='flex flex-col items-center justify-center mx-[10px] px-[20px] md:px-[55px] text-center py-[25px] md:py-[50px] rounded-md border bg-gold/[0.2] border-gold/[0.2] min-h-[360px]'>
                  <Image src={quote} alt={quote} width={200} className='absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[-2] opacity-[0.2]'/>
                  <p>{test.content}</p>
                  <div className='flex items-center justify-center mt-10 gap-3'>
                    {/* <p className='text-[18px] font-medium'>{test.clientprofile}</p> */}
                    <p>{test.clientname}</p>
                  </div>
                  
                </div>
              )
            })}
          </Carousel>
      </div>
      </>
    );
  }
