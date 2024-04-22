import React, {useEffect} from 'react';
import Image from 'next/image';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Maternitycard = () => {
    useEffect(() => {
        Aos.init();
      }, [])

    const Maternitycard =[
        {id:1, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707591838/Maternity/Maternity10_u7ud3z.png'},
        {id:2, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707591836/Maternity/Maternity9_wbnfk6.png'},
        {id:3, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707591832/Maternity/Maternity8_xmaksw.png'},
        {id:4, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707591828/Maternity/Maternity7_zbter9.png'},
        {id:5, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707591827/Maternity/Maternity6_y9d0xu.png'},
        {id:6, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707591825/Maternity/Maternity5_wniewc.png'},
        {id:7, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707591822/Maternity/Maternity4_rns6wg.png'},
        {id:8, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707591672/Maternity/Maternity3_ftgyqz.png'},
        {id:9, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707591669/Maternity/Maternity2_vw0xvf.png'},
        {id:10, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707591637/Maternity/Maternity1_l4xunk.png'},
        {id:11, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707591636/Maternity/Maternity12_qmnfgu.png'},
        {id:12, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707591634/Maternity/Maternity11_sr93zd.png'},
        {id:13, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707591818/Maternity/Maternity23_qwmhpk.png'},
        {id:14, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707591815/Maternity/Maternity22_m7h986.png'},
        {id:15, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707591813/Maternity/Maternity21_mhztjt.png'},
        {id:16, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707591810/Maternity/Maternity20_rk1pwu.png'},
        {id:17, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707591808/Maternity/Maternity19_rihgvf.png'},
        {id:18, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707591804/Maternity/Maternity18_cin93g.png'},
        {id:19, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707591802/Maternity/Maternity17_r7eatq.png'},
        {id:20, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707591784/Maternity/Maternity31_vcn235.png'},
        {id:21, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707591780/Maternity/Maternity30_l4zioo.png'},
        {id:22, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707591778/Maternity/Maternity29_w0n3pg.png'},
        {id:23, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707591775/Maternity/Maternity28_b9fwuv.png'},
        {id:24, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707591772/Maternity/Maternity27_fkyifx.png'},
        {id:25, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707591768/Maternity/Maternity26_wlkjxh.png'},
        {id:26, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707591766/Maternity/Maternity25_sgjc9x.png'},
        {id:27, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707591763/Maternity/Maternity24_umus1j.png'},
        {id:28, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707591798/Maternity/Maternity36_djxbcf.png'},
        {id:29, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707591796/Maternity/Maternity35_wfl90g.png'},
        {id:30, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707591792/Maternity/Maternity34_etxlcj.png'},
        {id:31, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707591789/Maternity/Maternity33_fsrboa.png'},
        {id:32, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707591786/Maternity/Maternity32_qvmabs.png'},
        {id:33, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707591757/Maternity/Maternity56_cc9ceg.png'},
        {id:34, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707591754/Maternity/Maternity55_jvjyty.png'},
        {id:35, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707591751/Maternity/Maternity54_hplrw9.png'},
        {id:36, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707591749/Maternity/Maternity53_j3hf9v.png'},
        {id:37, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707591746/Maternity/Maternity52_kaclvh.png'},
        {id:38, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707591743/Maternity/Maternity51_natscg.png'},
        {id:39, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707591740/Maternity/Maternity50_bgxdzl.png'},
        {id:40, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707591737/Maternity/Maternity49_bakmhu.png'},
        {id:41, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707591734/Maternity/Maternity48_bsgouc.png'},
        {id:42, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707591732/Maternity/Maternity47_g4hjnv.png'},
        {id:43, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707591728/Maternity/Maternity46_uywqu9.png'},
        {id:44, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707591727/Maternity/Maternity45_eo7x6y.png'},
        {id:45, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707591724/Maternity/Maternity44_pzox48.png'},
        {id:46, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707591721/Maternity/Maternity43_aanuua.png'},
        {id:47, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707591760/Maternity/Maternity57_md3qoz.png'},
        {id:48, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707591705/Maternity/Maternity71_it8sjy.png'},
        {id:49, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707591701/Maternity/Maternity69_praqoe.png'},
        {id:50, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707591698/Maternity/Maternity68_dzhdtt.png'},
        {id:51, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707591693/Maternity/Maternity66_zlp2x8.png'},
        {id:52, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707591691/Maternity/Maternity65_knytgw.png'},
        {id:53, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707591690/Maternity/Maternity64_ytplw4.png'},
        {id:54, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707591686/Maternity/Maternity63_sn3fdf.png'},
        {id:55, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707591684/Maternity/Maternity62_iajjx4.png'},
        {id:56, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707591682/Maternity/Maternity61_vwl72u.png'},
        {id:57, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707591680/Maternity/Maternity60_mwznoi.png'},
        {id:58, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707591677/Maternity/Maternity59_g2oh37.png'},
        {id:59, img: 'https://res.cloudinary.com/dqnlbtgdl/image/upload/v1707591675/Maternity/Maternity58_cif85i.png'}
    ]

  return (
    <>
         <div className='grid grid-cols-2 md:grid-cols-5 px-[24px] xl:px-20 gap-4 md:gap-4 py-[40px] md:py-[60px] xl:py-[60px]'>
            {Maternitycard.map((items)=>{return(
                <div key={items.id}>
                    <Image src={items.img} alt='Maternity' width={370} height={430} data-aos='zoom-in' data-aos-delay="200" data-aos-once="true"  />
                </div>
            )})}
        </div>
    </>
  )
}

export default Maternitycard