import React from 'react';
import Image from 'next/image';
import AllPageBanner from '@/component/AllPageBanner';
import About from '@/component/Aboutus/About';
import Getappointment from '@/component/Aboutus/Getappointment';
import 'aos/dist/aos.css'
import Head from 'next/head';

const about = () => {
  return (
    <>
    <div>
      <Head>
          <title>
          About Us | Best Prewedding Photography in Bangalore 
          </title>
          <meta
            name="description"
            content="Elevate your love story with the best prewedding photography in Bangalore by Pradosh Photography. Our skilled team specializes in capturing the magic of your journey to marriage, crafting artistic and intimate prewedding moments. Explore a blend of creativity and romance in every frame. Choose Pradosh Photography for a prewedding experience that mirrors the uniqueness of your love story."
            key="desc"
          />
      </Head>
    </div>
      <AllPageBanner 
      title="About Us"
      description="Welcome to Pradosh Photography, where the art of photography meets the heart of storytelling. Established with a passion for freezing time's most cherished moments in captivating frames, we are a team of dedicated photographers driven by creativity, professionalism, and the relentless pursuit of perfection."
      button="Contact Us"
      bgImage='https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707060384/About%20Us/about_banner_xppfy2.png'
      mobBgImage='https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707059903/About%20Us/about_banner_mob_cs0prb.png'
      
    />

    <About />
    {/* <Ourvision />
    <Whychooseus /> */}
    <Getappointment />

    </>
  )
}

export default about
