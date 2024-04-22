import React, {useEffect} from 'react';
import Image from 'next/image';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Corporatecard = () => {
    useEffect(() => {
        Aos.init();
      }, [])

    const corporatedata =[
        {id:1, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707589283/Corporate/corporate24_clvbjy.png'},
        {id:2, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707589280/Corporate/corporate20_klswj1.png'},
        {id:3, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707589280/Corporate/corporate19_gulhpx.png'},
        {id:4, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707589278/Corporate/corporate18_hfc8lg.png'},
        {id:5, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707589274/Corporate/corporate17_nqodqb.png'},
        {id:6, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707589273/Corporate/corporate16_xciyuv.png'},
        {id:7, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707589272/Corporate/corporate15_wtijer.png'},
        {id:8, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707589268/Corporate/corporate14_ha7v8n.png'},
        {id:9, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707589266/Corporate/corporate13_lv9dnq.png'},
        {id:10, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707589264/Corporate/corporate12_phcdak.png'},
        {id:11, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707589262/Corporate/corporate11_knqxgf.png'},
        {id:12, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707589260/Corporate/corporate10_oufzhy.png'},
        {id:13, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707589258/Corporate/corporate9_sxhatm.png'},
        {id:14, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707589254/Corporate/corporate7_od3ppq.png'},
        {id:15, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707589255/Corporate/corporate8_hof7tu.png'},
        {id:16, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707589200/Corporate/corporate6_pcoaqt.png'},
        {id:17, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707589177/Corporate/corporate5_il43az.png'},
        {id:18, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707589175/Corporate/corporate4_coqkjh.png'},
        {id:19, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707589173/Corporate/corporate3_xzis30.png'},
        {id:20, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707589171/Corporate/corporate2_xwa936.png'},
        {id:21, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707589169/Corporate/corporate1_pzduio.png'},
        {id:22, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707589167/Corporate/corporate23_bep9sx.png'},
        {id:23, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707589165/Corporate/corporate22_yxrp4w.png'},
        {id:24, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707589164/Corporate/corporate21_xav95l.png'},
        {id:25, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707589162/Corporate/corporate34_lbypot.png'},
        {id:26, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707589160/Corporate/corporate33_tqzen3.png'},
        {id:27, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707589158/Corporate/corporate32_owkchx.png'},
        {id:28, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707589157/Corporate/corporate31_gprith.png'},
        {id:29, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707589156/Corporate/corporate30_qhlvex.png'},
        {id:30, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707589147/Corporate/corporate29_az3qbh.png'},
        {id:31, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707589145/Corporate/corporate27_yklulb.png'},
        {id:32, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707589145/Corporate/corporate26_kqbdpq.png'},
        {id:33, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707589145/Corporate/corporate25_qff9mi.png'},
        {id:34, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707589145/Corporate/corporate28_rkgeqn.png'}
    ]

  return (
    <>
        <div className='grid grid-cols-2 md:grid-cols-5 px-[24px] xl:px-20 gap-4 md:gap-4 py-[40px] md:py-[60px] xl:py-[60px]'>
            {corporatedata.map((items)=>{return(
                <div key={items.id}>
                    <Image src={items.img} alt='Corporate' width={370} height={430} data-aos='zoom-in' data-aos-delay="200" data-aos-once="true"  />
                </div>
            )})}
        </div>
    </>
  )
}

export default Corporatecard