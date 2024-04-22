import React from 'react';
import Allservicesbanner from '@/component/Allservicesbanner';
import Maternitycard from '@/component/Services/Maternity/Maternitycard';
import Head from 'next/head';

const index = () => {
  return (
    <div>
      <Head>
          <title>
            Best Maternity Photography in Bangalore | Pradoshphotography
          </title>
          <meta
            name="description"
            content="Embrace the beauty of motherhood with the best maternity photography in Bangalore by Pradosh Photography. Our skilled team specializes in capturing the glow, love, and anticipation of this special time. Trust Pradosh Photography to create timeless and artistic images that celebrate the essence of your pregnancy journey. Contact us to ensure your maternity photoshoot is a cherished experience, providing you with memories that will last a lifetime."
            key="desc"
          />
      </Head>
      <Allservicesbanner 
      title="Maternity Shoot"
      button="Contact Us"
      bgImage='https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707064744/Maternity/Maternity_banner_1_w93uvm.png'
      mobBgImage='https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707064741/Maternity/Mob_Maternity_banner_dd5lhz.png'
      />

      <Maternitycard />
    </div>
  )
}

export default index
