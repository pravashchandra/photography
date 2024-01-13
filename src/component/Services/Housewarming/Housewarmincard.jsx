import React, {useEffect} from 'react';
import Image from 'next/image';
import Aos from 'aos';
import 'aos/dist/aos.css'
import House1 from '../../../../public/Images/Services/Housewarming/House1.png';
import House2 from '../../../../public/Images/Services/Housewarming/House2.png';
import House3 from '../../../../public/Images/Services/Housewarming/House3.png';
import House4 from '../../../../public/Images/Services/Housewarming/House4.png';
import House5 from '../../../../public/Images/Services/Housewarming/House5.png';
import House6 from '../../../../public/Images/Services/Housewarming/House6.png';
import House7 from '../../../../public/Images/Services/Housewarming/House7.png';
import House8 from '../../../../public/Images/Services/Housewarming/House8.png';
import House9 from '../../../../public/Images/Services/Housewarming/House9.png';
import House10 from '../../../../public/Images/Services/Housewarming/House10.png';
import House11 from '../../../../public/Images/Services/Housewarming/House11.png';
import House12 from '../../../../public/Images/Services/Housewarming/House12.png';
import House13 from '../../../../public/Images/Services/Housewarming/House13.png';
import House14 from '../../../../public/Images/Services/Housewarming/House14.png';
import House15 from '../../../../public/Images/Services/Housewarming/House15.png';
import House16 from '../../../../public/Images/Services/Housewarming/House16.png';
import House17 from '../../../../public/Images/Services/Housewarming/House17.png';
import House18 from '../../../../public/Images/Services/Housewarming/House18.png';
import House19 from '../../../../public/Images/Services/Housewarming/House19.png';
import House20 from '../../../../public/Images/Services/Housewarming/House20.png';
import House21 from '../../../../public/Images/Services/Housewarming/House21.png';
import House22 from '../../../../public/Images/Services/Housewarming/House22.png';



const Housecard = () => {
    useEffect(() => {
        Aos.init();
      }, [])

    const Housedata =[
        {id:1, img: House1},
        {id:2, img: House2},
        {id:3, img: House3},
        {id:4, img: House22},
        {id:5, img: House4},
        {id:6, img: House5},
        {id:7, img: House6},
        {id:8, img: House7},
        {id:9, img: House8},
        {id:10, img: House9},
        {id:11, img: House10},
        {id:12, img: House11},
        {id:13, img: House12},
        {id:14, img: House13},
        {id:15, img: House14},
        {id:16, img: House15},
        {id:17, img: House16},
        {id:18, img: House17},
        {id:19, img: House18},
        {id:20, img: House19},
        {id:21, img: House20},
        {id:22, img: House21}
    ]

  return (
    <>
         <div className='grid grid-cols-2 md:grid-cols-5 px-[24px] xl:px-20 gap-4 md:gap-4 py-[40px] md:py-[60px] xl:py-[60px]'>
            {Housedata.map((items)=>{return(
                <div key={items.id}>
                    <Image src={items.img} alt='Housewarming' data-aos='zoom-in' data-aos-delay="200" data-aos-once="true" />
                </div>
            )})}
        </div>
    </>
  )
}

export default Housecard