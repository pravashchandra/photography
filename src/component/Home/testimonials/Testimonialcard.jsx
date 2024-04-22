  import React, { useRef, useState } from 'react';
  import Image from 'next/image';
  import Testimonialscontent from '@/component/Home/testimonials/Testimonialcontent';
  import quote from '../../../../public/Images/Home/Testimonial/quoat.png'


  // Import Swiper React components
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FiChevronLeft } from 'react-icons/fi';
import { BiChevronRight } from 'react-icons/bi';


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
    const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
      const { carouselState: { currentSlide } } = rest;
      return (
          <div className="carousel-button-group gap-4 flex justify-end mt-4 md:mt-0 md:mb-4 
          items-center w-full">
            <button className='block p-1 rounded-full bg-gold text-white text-[25px]' onClick={() => 
            previous()}> <FiChevronLeft /></button>
            <button onClick={() => next()}><span className='block p-1 rounded-full bg-gold text-white text-[25px]' ><BiChevronRight /></span></button>
         </div>
      
       );
     };
    return (
      <>
      <h3 className='font-coromont text-[28px] md:text-[32px] lg:text-[35px] xl:text-[45px] mb-0 md:-mb-8 leading-[1.3em] md:leading-[1.2em] text-center xl:pt-[20px]' >What My <span className='text-[#C48F56]'>Client</span> Says <br className='flex md:hidden'/> About Me.</h3>
      <div className='px-[24px] md:px-[24px] xl:px-20 py-4 relative md:flex md:flex-col-reverse '>
        
          <Carousel
          responsive={responsive} arrows={false} renderButtonGroupOutside={true} customButtonGroup={<ButtonGroup />}
            rewindWithAnimation={true}
            swipeable={true}
            renderDotsOutside={true}
            rewind={true} 
            infinite
            autoPlay={true}
            containerClass='mx-[-10px] md:mx-[-10px]'
            className=''
           >
            {Testimonialscontent.map((test)=>{
              return(
                <div key={test.id} className='flex flex-col items-center justify-center mx-[10px] px-[20px] md:px-[55px] text-center py-[10px] md:py-[50px] rounded-md border bg-gold/[0.2] border-gold/[0.2] min-h-[320px] md:min-h-[360px]'>
                  <Image src={quote} alt={quote} width={180} className='absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[-2] opacity-[0.2]'/>
                  <p className='text-[16px] md:text-[15px] xl:text-[16.5px] font-josefin'>{test.content}</p>
                  <div className='flex items-center justify-center mt-10 gap-3'>
                    {/* <p className='text-[18px] font-medium'>{test.clientprofile}</p> */}
                    <p className='text-[15px] md:text-[14px] xl:text-[16px]'>{test.clientname}</p>
                  </div>
                  
                </div>
              )
            })}
          </Carousel>
      </div>
      </>
    );
  }
