import Allservicesbanner from '@/component/Allservicesbanner'
import Engagementcard from '@/component/Services/Engagement/Engagementcard'
import Head from "next/head";

const index = () => {
  return (
    <>
    <Head>
          <title>
            Best Engagement Photography in Bangalore | Pradoshphotography
          </title>
          <meta
            name="description"
            content="Celebrate the journey to forever with the best engagement photography in Bangalore by Pradosh Photography. Our skilled team specializes in capturing the intimate and heartfelt moments that define your commitment. With a perfect blend of creativity and professionalism, Pradosh Photography ensures your engagement is documented with elegance and finesse. Contact us to turn your engagement into a timeless visual story that beautifully encapsulates the beginning of your lifelong love story."
            key="desc"
          />
      </Head>
      <Allservicesbanner 
      title="Engagement Gallery"
      button="Contact Us"
      bgImage='https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707064359/Engagement/engagementbanner_1_gkafkz.png'
      mobBgImage='https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707064350/Engagement/mobengage_rrrqgt.png'
      />
      <Engagementcard />
    </>
  )
}

export default index
