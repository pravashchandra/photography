import React from 'react';
import Weddingcard from '@/component/Services/Wedding/Weddingcard';
import banner from "../../../../public/Images/Services/Anniversary/Anniversary.png";
import mobbanner from "../../../../public/Images/Services/Anniversary/Mobanniversary.png";
import Allservicesbanner from '@/component/Allservicesbanner';

const index = () => {
  return (
    <div>
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
