import React, {useEffect} from 'react';
import Image from 'next/image';
import Aos from 'aos';
import 'aos/dist/aos.css'
import corporate1 from '../../../../public/Images/Services/Corporate/corporate1.png';
import corporate2 from '../../../../public/Images/Services/Corporate/corporate2.png';
import corporate3 from '../../../../public/Images/Services/Corporate/corporate3.png';
import corporate4 from '../../../../public/Images/Services/Corporate/corporate4.png';
import corporate5 from '../../../../public/Images/Services/Corporate/corporate5.png';
import corporate6 from '../../../../public/Images/Services/Corporate/corporate6.png';
import corporate7 from '../../../../public/Images/Services/Corporate/corporate7.png';
import corporate8 from '../../../../public/Images/Services/Corporate/corporate8.png';
import corporate9 from '../../../../public/Images/Services/Corporate/corporate9.png';
import corporate10 from '../../../../public/Images/Services/Corporate/corporate10.png';
import corporate11 from '../../../../public/Images/Services/Corporate/corporate11.png';
import corporate12 from '../../../../public/Images/Services/Corporate/corporate12.png';
import corporate13 from '../../../../public/Images/Services/Corporate/corporate13.png';
import corporate14 from '../../../../public/Images/Services/Corporate/corporate14.png';
import corporate15 from '../../../../public/Images/Services/Corporate/corporate15.png';
import corporate16 from '../../../../public/Images/Services/Corporate/corporate16.png';
import corporate17 from '../../../../public/Images/Services/Corporate/corporate17.png';
import corporate18 from '../../../../public/Images/Services/Corporate/corporate18.png';
import corporate19 from '../../../../public/Images/Services/Corporate/corporate19.png';
import corporate20 from '../../../../public/Images/Services/Corporate/corporate20.png';
import corporate21 from '../../../../public/Images/Services/Corporate/corporate21.png';
import corporate22 from '../../../../public/Images/Services/Corporate/corporate22.png';
import corporate23 from '../../../../public/Images/Services/Corporate/corporate23.png';
import corporate24 from '../../../../public/Images/Services/Corporate/corporate24.png';
import corporate25 from '../../../../public/Images/Services/Corporate/corporate25.png';
import corporate26 from '../../../../public/Images/Services/Corporate/corporate26.png';
import corporate27 from '../../../../public/Images/Services/Corporate/corporate27.png';
import corporate28 from '../../../../public/Images/Services/Corporate/corporate28.png';
import corporate29 from '../../../../public/Images/Services/Corporate/corporate29.png';
import corporate30 from '../../../../public/Images/Services/Corporate/corporate30.png';
import corporate31 from '../../../../public/Images/Services/Corporate/corporate31.png';
import corporate32 from '../../../../public/Images/Services/Corporate/corporate32.png';
import corporate33 from '../../../../public/Images/Services/Corporate/corporate33.png';
import corporate34 from '../../../../public/Images/Services/Corporate/corporate34.png';



const Corporatecard = () => {
    useEffect(() => {
        Aos.init();
      }, [])

    const corporatedata =[
        {id:1, img: corporate1},
        {id:2, img: corporate2},
        {id:3, img: corporate3},
        {id:4, img: corporate27},
        {id:5, img: corporate4},
        {id:6, img: corporate5},
        {id:7, img: corporate6},
        {id:8, img: corporate7},
        {id:9, img: corporate8},
        {id:10, img: corporate9},
        {id:11, img: corporate10},
        {id:12, img: corporate11},
        {id:13, img: corporate12},
        {id:14, img: corporate13},
        {id:15, img: corporate14},
        {id:16, img: corporate15},
        {id:17, img: corporate16},
        {id:18, img: corporate17},
        {id:19, img: corporate18},
        {id:20, img: corporate19},
        {id:21, img: corporate20},
        {id:22, img: corporate21},
        {id:23, img: corporate22},
        {id:24, img: corporate23},
        {id:25, img: corporate24},
        {id:26, img: corporate25},
        {id:27, img: corporate26},
        {id:28, img: corporate28},
        {id:29, img: corporate29},
        {id:30, img: corporate30},
        {id:31, img: corporate31},
        {id:32, img: corporate32},
        {id:33, img: corporate33},
        {id:34, img: corporate34}
    ]

  return (
    <>
        <div className='grid grid-cols-2 md:grid-cols-5 px-[24px] xl:px-20 gap-4 md:gap-4 py-[40px] md:py-[60px] xl:py-[60px]'>
            {corporatedata.map((items)=>{return(
                <div key={items.id}>
                    <Image src={items.img} alt='Corporate' data-aos='zoom-in' data-aos-delay="200" data-aos-once="true"  />
                </div>
            )})}
        </div>
    </>
  )
}

export default Corporatecard