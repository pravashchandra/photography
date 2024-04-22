import React, {useEffect} from 'react';
import Image from 'next/image';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Babyphotoshoot = () => {
    useEffect(() => {
        Aos.init();
      }, [])

    const babyphotophotocard =[
        {id:1, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707585173/Baby_Photoshoot/babyphoto22_sfkqjz.png'},
        {id:2, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707585175/Baby_Photoshoot/babyphoto14_mr6mgo.png'},
        {id:3, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707585174/Baby_Photoshoot/babyphoto18_hrfkvt.png'},
        {id:4, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707585185/Baby_Photoshoot/babyphoto23_v5cg3p.png'},
        {id:5, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707585184/Baby_Photoshoot/babyphoto24_gf1ilg.png'},
        {id:6, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707585170/Baby_Photoshoot/babyphoto5_vzoq72.png'},
        {id:7, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707585170/Baby_Photoshoot/babyphoto19_vpc1jo.png'},
        {id:8, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707585169/Baby_Photoshoot/babyphoto17_iji4ht.png'},
        {id:9, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707585160/Baby_Photoshoot/babyphoto16_bkrmqm.png'},
        {id:10, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707585159/Baby_Photoshoot/babyphoto15_rihb7e.png'},
        {id:11, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707585157/Baby_Photoshoot/babyphoto10_h28npn.png'},
        {id:12, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707585155/Baby_Photoshoot/babyphoto11_sew1iz.png'},
        {id:13, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707585154/Baby_Photoshoot/babyphoto12_nybnwm.png'},
        {id:14, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707585154/Baby_Photoshoot/babyphoto13_qcfaqc.png'},
        {id:15, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707585151/Baby_Photoshoot/babyphoto8_ndrftk.png'},
        {id:16, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707585147/Baby_Photoshoot/babyphoto9_sof07z.png'},
        {id:17, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707585146/Baby_Photoshoot/babyphoto7_opwfas.png'},
        {id:18, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707585132/Baby_Photoshoot/babyphoto6_ubfmpl.png'},
        {id:19, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707585130/Baby_Photoshoot/babyphoto4_cpsxjn.png'},
        {id:20, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707585118/Baby_Photoshoot/babyphoto2_bnd7uh.png'},
        {id:21, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707585117/Baby_Photoshoot/babyphoto21_uoglqp.png'},
        {id:22, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707585116/Baby_Photoshoot/babyphoto1_k5nz6n.png'},
        {id:23, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707585115/Baby_Photoshoot/babyphoto26_d3pjvj.png'},
        {id:24, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707585116/Baby_Photoshoot/babyphoto3_noxuxf.png'},
        {id:25, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707585110/Baby_Photoshoot/babyphoto27_mvy9wb.png'},
        {id:26, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707585110/Baby_Photoshoot/babyphoto20_z1cd4d.png'},
        {id:27, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707585109/Baby_Photoshoot/babyphoto25_pynirg.png'}
    ]

  return (
    <>
         <div className='grid grid-cols-2 md:grid-cols-5 px-[24px] xl:px-20 gap-4 md:gap-4 py-[40px] md:py-[60px] xl:py-[60px]'>
            {babyphotophotocard.map((items)=>{return(
                <div key={items.id}>
                    <Image src={items.img} width={370} height={430} alt='Babyphotoshoot' data-aos='zoom-in' data-aos-delay="200" data-aos-once="true" />
                </div>
            )})}
        </div>
    </>
  )
}

export default Babyphotoshoot