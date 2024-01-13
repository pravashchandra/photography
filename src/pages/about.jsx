import React from 'react';
import Image from 'next/image';
import AllPageBanner from '@/component/AllPageBanner';
import AboutsBanner from "../../public/Images/About/about_banner.png"
import AboutusBannermob from "../../public/Images/About/about_banner_mob.png"
import About from '@/component/Aboutus/About';
import Getappointment from '@/component/Aboutus/Getappointment';
import Whychooseus from '@/component/Aboutus/Whychooseus';
import Ourvision from '@/component/Aboutus/Ourvision';
import Aos from 'aos';
import 'aos/dist/aos.css'

const about = () => {
  return (
    <>
      <AllPageBanner 
      title="About Us"
      description="Welcome to Pradosh Photography, where the art of photography meets the heart of storytelling. Established with a passion for freezing time's most cherished moments in captivating frames, we are a team of dedicated photographers driven by creativity, professionalism, and the relentless pursuit of perfection."
      button="Contact Us"
      bgImage={AboutsBanner}
      mobBgImage={AboutusBannermob}
      
    />

    <About />
    {/* <Ourvision />
    <Whychooseus /> */}
    <Getappointment />

    </>
  )
}

export default about
