import React from 'react';
import Allservicesbanner from '@/component/Allservicesbanner';
import Corporatecard from '@/component/Services/Corporate/Corporatecard';
import Head from 'next/head';

const index = () => {
  return (
    <div>
      <Head>
          <title>
            Best Corporate Photography in Bangalore | Pradoshphotography
          </title>
          <meta
            name="description"
            content="Elevate your corporate image with the best corporate photography in Bangalore by Pradosh Photography. Our skilled team specializes in capturing the essence of your business, corporate events, and professional headshots with precision and creativity. Trust Pradosh Photography to showcase your company's unique identity through compelling visual storytelling. Contact us for high-quality corporate photography services that leave a lasting impression and enhance your brand presence in the corporate world."
            key="desc"
          />
      </Head>
      <Allservicesbanner 
      title="Corporate Gallery"
      button="Contact Us"
      bgImage='https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707654179/Corporate/corporate_bannerr_ukgoej.png'
      mobBgImage='https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707654179/Corporate/corporate_bannerr_ukgoej.png'
      />
   <Corporatecard />
     
    </div>
  )
}

export default index
