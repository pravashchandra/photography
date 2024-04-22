import Image from 'next/image'
import dynamic from 'next/dynamic';
import Link from 'next/link';
import React from 'react';
import Slider from '@/component/Home/Slider/Slider';
import AboutMe from '@/component/Home/AboutMe';
import GalleryFilter from '@/component/Home/Gallery/GalleryFilter';
import GetInTouch from '@/component/Home/GetInTouch';
import Card from '@/component/Home/Services/Card';
import Ourservices from '@/component/Home/Services/Ourservices';
import Testimonialcard from '@/component/Home/testimonials/Testimonialcard';
import Head from 'next/head';


const home = () => {
  return (
    <>
    <div>
      <Head>
          <title>
            Best Wedding Photography in Bangalore | Pradoshphotography
          </title>
          <meta
            name="description"
            content="Discover the epitome of wedding photography in Bangalore with Pradosh Photography. Our expert team captures the essence of your special day, weaving emotions into timeless images. Trust us to transform your wedding moments into cherished memories. Explore the best in Bangalore wedding photography with Pradosh Photography."
            key="desc"
          />
      </Head>
    </div>
   
      <Slider />
      <AboutMe />
      <Ourservices />
      <GalleryFilter/>
      <Testimonialcard />
      <GetInTouch />
    </>
  )
}

export default home
