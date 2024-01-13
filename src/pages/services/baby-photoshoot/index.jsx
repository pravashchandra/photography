import React from 'react';
import banner from "../../../../public/Images/Services/Babyphotoshoot/babybanner.png";
import mobbanner from "../../../../public/Images/Services/Babyphotoshoot/mobbaby.png";
import Allservicesbanner from '@/component/Allservicesbanner';
import Babyphotoshoot from '@/component/Services/Babyphotoshoot/Babyphotoshoot';

const index = () => {
  return (
    <div>
      <Allservicesbanner 
      title="Baby Photoshoot Gallery"
      button="Contact Us"
      bgImage={banner}
      mobBgImage={mobbanner}
      />

     <Babyphotoshoot />
    </div>
  )
}

export default index
