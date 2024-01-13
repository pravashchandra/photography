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


const home = () => {
  return (
    <>
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
