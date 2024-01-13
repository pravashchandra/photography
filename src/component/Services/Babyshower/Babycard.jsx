import React, {useEffect} from 'react';
import Image from 'next/image';
import Aos from 'aos';
import 'aos/dist/aos.css'
import baby1 from '../../../../public/Images/Services/Babyshower/baby1.png';
import baby2 from '../../../../public/Images/Services/Babyshower/baby2.png';
import baby3 from '../../../../public/Images/Services/Babyshower/baby3.png';
import baby0 from '../../../../public/Images/Services/Babyshower/baby0.png';
import baby4 from '../../../../public/Images/Services/Babyshower/baby4.png';
import baby5 from '../../../../public/Images/Services/Babyshower/baby5.png';
import baby6 from '../../../../public/Images/Services/Babyshower/baby6.png';
import baby7 from '../../../../public/Images/Services/Babyshower/baby7.png';
import baby8 from '../../../../public/Images/Services/Babyshower/baby8.png';
import baby9 from '../../../../public/Images/Services/Babyshower/baby9.png';
import baby10 from '../../../../public/Images/Services/Babyshower/baby10.png';
import baby11 from '../../../../public/Images/Services/Babyshower/baby11.png';
import baby12 from '../../../../public/Images/Services/Babyshower/baby12.png';
import baby13 from '../../../../public/Images/Services/Babyshower/baby13.png';
import baby14 from '../../../../public/Images/Services/Babyshower/baby14.png';
import baby15 from '../../../../public/Images/Services/Babyshower/baby15.png';
import baby16 from '../../../../public/Images/Services/Babyshower/baby16.png';
import baby17 from '../../../../public/Images/Services/Babyshower/baby17.png';
import baby18 from '../../../../public/Images/Services/Babyshower/baby18.png';
import baby19 from '../../../../public/Images/Services/Babyshower/baby19.png';
import baby20 from '../../../../public/Images/Services/Babyshower/baby20.png';
import baby21 from '../../../../public/Images/Services/Babyshower/baby21.png';
import baby22 from '../../../../public/Images/Services/Babyshower/baby22.png';
import baby23 from '../../../../public/Images/Services/Babyshower/baby23.png';
import baby24 from '../../../../public/Images/Services/Babyshower/baby24.png';
import baby25 from '../../../../public/Images/Services/Babyshower/baby25.png';
import baby26 from '../../../../public/Images/Services/Babyshower/baby26.png';
import baby27 from '../../../../public/Images/Services/Babyshower/baby27.png';
import baby28 from '../../../../public/Images/Services/Babyshower/baby28.png';
import baby29 from '../../../../public/Images/Services/Babyshower/baby29.png';
import baby30 from '../../../../public/Images/Services/Babyshower/baby30.png';
import baby31 from '../../../../public/Images/Services/Babyshower/baby31.png';
import baby32 from '../../../../public/Images/Services/Babyshower/baby32.png';
import baby33 from '../../../../public/Images/Services/Babyshower/baby33.png';
import baby34 from '../../../../public/Images/Services/Babyshower/baby34.png';
import baby35 from '../../../../public/Images/Services/Babyshower/baby35.png';
import baby36 from '../../../../public/Images/Services/Babyshower/baby36.png';
import baby37 from '../../../../public/Images/Services/Babyshower/baby37.png';
import baby38 from '../../../../public/Images/Services/Babyshower/baby38.png';
import baby39 from '../../../../public/Images/Services/Babyshower/baby39.png';



const Babyshower = () => {
    useEffect(() => {
        Aos.init();
      }, [])

    const babycard =[
        {id:1, img: baby1},
        {id:2, img: baby2},
        {id:3, img: baby3},
        {id:4, img: baby0},
        {id:5, img: baby4},
        {id:6, img: baby5},
        {id:7, img: baby6},
        {id:8, img: baby7},
        {id:9, img: baby8},
        {id:10, img: baby9},
        {id:11, img: baby10},
        {id:12, img: baby11},
        {id:13, img: baby12},
        {id:14, img: baby13},
        {id:15, img: baby14},
        {id:16, img: baby15},
        {id:17, img: baby16},
        {id:18, img: baby17},
        {id:19, img: baby18},
        {id:20, img: baby19},
        {id:21, img: baby20},
        {id:22, img: baby21},
        {id:23, img: baby22},
        {id:24, img: baby23},
        {id:25, img: baby24},
        {id:26, img: baby25},
        {id:27, img: baby26},
        {id:28, img: baby27},
        {id:29, img: baby28},
        {id:30, img: baby29},
        {id:31, img: baby30},
        {id:32, img: baby31},
        {id:33, img: baby33},
        {id:34, img: baby34},
        {id:35, img: baby35},
        {id:36, img: baby36},
        {id:37, img: baby37},
        {id:38, img: baby38},
        {id:39, img: baby39},
    ]

  return (
    <>
         <div className='grid grid-cols-2 md:grid-cols-5 px-[24px] xl:px-20 gap-4 md:gap-4 py-[40px] md:py-[60px] xl:py-[60px]'>
            {babycard.map((items)=>{return(
                <div key={items.id}>
                    <Image src={items.img} alt='babyshower' data-aos='zoom-in' data-aos-delay="200" data-aos-once="true"  />
                </div>
            )})}
        </div>
    </>
  )
}

export default Babyshower