import React from 'react';
import Allservicesbanner from '@/component/Allservicesbanner';
import Housecard from '@/component/Services/Housewarming/Housewarmincard';
import Head from 'next/head';

const index = () => {
  return (
    <div>
      <Head>
          <title>
            Best House Warming Photography in Bangalore | Pradoshphotography
          </title>
          <meta
            name="description"
            content="Mark the beginning of your new chapter with the best housewarming photography in Bangalore by Pradosh Photography. Our expert team is dedicated to capturing the warmth and joy of this special occasion as you step into your new home. With a keen eye for detail and a passion for storytelling, Pradosh Photography ensures that every moment is beautifully preserved. Contact us to document your housewarming with artistry and precision, creating lasting memories of this significant milestone."
            key="desc"
          />
      </Head>
      <Allservicesbanner 
      title="House Warming"
      button="Contact Us"
      bgImage='https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707064513/House%20Warming/Deskhousebanner_mjokxm.png'
      mobBgImage='https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707064519/House%20Warming/housebanner_ml1al4.png'
      />

      <Housecard />
    </div>
  )
}

export default index
