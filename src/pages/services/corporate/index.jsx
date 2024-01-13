import React from 'react';
import banner from "../../../../public/Images/Services/Corporate/corporate_banner.png";
import mobbanner from "../../../../public/Images/Services/Corporate/mob_corporate.png";
import Allservicesbanner from '@/component/Allservicesbanner';
import Corporatecard from '@/component/Services/Corporate/Corporatecard';

const index = () => {
  return (
    <div>
      <Allservicesbanner 
      title="Corporate Gallery"
      button="Contact Us"
      bgImage={banner}
      mobBgImage={mobbanner}
      />
   <Corporatecard />
     
    </div>
  )
}

export default index
