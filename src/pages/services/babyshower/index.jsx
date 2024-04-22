import React from 'react';
import Allservicesbanner from '@/component/Allservicesbanner';
import Babyshower from '@/component/Services/Babyshower/Babycard';
import Head from 'next/head';

const index = () => {
  return (
    <div>
      <Head>
          <title>
            Best Baby shower Photography in Bangalore | Pradoshphotography
          </title>
          <meta
            name="description"
            content="Celebrate the joy of impending parenthood with the best baby shower photography in Bangalore by Pradosh Photography. Our skilled team specializes in capturing the emotional and candid moments of this special occasion, creating a visual narrative of the love and anticipation surrounding your growing family. Contact Pradosh Photography to document the beauty of your baby shower with artistry and sensitivity, ensuring lasting memories of this cherished milestone."
            key="desc"
          />
      </Head>
      <Allservicesbanner 
      title="Baby Shower Gallery"
      button="Contact Us"
      bgImage='https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707064009/Baby_shower/Babyshower-banner_fv4wf0.png'
      mobBgImage='https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707063985/Baby_shower/Babyshower-mob_banner_b876fd.png'
      />
    <Babyshower />
    
    </div>
  )
}

export default index
