import React from 'react';
import Image from 'next/image';
import AllPageBanner from '@/component/AllPageBanner';
import Gallerybanner from "../../public/Images/Home/Slider1.png"
const Gallery = () => {

  return (
    <>
      <AllPageBanner 
      title="Gallery"
      description="This is the gallery page"
      button="Contact Us"
      bgImage={Gallerybanner}
    />

    </>
  )
}

export default Gallery
