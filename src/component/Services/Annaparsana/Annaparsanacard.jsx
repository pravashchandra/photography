import React, {useEffect} from 'react';
import Image from 'next/image';
import Aos from 'aos';
import 'aos/dist/aos.css'
import Annaone from '../../../../public/Images/Services/Annaparsana/Anna1.png';
import Annatwo from '../../../../public/Images/Services/Annaparsana/Anna2.png';
import Annathree from '../../../../public/Images/Services/Annaparsana/Anna3.png';
import Annafour from '../../../../public/Images/Services/Annaparsana/Anna4.png';
import Annafive from '../../../../public/Images/Services/Annaparsana/Anna5.png';
import Annasix from '../../../../public/Images/Services/Annaparsana/Anna6.png';
import Annaseven from '../../../../public/Images/Services/Annaparsana/Anna7.png';
import Annaeight from '../../../../public/Images/Services/Annaparsana/Anna8.png';
import Annanine from '../../../../public/Images/Services/Annaparsana/Anna9.png';
import Annaten from '../../../../public/Images/Services/Annaparsana/Anna10.png';
import Annaeleven from '../../../../public/Images/Services/Annaparsana/Anna11.png';
import Annatwelve from '../../../../public/Images/Services/Annaparsana/Anna12.png';
import Annathirteen from '../../../../public/Images/Services/Annaparsana/Anna13.png';


const Annaparsanacard = () => {
    useEffect(() => {
        Aos.init();
      }, [])

    const Annaparsanadata =[
        {id:1, img: Annaone},
        {id:2, img: Annatwo},
        {id:3, img: Annathree},
        {id:4, img: Annafour},
        {id:5, img: Annafive},
        {id:6, img: Annasix},
        {id:7, img: Annaseven},
        {id:8, img: Annaeight},
        {id:9, img: Annanine},
        {id:10, img: Annaten},
        {id:11, img: Annaeleven},
        {id:12, img: Annatwelve},
        {id:13, img: Annathirteen}
    ]

  return (
    <>
        <div className='grid grid-cols-2 md:grid-cols-5 px-[24px] xl:px-20 gap-4 md:gap-4 py-[40px] md:py-[60px] xl:py-[60px]'>
            {Annaparsanadata.map((items)=>{return(
                <div key={items.id}>
                    <Image src={items.img} alt='Annaparsana' data-aos='zoom-in' data-aos-delay="200" data-aos-once="true" />
                </div>
            )})}
        </div>
    </>
  )
}

export default Annaparsanacard