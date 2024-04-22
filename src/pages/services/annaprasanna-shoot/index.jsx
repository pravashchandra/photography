import React from 'react'
import Allservicesbanner from '@/component/Allservicesbanner';
import Annaparsanacard from '@/component/Services/Annaparsana/Annaparsanacard';
import Head from 'next/head';

const index = () => {
  return (
    
    <div>
       <Head>
          <title>
            Best Annaprasana Photography in Bangalore | Pradoshphotography
          </title>
          <meta
            name="description"
            content="Celebrate the sacred ritual of Annaprasana with Pradosh Photography, offering the best Annaprasana photography services in Bangalore. Our skilled team captures the essence of this milestone with a blend of artistry and cultural sensitivity. Cherish the timeless moments of your child's first feeding ceremony with our expert lens. Contact Pradosh Photography to turn this sacred occasion into a visual treasure that lasts a lifetime."
            key="desc"
          />
      </Head>
      <Allservicesbanner 
      title="Annaprasanna Shoot"
      button="Contact Us"
      bgImage='https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707059477/annaprasanna-shoot/Deskannaparsan_kfafql.png'
      mobBgImage='https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707059471/annaprasanna-shoot/Mobannaparsan_z8pvu0.png'
      />

      <Annaparsanacard />
    </div>
  )
}

export default index
