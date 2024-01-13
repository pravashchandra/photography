import React from 'react';
import banner from "../../../../public/Images/Services/Birthday/Birthday_banner.png";
import mobbanner from "../../../../public/Images/Services/Birthday/birthday_mb_banner.png";
import Allservicesbanner from '@/component/Allservicesbanner';
import Birthdaycard from '@/component/Services/Birthday/birthdaycard';

const index = () => {
  return (
    <div>
      <Allservicesbanner 
      title="Birthday Gallery"
      button="Contact Us"
      bgImage={banner}
      mobBgImage={mobbanner}
      />

    <Birthdaycard />
    </div>
  )
}

export default index
