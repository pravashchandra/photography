import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Aos from 'aos';
import 'aos/dist/aos.css'
import profileimg from "../../../public/Images/Home/profile.png";


const AboutMe = () => {
  useEffect(() => {
    Aos.init();
  }, [])
  
  return (
    <>
      <div className='w-[100%] px-[24px] xl:px-20 pt-[50px] xl:pt-[70px] md:flex bg-[#FFECD8]' >
        <div className='w-[100%] md:w-[50%] xl:w-[50%] items-center md:pb-[50px] lg:pb-[0px]'>
          <h5 className='text-[#C48F56] text-[19px] lg:text-[25px] font-tangerian font-[700] mb-1 tracking-[2px]' data-aos ='fade' data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" data-aos-once="true">About Me</h5>
          <h2 className='font-coromont text-[30px] md:text-[28px] lg:text-[35px] xl:text-[48px] mb-2 md:mb-2 leading-[1.3em] md:leading-[1.2em]' data-aos ='fade' data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" data-aos-once="true" >My name is <span className='text-[#C48F56]'>Pradosh.</span></h2>
          <p className='text-[15px] md:text-[14px] xl:text-[16px] mb-[30px] md:mb-[30px] lg:mb-[40px] leading-[1.6em]' data-aos ='fade' data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"  data-aos-once="true">
          In our country, most people take up a course in engineering and then, figure out what to do in life. Well, I went through a similar process. When I was in the final year of my B.Tech course, I stumbled upon some well-shot pictures posted by a friend of mine on Facebook. Madhu, my friend, and I had connected through Facebook and he happened to be a fashion photographer based in Mumbai. I went through some of his pictures posted on his Facebook account and was highly inspired by the quality of work he had put across......
          </p>
          <Link href="/about" className="relative flex h-[45px] md:h-[40px] lg:h-[45px] w-[170px] md:w-[140px] lg:w-[170px] items-center justify-center overflow-hidden bg-transpernt text-gold font-josefin uppercase text-[13px] tracking-[1px] border border-gold shadow-sm transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-gold hover:text-white hover:border-gold before:duration-500 before:ease-out hover:shadow-gold-600 hover:before:h-56 hover:before:w-56" data-aos ='fade' data-aos-once="true" >
          <span className="relative z-10">See More</span>
        </Link>
        </div>

        <div className='w-[100%] md:w-[50%] mt-[25px] md:mt-auto items-end'>
          <Image src={profileimg} alt="" className='w-[100%] md:w-[90%] lg:w-[60%] m-auto' data-aos ='zoom-in' data-aos-offset="00" data-aos-easing="ease-in-sine" data-aos-duration="1000" data-aos-once="true"/>
        </div>
      </div>
    </>
  )
}

export default AboutMe
