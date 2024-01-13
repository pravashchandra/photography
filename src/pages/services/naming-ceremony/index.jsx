import React from 'react';
import banner from "../../../../public/Images/Services/Naming/naming_banner.webp";
import mobbanner from "../../../../public/Images/Services/Naming/Mobile_naming.png";
import Allservicesbanner from '@/component/Allservicesbanner';
import Namingceremony from '@/component/Services/Namingceremoy/Namingceremoycard';

const index = () => {
  return (
    <div>
      <Allservicesbanner 
      title="Naming Ceremony"
      button="Contact Us"
      bgImage={banner}
      mobBgImage={mobbanner}
      />

    <Namingceremony />
    </div>
  )
}

export default index
