import React from 'react';
import banner from "../../../../public/Images/Services/Prewedding/prewedding.png"
import mobbanner from "../../../../public/Images/Services/Prewedding/prewed.png"
import Allservicesbanner from '@/component/Allservicesbanner';
import Preweddingcard from '@/component/Services/Prewedding/Preweddingcard';

const index = () => {
  return (
    <div>
      <Allservicesbanner 
      title="Pre Wedding Gallery"
      button="Contact Us"
      bgImage={banner}
      mobBgImage={mobbanner}
      />

      <Preweddingcard />
    </div>
  )
}

export default index
