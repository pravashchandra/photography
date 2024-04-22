import React from 'react';
import Allservicesbanner from '@/component/Allservicesbanner';
import Babyphotoshoot from '@/component/Services/Babyphotoshoot/Babyphotoshoot';
import Head from 'next/head';

const index = () => {
  return (
    <div>
      <Head>
          <title>
            Best Baby Photoshoot in Bangalore | Pradoshphotography
          </title>
          <meta
            name="description"
            content="Capture the adorable innocence and joy of your little one with the best baby photoshoot in Bangalore by Pradosh Photography. Our expert team excels in creating heartwarming and artistic images that beautifully encapsulate the precious moments of infancy. Trust us to craft a delightful visual story of your baby's early days. Contact Pradosh Photography for a baby photoshoot experience that preserves the magic of your child's fleeting moments."
            key="desc"
          />
      </Head>
      <Allservicesbanner 
      title="Baby Photoshoot Gallery"
      button="Contact Us"
      bgImage='https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707063804/Baby_Photoshoot/Mob_baby_banner_kvov1s.png'
      mobBgImage='https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707063785/Baby_Photoshoot/Mob_baby_nddoo2.png'
      />

     <Babyphotoshoot />
    </div>
  )
}

export default index
