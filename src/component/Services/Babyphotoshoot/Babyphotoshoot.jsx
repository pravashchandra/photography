import React, {useEffect} from 'react';
import Image from 'next/image';
import Aos from 'aos';
import 'aos/dist/aos.css'
import babyphoto1 from '../../../../public/Images/Services/Babyphotoshoot/babyphoto1.png';
import babyphoto2 from '../../../../public/Images/Services/Babyphotoshoot/babyphoto2.png';
import babyphoto3 from '../../../../public/Images/Services/Babyphotoshoot/babyphoto3.png';
import babyphoto4 from '../../../../public/Images/Services/Babyphotoshoot/babyphoto4.png';
import babyphoto5 from '../../../../public/Images/Services/Babyphotoshoot/babyphoto5.png';
import babyphoto6 from '../../../../public/Images/Services/Babyphotoshoot/babyphoto6.png';
import babyphoto7 from '../../../../public/Images/Services/Babyphotoshoot/babyphoto7.png';
import babyphoto8 from '../../../../public/Images/Services/Babyphotoshoot/babyphoto8.png';
import babyphoto9 from '../../../../public/Images/Services/Babyphotoshoot/babyphoto9.png';
import babyphoto10 from '../../../../public/Images/Services/Babyphotoshoot/babyphoto10.png';
import babyphoto11 from '../../../../public/Images/Services/Babyphotoshoot/babyphoto11.png';
import babyphoto12 from '../../../../public/Images/Services/Babyphotoshoot/babyphoto12.png';
import babyphoto13 from '../../../../public/Images/Services/Babyphotoshoot/babyphoto13.png';
import babyphoto14 from '../../../../public/Images/Services/Babyphotoshoot/babyphoto14.png';
import babyphoto15 from '../../../../public/Images/Services/Babyphotoshoot/babyphoto15.png';
import babyphoto16 from '../../../../public/Images/Services/Babyphotoshoot/babyphoto16.png';
import babyphoto17 from '../../../../public/Images/Services/Babyphotoshoot/babyphoto17.png';
import babyphoto18 from '../../../../public/Images/Services/Babyphotoshoot/babyphoto18.png';
import babyphoto19 from '../../../../public/Images/Services/Babyphotoshoot/babyphoto19.png';
import babyphoto20 from '../../../../public/Images/Services/Babyphotoshoot/babyphoto20.png';
import babyphoto21 from '../../../../public/Images/Services/Babyphotoshoot/babyphoto21.png';
import babyphoto22 from '../../../../public/Images/Services/Babyphotoshoot/babyphoto22.png';
import babyphoto23 from '../../../../public/Images/Services/Babyphotoshoot/babyphoto23.png';
import babyphoto24 from '../../../../public/Images/Services/Babyphotoshoot/babyphoto24.png';
import babyphoto25 from '../../../../public/Images/Services/Babyphotoshoot/babyphoto25.png';
import babyphoto26 from '../../../../public/Images/Services/Babyphotoshoot/babyphoto26.png';
import babyphoto27 from '../../../../public/Images/Services/Babyphotoshoot/babyphoto27.png';



const Babyphotoshoot = () => {
    useEffect(() => {
        Aos.init();
      }, [])

    const babyphotophotocard =[
        {id:1, img: babyphoto1},
        {id:2, img: babyphoto2},
        {id:3, img: babyphoto3},
        {id:4, img: babyphoto27},
        {id:5, img: babyphoto4},
        {id:6, img: babyphoto5},
        {id:7, img: babyphoto6},
        {id:8, img: babyphoto7},
        {id:9, img: babyphoto8},
        {id:10, img: babyphoto9},
        {id:11, img: babyphoto10},
        {id:12, img: babyphoto11},
        {id:13, img: babyphoto12},
        {id:14, img: babyphoto13},
        {id:15, img: babyphoto14},
        {id:16, img: babyphoto15},
        {id:17, img: babyphoto16},
        {id:18, img: babyphoto17},
        {id:19, img: babyphoto18},
        {id:20, img: babyphoto19},
        {id:21, img: babyphoto20},
        {id:22, img: babyphoto21},
        {id:23, img: babyphoto22},
        {id:24, img: babyphoto23},
        {id:25, img: babyphoto24},
        {id:26, img: babyphoto25},
        {id:27, img: babyphoto26}
    ]

  return (
    <>
         <div className='grid grid-cols-2 md:grid-cols-5 px-[24px] xl:px-20 gap-4 md:gap-4 py-[40px] md:py-[60px] xl:py-[60px]'>
            {babyphotophotocard.map((items)=>{return(
                <div key={items.id}>
                    <Image src={items.img} alt='Babyphotoshoot' data-aos='zoom-in' data-aos-delay="200" data-aos-once="true" />
                </div>
            )})}
        </div>
    </>
  )
}

export default Babyphotoshoot