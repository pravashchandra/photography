import React from 'react';
import Allservicesbanner from '@/component/Allservicesbanner';
import Namingceremony from '@/component/Services/Namingceremoy/Namingceremoycard';
import Head from 'next/head';

const index = () => {
  return (
    <div>
      <Head>
          <title>
            Best Naming Ceremony Photography in Bangalore | Pradoshphotography
          </title>
          <meta
            name="description"
            content="Mark the beginning of a lifetime with the best Naming Ceremony photography in Bangalore by Pradosh Photography. Our expert team is dedicated to capturing the joy, love, and cultural significance of this special occasion. With a perfect blend of artistry and precision, Pradosh Photography ensures that every moment is beautifully preserved. Contact us to document your Naming Ceremony with creativity and professionalism, creating timeless memories of this heartwarming milestone."
            key="desc"
          />
      </Head>
      <Allservicesbanner 
      title="Naming Ceremony"
      button="Contact Us"
      bgImage='https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707064959/Naming_ceremony/image_10_utoqqr.png'
      mobBgImage='https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707064954/Naming_ceremony/image_9_igzyo3.png'
      />

    <Namingceremony />
    </div>
  )
}

export default index
