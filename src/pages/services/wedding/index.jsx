import React from 'react';
import Allservicesbanner from '@/component/Allservicesbanner';
import Head from 'next/head';
import Weddingcard from '@/component/Services/Wedding/Weddingcard';

const index = () => {
  return (
    <div>
      <Head>
          <title>
            Best Wedding Photography in Bangalore | Pradoshphotography
          </title>
          <meta
            name="description"
            content="Make your wedding day unforgettable with the best wedding photography in Bangalore by Pradosh Photography. Our skilled team specializes in capturing the essence of your special day, creating timeless and romantic images. Trust Pradosh Photography to craft a visual narrative that beautifully reflects the joy and love of your celebration. Contact us for wedding photography that combines creativity, passion, and a touch of magic, ensuring your precious moments are elegantly preserved."
            key="desc"
          />
      </Head>
      <Allservicesbanner 
      title="Wedding Gallery"
      button="Contact Us"
      bgImage='https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707634051/Wedding/Wedding_bannerneww_r3pbhu.png'
      mobBgImage='https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707634050/Wedding/Wedding_bannernew_oajtzl.png'
      />

      <Weddingcard />
    </div>
  )
}

export default index
