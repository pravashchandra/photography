import banner from "../../../../public/Images/Services/Engagement/engagementbanner.png";
import mobbanner from "../../../../public/Images/Services/Engagement/mobengage.png";
import Allservicesbanner from '@/component/Allservicesbanner'
import Engagementcard from '@/component/Services/Engagement/Engagementcard'
import React from 'react'

const index = () => {
  return (
    <>
      <Allservicesbanner 
      title="Engagement Gallery"
      button="Contact Us"
      bgImage={banner}
      mobBgImage={mobbanner}
      />
      <Engagementcard />
    </>
  )
}

export default index
