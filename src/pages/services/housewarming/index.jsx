import React from 'react';
import banner from "../../../../public/Images/Services/Housewarming/housewarming_banner.png";
import mobbanner from "../../../../public/Images/Services/Housewarming/house_banner.png";
import Allservicesbanner from '@/component/Allservicesbanner';
import Housecard from '@/component/Services/Housewarming/Housewarmincard';

const index = () => {
  return (
    <div>
      <Allservicesbanner 
      title="House Warming"
      button="Contact Us"
      bgImage={banner}
      mobBgImage={mobbanner}
      />

      <Housecard />
    </div>
  )
}

export default index
