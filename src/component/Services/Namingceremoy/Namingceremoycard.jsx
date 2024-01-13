import React, {useEffect} from 'react';
import Image from 'next/image';
import Aos from 'aos';
import 'aos/dist/aos.css'
import Namingone from '../../../../public/Images/Services/Naming/Naming1.png';
import Namingtwo from '../../../../public/Images/Services/Naming/Naming2.png';
import Namingthree from '../../../../public/Images/Services/Naming/Naming3.png';
import Namingfive from '../../../../public/Images/Services/Naming/Naming4.png';
import Namingsix from '../../../../public/Images/Services/Naming/Naming5.png';
import Namingseven from '../../../../public/Images/Services/Naming/Naming6.png';
import Namingeight from '../../../../public/Images/Services/Naming/Naming7.png';
import Namingnine from '../../../../public/Images/Services/Naming/Naming8.png';
import Namingten from '../../../../public/Images/Services/Naming/Naming9.png';
import Namingeleven from '../../../../public/Images/Services/Naming/Naming14.png';
import Namingtwelve from '../../../../public/Images/Services/Naming/Naming15.png';
import Namingthirteen from '../../../../public/Images/Services/Naming/Naming16.png';
import Namingfifteen from '../../../../public/Images/Services/Naming/Naming17.png';
import Namingsixteen from '../../../../public/Images/Services/Naming/Naming18.png';
import Namingseventeen from '../../../../public/Images/Services/Naming/Naming19.png';
import Namingeighteen from '../../../../public/Images/Services/Naming/Naming20.png';
import Namingninteen from '../../../../public/Images/Services/Naming/Naming21.png';
import Namingtwenty from '../../../../public/Images/Services/Naming/Naming22.png';
import Namingtwentyone from '../../../../public/Images/Services/Naming/Naming23.png';
import Namingtwentytwo from '../../../../public/Images/Services/Naming/Naming29.png';
import Namingtwentythree from '../../../../public/Images/Services/Naming/Naming30.png';
import Namingtwentyfour from '../../../../public/Images/Services/Naming/Naming31.png';
import Namingtwentyfive from '../../../../public/Images/Services/Naming/Naming32.png';
import Namingtwentysix from '../../../../public/Images/Services/Naming/Naming33.png';

const Namingceremony = () => {
    useEffect(() => {
        Aos.init();
      }, [])

    const Namingceremonydata =[
        {id:1, img: Namingone},
        {id:2, img: Namingtwo},
        {id:3, img: Namingthree},
        {id:4, img: Namingfive},
        {id:5, img: Namingsix},
        {id:6, img: Namingseven},
        {id:7, img: Namingeight},
        {id:8, img: Namingnine},
        {id:9, img: Namingten},
        {id:10, img: Namingeleven},
        {id:11, img: Namingtwelve},
        {id:12, img: Namingthirteen},
        {id:13, img: Namingfifteen},
        {id:14, img: Namingsixteen},
        {id:15, img: Namingseventeen},
        {id:16, img: Namingeighteen},
        {id:17, img: Namingninteen},
        {id:18, img: Namingtwenty},
        {id:19, img: Namingtwentyone},
        {id:20, img: Namingtwentytwo},
        {id:21, img: Namingtwentythree},
        {id:22, img: Namingtwentyfour},
        {id:23, img: Namingtwentyfive},
        {id:24, img: Namingtwentysix}
    ]

  return (
    <>
         <div className='grid grid-cols-2 md:grid-cols-5 px-[24px] xl:px-20 gap-4 md:gap-4 py-[40px] md:py-[60px] xl:py-[60px]'>
            {Namingceremonydata.map((items)=>{return(
                <div key={items.id}>
                    <Image src={items.img} alt='Namingceremony' data-aos='zoom-in' data-aos-delay="200" data-aos-once="true"/>
                </div>
            )})}
        </div>
    </>
  )
}

export default Namingceremony