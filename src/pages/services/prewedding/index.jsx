import React from 'react';
import Allservicesbanner from '@/component/Allservicesbanner';
import Preweddingcard from '@/component/Services/Prewedding/Preweddingcard';
import Head from 'next/head';

const index = () => {
  return (
    <div>
      <Head>
          <title>
            Best Prewedding Photography in Bangalore | Pradoshphotography
          </title>
          <meta
            name="description"
            content="Capture the essence of your love story with the best prewedding photography in Bangalore by Pradosh Photography. Our skilled team creates timeless, romantic images that beautifully reflect your unique relationship. Trust us for a prewedding photoshoot blending creativity, passion, and magic to elegantly preserve your love story. Contact Pradosh Photography to embark on this journey to forever."
            key="desc"
          />
      </Head>
      <Allservicesbanner 
      title="Pre Wedding Gallery"
      button="Contact Us"
      bgImage='https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707065125/Pre_wedding/Pre_weeding_banner_tdxhtt.png'
      mobBgImage='https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707065123/Pre_wedding/Mob_prewedding_banner_qghonv.png'
      />

      <Preweddingcard />
    </div>
  )
}

export default index
