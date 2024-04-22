import React, {useEffect} from 'react';
import Image from 'next/image';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Preweddingcard = () => {
    useEffect(() => {
        Aos.init();
      }, [])

    const Preweddingdata =[
        {id:1, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707592808/Pre_wedding/pre12_uiakuj.png'},
        {id:2, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707592805/Pre_wedding/pre11_l0bhgr.png'},
        {id:3, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707592803/Pre_wedding/pre10_coswe9.png'},
        {id:4, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707592799/Pre_wedding/pre9_xu55x4.png'},
        {id:5, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707592797/Pre_wedding/pre8_okxexs.png'},
        {id:7, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707592822/Pre_wedding/pre15_lsz9py.png'},
        {id:8, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707592811/Pre_wedding/pre13_y6vozy.png'},
        {id:9, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707592752/Pre_wedding/pre18_cmcpp1.png'},
        {id:10, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707592814/Pre_wedding/pre14_occlxm.png'},
        {id:11, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707592777/Pre_wedding/pre20_pqzlsl.png'},
        {id:12, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707592753/Pre_wedding/pre19_ujhzzx.png'},
        {id:13, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707592751/Pre_wedding/pre17_y28iux.png'},
        {id:14, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707592748/Pre_wedding/pre16_kfdvgz.png'},
        {id:15, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707592821/Pre_wedding/pre21_vbytpy.png'},
        {id:16, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707592821/Pre_wedding/pre21_vbytpy.png'},
        {id:17, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707592795/Pre_wedding/pre7_mbctv7.png'},
        {id:18, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707592792/Pre_wedding/pre6_jl7s20.png'},
        {id:19, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707592790/Pre_wedding/pre5_rewrfg.png'},
        {id:20, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707592787/Pre_wedding/pre4_g8hovj.png'},
        {id:21, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707592784/Pre_wedding/pre3_cvet7j.png'},
        {id:22, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707592782/Pre_wedding/pre2_pkf0x4.png'},
        {id:23, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707592779/Pre_wedding/pre1_aygmpd.png'}
    ]

  return (
    <>
         <div className='grid grid-cols-2 md:grid-cols-5 px-[24px] xl:px-20 gap-4 md:gap-4 py-[40px] md:py-[60px] xl:py-[60px]'>
            {Preweddingdata.map((items)=>{return(
                <div key={items.id}>
                    <Image src={items.img} alt='Prewedding' width={370} height={430} data-aos='zoom-in' data-aos-delay="200" data-aos-once="true"/>
                </div>
            )})}
        </div>
    </>
  )
}

export default Preweddingcard