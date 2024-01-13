import React from 'react';
import banner from "../../../../public/Images/Services/Maternity/maternity_banner.png";
import mobbanner from "../../../../public/Images/Services/Maternity/Mobile_maternity_banner.png";
import Allservicesbanner from '@/component/Allservicesbanner';
import Maternitycard from '@/component/Services/Maternity/Maternitycard';

const index = () => {
  return (
    <div>
      <Allservicesbanner 
      title="Maternity Shoot"
      button="Contact Us"
      bgImage={banner}
      mobBgImage={mobbanner}
      />

      <Maternitycard />
    </div>
  )
}

export default index
