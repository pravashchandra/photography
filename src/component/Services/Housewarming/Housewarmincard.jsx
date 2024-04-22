import React, {useEffect} from 'react';
import Image from 'next/image';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Housecard = () => {
    useEffect(() => {
        Aos.init();
      }, [])

    const Housedata =[
        {id:1, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707590966/House%20Warming/House6_pzzzto.png'},
        {id:2, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707590963/House%20Warming/House5_igk5kp.png'},
        {id:3, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707590961/House%20Warming/House4_imouxk.png'},
        {id:4, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707590958/House%20Warming/House3_giw5ha.png'},
        {id:5, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707590957/House%20Warming/House1_fvfhe9.png'},
        {id:6, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707590957/House%20Warming/House2_snyp4l.png'},
        {id:7, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707590948/House%20Warming/House8_cwgdy8.png'},
        {id:8, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707590947/House%20Warming/House9_sx6zxr.png'},
        {id:9, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707590945/House%20Warming/House7_gpedsg.png'},
        {id:10, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707590940/House%20Warming/House21_t5cnuq.png'},
        {id:11, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707590941/House%20Warming/House22_sspjo9.png'},
        {id:12, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707590937/House%20Warming/House20_fjlgnt.png'},
        {id:13, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707590935/House%20Warming/House19_esybb7.png'},
        {id:14, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707590933/House%20Warming/House18_hiodk3.png'},
        {id:15, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707590930/House%20Warming/House17_ok8nsp.png'},
        {id:16, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707590929/House%20Warming/House16_epazzs.png'},
        {id:17, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707590927/House%20Warming/House15_y6gays.png'},
        {id:18, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707590925/House%20Warming/House14_cpve7n.png'},
        {id:19, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707590923/House%20Warming/House13_dzbxcx.png'},
        {id:20, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707590920/House%20Warming/House12_tjg9kl.png'},
        {id:21, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707590918/House%20Warming/House10_hd7xf6.png'},
        {id:22, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707590918/House%20Warming/House11_ozbhcw.png'}
    ]

  return (
    <>
         <div className='grid grid-cols-2 md:grid-cols-5 px-[24px] xl:px-20 gap-4 md:gap-4 py-[40px] md:py-[60px] xl:py-[60px]'>
            {Housedata.map((items)=>{return(
                <div key={items.id}>
                    <Image src={items.img} alt='Housewarming' width={370} height={430} data-aos='zoom-in' data-aos-delay="200" data-aos-once="true" />
                </div>
            )})}
        </div>
    </>
  )
}

export default Housecard