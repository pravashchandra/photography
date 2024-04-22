import React from 'react';
import AllPageBanner from '@/component/AllPageBanner';
import Ourservices from '@/component/Home/Services/Ourservices';

const Allservices = () => {

  return (
    <>
      <AllPageBanner 
      title="All Services"
      button="Contact Us"
      bgImage='https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707054448/Home%20banner/new_wedding_1_qxvgbn.png'
      mobBgImage='https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707057847/Home%20banner/weddingmob_vs9dkh.png'
    />
    <Ourservices />
    </>
  )
}

export default Allservices
