import React from 'react';
import Weddingcard from '@/component/Services/Wedding/Weddingcard';
import banner from "../../../../public/Images/Services/Anniversary/Anniversary.png";
import mobbanner from "../../../../public/Images/Services/Anniversary/Mobanniversary.png";
import Allservicesbanner from '@/component/Allservicesbanner';
import Head from 'next/head';

const index = () => {
  return (
    <div>
      <Head>
          <title>
            Best Anniversary Photography in Bangalore | Pradoshphotography
          </title>
          <meta
            name="description"
            content="Commemorate your journey of love with the best anniversary photography in Bangalore by Pradosh Photography. Our expert team specializes in capturing the essence of your unique bond, creating timeless images that tell your story. From intimate moments to grand celebrations, trust Pradosh Photography to freeze the magic of your anniversary in exquisite frames. Contact us to turn your special day into a visual celebration of love and commitment."
            key="desc"
          />
      </Head>
      <Allservicesbanner 
      title="Anniversary Gallery"
      button="Contact Us"
      bgImage={banner}
      mobBgImage={mobbanner}
      />

      <Weddingcard />
    </div>
  )
}

export default index
