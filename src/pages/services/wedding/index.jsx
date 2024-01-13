import React from 'react';
import Weddingcard from '@/component/Services/Wedding/Weddingcard'
import banner from "../../../../public/Images/Services/Wedding/wedding-banner.png";
import mobbanner from "../../../../public/Images/Services/Wedding/img2.png";
import Allservicesbanner from '@/component/Allservicesbanner';

const index = () => {
  return (
    <div>
      <Allservicesbanner 
      title="Wedding Gallery"
      button="Contact Us"
      bgImage={banner}
      mobBgImage={mobbanner}
      />

      <Weddingcard />
    </div>
  )
}

export default index
