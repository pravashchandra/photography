import React, {useEffect} from 'react';
import Image from 'next/image';
import Aos from 'aos';
import 'aos/dist/aos.css'
import Weddingimg from '../../../../public/Images/Services/Wedding/Weeding_service.png'
import Weddingimgone from '../../../../public/Images/Services/Wedding/Weeding_service22.png'
import Weddingimgtwo from '../../../../public/Images/Services/Wedding/Weeding_service21.png'
import Weddingimgthree from '../../../../public/Images/Services/Wedding/Weeding_service2.png'
import Weddingimgfive from '../../../../public/Images/Services/Wedding/Weeding_service3.png'
import Weddingimgsix from '../../../../public/Images/Services/Wedding/Weeding_service5.png'
import Weddingimgseven from '../../../../public/Images/Services/Wedding/Weeding_service6.png'
import Weddingimgeight from '../../../../public/Images/Services/Wedding/Weeding_service7.png'
import Weddingimgnine from '../../../../public/Images/Services/Wedding/Weeding_service8.png'
import Weddingimgten from '../../../../public/Images/Services/Wedding/Weeding_service9.png'
import Weddingimgeleven from '../../../../public/Images/Services/Wedding/Weeding_service10.png'
import Weddingimgtwelve from '../../../../public/Images/Services/Wedding/Weeding_service11.png'
import Weddingimgthirteen from '../../../../public/Images/Services/Wedding/Weeding_service12.png'
import Weddingimgfourteen from '../../../../public/Images/Services/Wedding/Weeding_service13.png'
import Weddingimgfifteen from '../../../../public/Images/Services/Wedding/Weeding_service14.png'
import Weddingimgsixteen from '../../../../public/Images/Services/Wedding/Weeding_service15.png'
import Weddingimgseventeen from '../../../../public/Images/Services/Wedding/Weeding_service16.png'
import Weddingimgeighteen from '../../../../public/Images/Services/Wedding/Weeding_service17.png'
import Weddingimgninteen from '../../../../public/Images/Services/Wedding/Weeding_service18.png'
import Weddingimgtweenty from '../../../../public/Images/Services/Wedding/Weeding_service19.png'
import Weddingimgtweentyone from '../../../../public/Images/Services/Wedding/Weeding_service20.png'
import Weddingimgtweentytwo from '../../../../public/Images/Services/Wedding/Weeding_service24.png'
import Weddingimgtweentythree from '../../../../public/Images/Services/Wedding/Weeding_service1.png'
import Weddingimgtweentyfour from '../../../../public/Images/Services/Wedding/Weeding_service4.png'
import Weddingimgtweentyfive from '../../../../public/Images/Services/Wedding/Weeding_service26.png'
import Weddingimgtweentysix from '../../../../public/Images/Services/Wedding/Weeding_service25.png'


const Weddingcard = () => {
    useEffect(() => {
        Aos.init();
      }, [])

    const Weddingdata =[
        {id:1, img: Weddingimg},
        {id:2, img: Weddingimgone},
        {id:3, img: Weddingimgtwo},
        {id:4, img: Weddingimgthree},
        {id:5, img: Weddingimgfive},
        {id:6, img: Weddingimgsix},
        {id:7, img: Weddingimgfive},
        {id:8, img: Weddingimgseven},
        {id:9, img: Weddingimgeight},
        {id:10, img: Weddingimgnine},
        {id:11, img: Weddingimgten},
        {id:12, img: Weddingimgeleven},
        {id:13, img: Weddingimgtwelve},
        {id:14, img: Weddingimgthirteen},
        {id:15, img: Weddingimgfourteen},
        {id:16, img: Weddingimgfifteen},
        {id:17, img: Weddingimgsixteen},
        {id:18, img: Weddingimgseventeen},
        {id:19, img: Weddingimgeighteen},
        {id:20, img: Weddingimgninteen},
        {id:21, img: Weddingimgtweenty},
        {id:22, img: Weddingimgtweentyone},
        {id:23, img: Weddingimgtweentytwo},
        {id:24, img: Weddingimgtweentythree},
        {id:25, img: Weddingimgtweentyfour},
        {id:26, img: Weddingimgtweentyfive},
        {id:27, img: Weddingimgtweentysix}
    ]

  return (
    <>
         <div className='grid grid-cols-2 md:grid-cols-5 px-[24px] xl:px-20 gap-4 md:gap-4 py-[40px] md:py-[60px] xl:py-[60px]'>
            {Weddingdata.map((items)=>{return(
                <div key={items.id}>
                    <Image src={items.img} alt='Wedding' data-aos='zoom-in' data-aos-delay="200" data-aos-once="true"/>
                </div>
            )})}
        </div>
    </>
  )
}

export default Weddingcard