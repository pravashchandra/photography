import React, {useEffect} from 'react';
import Image from 'next/image';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Weddingcard = () => {
    useEffect(() => {
        Aos.init();
      }, [])

    const Weddingdata =[

        {id:1, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1713802863/Wedding/dximswzqlizsjleopgtd.png'},
        {id:2, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1713802863/Wedding/wtfwgjxycg6dcuciknzd.png'},
        {id:3, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1713802863/Wedding/z8hidwtpbmqi8xyktara.png'},
        {id:4, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1713802863/Wedding/vunzlqh82l0g93wqew69.png'},
        {id:5, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1713802863/Wedding/fmr73vr09yrtyjvy0skf.png'},
        {id:6, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1713802863/Wedding/zwuleblmukk6wxhhhk3o.png'},
        {id:7, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707633815/Wedding/Weeding_service10_jtxssm.png'},
        {id:8, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707633816/Wedding/Weeding_service_wqsfpl.png'},
        {id:9, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707633816/Wedding/Weeding_service11_slgoui.png'},
        {id:10, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707633817/Wedding/Weeding_service21_ugb8gd.png'},
        {id:11, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707633817/Wedding/Weeding_service9_emtov6.png'},
        {id:12, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707633818/Wedding/Weeding_service22_ruuzql.png'},
        {id:13, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707633818/Wedding/Weeding_service8_caky7r.png'},
        {id:14, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707633825/Wedding/Weeding_service12_kdttui.png'},
        {id:15, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707633825/Wedding/Weeding_service13_fa0cpq.png'},
        {id:16, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707633828/Wedding/Weeding_service7_o6kfvc.png'},
        {id:17, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707633827/Wedding/Weeding_service4_sostq9.png'},
        {id:18, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707633826/Wedding/Weeding_service5_cbovey.png'},
        {id:19, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707633826/Wedding/Weeding_service6_yszm1t.png'},
        {id:20, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707633823/Wedding/Weeding_service2_gbozqb.png'},
        {id:21, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707633823/Wedding/Weeding_service1_qohpce.png'},
        {id:22, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707633816/Wedding/Weeding_service3_hzswwk.png'},
        {id:23, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707633826/Wedding/Weeding_service14_u0y4ox.png'},
        {id:24, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707633821/Wedding/Weeding_service16_cdmbqz.png'},
        {id:25, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707633821/Wedding/Weeding_service18_tnadqc.png'},
        {id:26, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707633821/Wedding/Weeding_service15_lrj2lo.png'},
        {id:27, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707633821/Wedding/Weeding_service26_vyvcah.png'},
        {id:28, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707633820/Wedding/Weeding_service24_gvgpxm.png'},
        {id:29, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707633820/Wedding/Weeding_service25_llibzh.png'},
        {id:30, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707633818/Wedding/Weeding_service17_qba0yg.png'},
        {id:31, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707633818/Wedding/Weeding_service19_rvbbqf.png'},
        {id:32, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707633819/Wedding/Weeding_service20_cspiyg.png'}
        
    ]

  return (
    <>
         <div className='grid grid-cols-2 md:grid-cols-5 px-[24px] xl:px-20 gap-4 md:gap-4 py-[40px] md:py-[60px] xl:py-[60px]'>
            {Weddingdata.map((items)=>{return(
                <div key={items.id}>
                    <Image src={items.img} alt='Wedding' width={370} height={430} data-aos='zoom-in' data-aos-delay="200" data-aos-once="true"/>
                </div>
            )})}
        </div>
    </>
  )
}

export default Weddingcard