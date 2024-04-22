import React from 'react';
import Allservicesbanner from '@/component/Allservicesbanner';
import Birthdaycard from '@/component/Services/Birthday/birthdaycard';
import Head from 'next/head';

const index = () => {
  return (
    <div>
      <Head>
          <title>
            Best Birthday Photography in Bangalore | Pradoshphotography
          </title>
          <meta
            name="description"
            content="Turn your special day into everlasting memories with the best birthday photography in Bangalore by Pradosh Photography. Our expert team is dedicated to capturing the joy, laughter, and unique moments that make your birthday celebration unforgettable. Trust Pradosh Photography for personalized and professional services that showcase the essence of your special day. Contact us to ensure your birthday is documented with creativity, precision, and a touch of artistic flair."
            key="desc"
          />
      </Head>
      <Allservicesbanner 
      title="Birthday Gallery"
      button="Contact Us"
      bgImage='https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707064153/Birthday/Birthday_banner_1_hqrpp4.png'
      mobBgImage='https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707064146/Birthday/birthday_mb_banner_1_vftvup.png'
      />

    <Birthdaycard />
    </div>
  )
}

export default index
