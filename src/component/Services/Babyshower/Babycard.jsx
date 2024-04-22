import React, {useEffect} from 'react';
import Image from 'next/image';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Babyshower = () => {
    useEffect(() => {
        Aos.init();
      }, [])

    const babycard =[
        {id:1, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707588237/Baby_shower/baby19_gdudir.png'},
        {id:2, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707588238/Baby_shower/baby20_tduk4c.png'},
        {id:3, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707588238/Baby_shower/baby21_pfvtlk.png'},
        {id:4, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707588238/Baby_shower/baby21_pfvtlk.png'},
        {id:5, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707588241/Baby_shower/baby22_iup93a.png'},
        {id:6, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707588269/Baby_shower/baby17_enprxj.png'},
        {id:7, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707588266/Baby_shower/baby16_ugwqsc.png'},
        {id:8, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707588299/Baby_shower/baby29_wo6vlz.png'},
        {id:9, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707588297/Baby_shower/baby28_dmhzl8.png'},
        {id:10, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707588296/Baby_shower/baby27_miqbiy.png'},
        {id:11, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707588295/Baby_shower/baby26_ca3ato.png'},
        {id:12, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707588293/Baby_shower/baby25_hekvyf.png'},
        {id:13, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707588291/Baby_shower/baby24_hzjgy4.png'},
        {id:14, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707588241/Baby_shower/baby4_a0eqhi.png'},
        {id:15, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707588242/Baby_shower/baby5_dhplz7.png'},
        {id:16, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707588244/Baby_shower/baby6_jvatnw.png'},
        {id:17, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707588246/Baby_shower/baby7_ovqvif.png'},
        {id:18, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707588248/Baby_shower/baby8_n5tq63.png'},
        {id:19, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707588250/Baby_shower/baby9_urrxhq.png'},
        {id:20, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707588251/Baby_shower/baby10_ljfqzd.png'},
        {id:21, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707588253/Baby_shower/baby11_vbbukz.png'},
        {id:22, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707588256/Baby_shower/baby12_zctkuh.png'},
        {id:23, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707588259/Baby_shower/baby13_l500r9.png'},
        {id:24, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707588261/Baby_shower/baby14_atzwm3.png'},
        {id:25, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707588261/Baby_shower/baby14_atzwm3.png'},
        {id:26, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707588273/Baby_shower/baby2_orfyas.png'},
        {id:27, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707588274/Baby_shower/baby1_fqtkou.png'},
        {id:28, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707588297/Baby_shower/baby3_ed5xjw.png'},
        {id:29, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707588303/Baby_shower/baby18_pyj526.png'},
        {id:30, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707588307/Baby_shower/baby31_ivay3s.png'},
        {id:31, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707588301/Baby_shower/baby32_ysbrpb.png'},
        {id:32, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707588300/Baby_shower/baby30_dv796z.png'},
        {id:33, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707588289/Baby_shower/baby39_xy6yh7.png'},
        {id:34, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707588287/Baby_shower/baby38_v3wnhn.png'},
        {id:35, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707588284/Baby_shower/baby37_caeqwv.png'},
        {id:36, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707588282/Baby_shower/baby36_qvqzdh.png'},
        {id:37, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707588281/Baby_shower/baby35_w6c5cp.png'},
        {id:38, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707588278/Baby_shower/baby34_ze0qbw.png'},
        {id:39, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707588276/Baby_shower/baby33_drwhsw.png'},
        {id:40, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707588263/Baby_shower/baby15_lsuu5m.png'}
    ]

  return (
    <>
         <div className='grid grid-cols-2 md:grid-cols-5 px-[24px] xl:px-20 gap-4 md:gap-4 py-[40px] md:py-[60px] xl:py-[60px]'>
            {babycard.map((items)=>{return(
                <div key={items.id}>
                    <Image src={items.img} alt='babyshower' width={370} height={430} data-aos='zoom-in' data-aos-delay="200" data-aos-once="true"  />
                </div>
            )})}
        </div>
    </>
  )
}

export default Babyshower