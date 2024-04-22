import React, {useEffect} from 'react';
import Image from 'next/image';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Namingceremony = () => {
    useEffect(() => {
        Aos.init();
      }, [])

    const Namingceremonydata =[
        {id:1, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707583372/Naming/Naming5_yv8nvc.png'},
        {id:2, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707583371/Naming/Naming6_fhiqal.png'},
        {id:3, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707583371/Naming/Naming4_ibaakk.png'},
        {id:4, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707583371/Naming/Naming4_ibaakk.png'},
        {id:5, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707583371/Naming/Naming2_ghcyob.png'},
        {id:6, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707583371/Naming/Naming1_ylo9lj.png'},
        {id:7, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707583370/Naming/Naming32_m93cgx.png'},
        {id:8, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707583370/Naming/Naming30_z2pvf9.png'},
        {id:9, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707583370/Naming/Naming23_qse8i8.png'},
        {id:10, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707583370/Naming/Naming33_pqslip.png'},
        {id:11, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707583370/Naming/Naming21_kf0jpm.png'},
        {id:12, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707583370/Naming/Naming22_rt2nyp.png'},
        {id:13, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707583370/Naming/Naming19_sjhvp9.png'},
        {id:14, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707583369/Naming/Naming31_lt413r.png'},
        {id:15, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707583369/Naming/Naming31_lt413r.png'},
        {id:16, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707583369/Naming/Naming20_srxgjn.png'},
        {id:17, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707583369/Naming/Naming17_yoxhff.png'},
        {id:18, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707583369/Naming/Naming16_ww6fxu.png'},
        {id:19, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707583369/Naming/Naming14_wnwyot.png'},
        {id:20, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707583369/Naming/Naming29_v82dwl.png'},
        {id:21, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707583369/Naming/Naming15_creflp.png'},
        {id:22, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707583368/Naming/Naming9_blx3pi.png'},
        {id:23, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707583368/Naming/Naming8_e3mpyh.png'},
        {id:24, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707583368/Naming/Naming7_j5fm7q.png'}
    ]

  return (
    <>
         <div className='grid grid-cols-2 md:grid-cols-5 px-[24px] xl:px-20 gap-4 md:gap-4 py-[40px] md:py-[60px] xl:py-[60px]'>
            {Namingceremonydata.map((items)=>{return(
                <div key={items.id}>
                    <Image src={items.img} alt='Namingceremony' width={370} height={430}  data-aos='zoom-in' data-aos-delay="200" data-aos-once="true"/>
                </div>
            )})}
        </div>
    </>
  )
}

export default Namingceremony