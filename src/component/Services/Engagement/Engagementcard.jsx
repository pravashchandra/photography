import React, {useEffect} from 'react';
import Image from 'next/image';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Engagementcard = () => {
    useEffect(() => {
        Aos.init();
      }, [])

    const Engagementcard =[
        {id:1, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707590184/Engagement/Engagement12_j3p7io.png'},
        {id:2, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707590181/Engagement/Engagement3_y69xfe.png'},
        {id:3, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707590178/Engagement/Engagement2_pvaskq.png'},
        {id:4, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707590176/Engagement/Engagement1_kiqegm.png'},
        {id:5, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707590168/Engagement/Engagement10_uf8zep.png'},
        {id:6, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707590166/Engagement/Engagement9_cgk7it.png'},
        {id:7, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707590163/Engagement/Engagement8_eb3amt.png'},
        {id:8, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707590161/Engagement/Engagement7_kjyvhi.png'},
        {id:9, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707590158/Engagement/Engagement6_iolawz.png'},
        {id:10, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707590155/Engagement/Engagement5_jwsiil.png'},
        {id:11, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707590154/Engagement/Engagement4_nri7gq.png'},
        {id:12, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707590136/Engagement/Engagement11_za0cjq.png'},
        {id:13, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707590032/Engagement/Engagement19_tqml0v.png'},
        {id:14, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707590030/Engagement/Engagement18_om0qjo.png'},
        {id:15, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707590028/Engagement/Engagement17_q01nul.png'},
        {id:16, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707590026/Engagement/Engagement16_wgsfiv.png'},
        {id:17, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707590024/Engagement/Engagement15_iqbqov.png'},
        {id:18, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707590023/Engagement/Engagement14_xcxkae.png'},
        {id:19, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707590022/Engagement/Engagement13_vbmyf3.png'},
        {id:20, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707590151/Engagement/Engagement34_gy7gzy.png'},
        {id:21, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707590149/Engagement/Engagement33_dorzav.png'},
        {id:22, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707590145/Engagement/Engagement32_hqedfa.png'},
        {id:23, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707590145/Engagement/Engagement32_hqedfa.png'},
        {id:24, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707590140/Engagement/Engagement30_fx96pl.png'},
        {id:25, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707590138/Engagement/Engagement29_mejsv1.png'},
        {id:26, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707590138/Engagement/Engagement29_mejsv1.png'},
        {id:27, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707590121/Engagement/Engagement28_zuljsr.png'},
        {id:28, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707590119/Engagement/Engagement25_eqesug.png'},
        {id:29, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707590116/Engagement/Engagement35_b1jy0y.png'},
        {id:30, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707590115/Engagement/Engagement21_rdycxo.png'},
        {id:31, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707590115/Engagement/Engagement26_x5iheh.png'},
        {id:32, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707590114/Engagement/Engagement24_kbgy5b.png'},
        {id:33, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707590111/Engagement/Engagement27_wsxokj.png'},
        {id:34, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707590107/Engagement/Engagement23_ugqwh6.png'},
        {id:35, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707590101/Engagement/Engagement22_xaivxt.png'},
        {id:36, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707590134/Engagement/Engagement45_h8acur.png'},
        {id:37, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707590130/Engagement/Engagement41_mbdff0.png'},
        {id:38, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707590129/Engagement/Engagement43_dv95dk.png'},
        {id:39, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707590128/Engagement/Engagement40_iuogwa.png'},
        {id:40, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707590127/Engagement/Engagement39_jgsf59.png'},
        {id:41, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707590123/Engagement/Engagement38_gxegmn.png'},
        {id:42, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707590120/Engagement/Engagement37_avkksd.png'},
        {id:43, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707590116/Engagement/Engagement36_o7zdep.png'},
        {id:44, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707590097/Engagement/Engagement44_wew2cq.png'},
        {id:45, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707590092/Engagement/Engagement42_f4sezm.png'},
        {id:46, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707590173/Engagement/Engagement57_salt5y.png'},
        {id:47, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707590171/Engagement/Engagement56_qhtzt3.png'},
        {id:48, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707590088/Engagement/Engagement55_w4f5mt.png'},
        {id:49, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707590085/Engagement/Engagement53_y4rf9m.png'},
        {id:50, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707590085/Engagement/Engagement54_f2qn0k.png'},
        {id:51, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707590084/Engagement/Engagement51_otpwyw.png'},
        {id:52, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707590056/Engagement/Engagement50_vlslun.png'},
        {id:53, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707590040/Engagement/Engagement49_und15k.png'},
        {id:54, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707590038/Engagement/Engagement48_dgyykg.png'},
        {id:55, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707590036/Engagement/Engagement47_tel4e5.png'},
        {id:56, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707590034/Engagement/Engagement46_wsb1l5.png'}
    ]

  return (
    <>
         <div className='grid grid-cols-2 md:grid-cols-5 px-[24px] xl:px-20 gap-4 md:gap-4 py-[40px] md:py-[60px] xl:py-[60px]'>
            {Engagementcard.map((items)=>{return(
                <div key={items.id}>
                    <Image src={items.img} alt='Engagement' width={370} height={430} data-aos='zoom-in' data-aos-delay="200" data-aos-once="true" />
                </div>
            )})}
        </div>
    </>
  )
}

export default Engagementcard