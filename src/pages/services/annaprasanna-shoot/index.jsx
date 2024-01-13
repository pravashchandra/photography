import React from 'react'
import banner from "../../../../public/Images/Services/Annaparsana/deskannaparsana.png";
import mobbanner from "../../../../public/Images/Services/Annaparsana/mobanaaparsana.png";
import Allservicesbanner from '@/component/Allservicesbanner';
import Annaparsanacard from '@/component/Services/Annaparsana/Annaparsanacard';

const index = () => {
  return (
    <div>
      <Allservicesbanner 
      title="Annaprasanna Shoot"
      button="Contact Us"
      bgImage={banner}
      mobBgImage={mobbanner}
      />

      <Annaparsanacard />
    </div>
  )
}

export default index
