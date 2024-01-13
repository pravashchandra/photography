import React, {useEffect} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Aos from 'aos';
import 'aos/dist/aos.css'
import Sliderdata from './Sliderdata';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';
import { Navigation, Autoplay, Pagination} from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const Slider = () => {
  useEffect(() => {
    Aos.init();
  }, [])
  return (
    
    <div className=''>
      <Swiper
      style={{
        '--swiper-navigation-color': '#DDD187',
        '--swiper-pagination-color': '#DDD187',
      }}
      pagination={{
        dynamicBullets: true,
      }}
      className="mySwiper"
      loop={true}
      rewind={true}
      spaceBetween={50}
      centeredSlides={true}
      slidesPerView={1}
      navigation={false}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      effect={'fade'}
      modules={[EffectFade, Autoplay, Navigation, Pagination]}
    >
    <div data-aos ='fade' data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" data-aos-once="true">
    {Sliderdata?.map((data)=>{
        return (
          
                <SwiperSlide className='justify-center items-center' key={data?.id}>
                    <div className='relative' >
                        <Image src={data?.bannerImage} alt='Wedding' className='hidden md:flex md:h-[430px] xl:h-[100%] object-cover' priority="true" />
                        <Image src={data?.mobbannerImage} alt='Wedding' className='md:hidden w-[400px] h-[750px] md:h-[100%] object-cover'/>
                        
                        <div className='absolute left-[50%] md:left-[0%] translate-x-[-50%] md:translate-x-[0%] top-[20%] md:top-[40%] text-center md:text-left flex flex-col justify-center px-[0px] md:px-[24px] lg:px-20 uppercase'>
                            {/* <h6 className='text-[#DDD187] font-josefin font-[300] text-[16px] tracking-[1px] md:tracking-[3px] mb-4 '>{slider.bannersubcontent}</h6> */}
                            <h1 className='text-white text-[25px] md:text-[25px] lg:text-[42px] xl:text-[42px] w-[100%] md:w-[60%] font-coromont tracking-[2px] leading-[1.4em] md:leading-[1.6em] mb-6'>{data?.bannercontent}</h1>
                            <div className='mt-[0px] md:mt-2 lg:mt-8 m-auto md:ml-0'>
                                <Link href="/contact" className='relative flex h-[35px] md:h-[38px] lg:h-[45px] w-[130px] md:w-[140px] lg:w-[160px] items-center justify-center overflow-hidden bg-transprent text-white font-josefin uppercase text-[12px] md:text-[13px] lg:text-[15px] tracking-[1px] border border-white shadow-md transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-gold hover:text-white hover:border-gold before:duration-500 before:ease-out hover:shadow-gold-600 hover:before:h-56 hover:before:w-56'>
                                    <span className="relative z-10">{data?.bannerurl}</span>
                                </Link>
                             </div>
                        </div>
                    </div>
                </SwiperSlide>
            
        )
    })}   
    </div>
    </Swiper>
    </div>
  )
}

export default Slider
