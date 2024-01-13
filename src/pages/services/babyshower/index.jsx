import React from 'react';

import banner from "../../../../public/Images/Services/Babyshower/babyshower_banner.png";
import mobbanner from "../../../../public/Images/Services/Babyshower/babyshower_mob_banner.png";
import Allservicesbanner from '@/component/Allservicesbanner';
import Babyshower from '@/component/Services/Babyshower/Babycard';

const index = () => {
  return (
    <div>
      <Allservicesbanner 
      title="Baby Shower Gallery"
      button="Contact Us"
      bgImage={banner}
      mobBgImage={mobbanner}
      />
    <Babyshower />
    
    </div>
  )
}

export default index
