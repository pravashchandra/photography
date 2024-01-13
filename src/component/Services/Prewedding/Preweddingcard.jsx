import React, {useEffect} from 'react';
import Image from 'next/image';
import Aos from 'aos';
import 'aos/dist/aos.css'
import img1 from '../../../../public/Images/Services/Prewedding/pre1.png'
import img2 from '../../../../public/Images/Services/Prewedding/pre2.png'
import img3 from '../../../../public/Images/Services/Prewedding/pre3.png'
import img4 from '../../../../public/Images/Services/Prewedding/pre4.png'
import img5 from '../../../../public/Images/Services/Prewedding/pre5.png'
import img7 from '../../../../public/Images/Services/Prewedding/pre7.png'
import img8 from '../../../../public/Images/Services/Prewedding/pre8.png'
import img9 from '../../../../public/Images/Services/Prewedding/pre9.png'
import img10 from '../../../../public/Images/Services/Prewedding/pre10.png'
import img11 from '../../../../public/Images/Services/Prewedding/pre11.png'
import img12 from '../../../../public/Images/Services/Prewedding/pre12.png'
import img13 from '../../../../public/Images/Services/Prewedding/pre13.png'
import img14 from '../../../../public/Images/Services/Prewedding/pre14.png'
import img15 from '../../../../public/Images/Services/Prewedding/pre15.png'
import img16 from '../../../../public/Images/Services/Prewedding/pre16.png'
import img17 from '../../../../public/Images/Services/Prewedding/pre17.png'
import img18 from '../../../../public/Images/Services/Prewedding/pre18.png'
import img19 from '../../../../public/Images/Services/Prewedding/pre19.png'
import img20 from '../../../../public/Images/Services/Prewedding/pre20.png'
import img21 from '../../../../public/Images/Services/Prewedding/pre21.png'
import img22 from '../../../../public/Images/Services/Prewedding/pre22.png'

const Preweddingcard = () => {
    useEffect(() => {
        Aos.init();
      }, [])

    const Preweddingdata =[
        {id:1, img: img1},
        {id:2, img: img2},
        {id:3, img: img3},
        {id:4, img: img4},
        {id:5, img: img5},
        {id:7, img: img7},
        {id:8, img: img8},
        {id:9, img: img9},
        {id:10, img: img10},
        {id:11, img: img11},
        {id:12, img: img12},
        {id:13, img: img13},
        {id:14, img: img14},
        {id:15, img: img15},
        {id:16, img: img16},
        {id:17, img: img17},
        {id:18, img: img18},
        {id:19, img: img19},
        {id:20, img: img20},
        {id:21, img: img21},
        {id:22, img: img22}
    ]

  return (
    <>
         <div className='grid grid-cols-2 md:grid-cols-5 px-[24px] xl:px-20 gap-4 md:gap-4 py-[40px] md:py-[60px] xl:py-[60px]'>
            {Preweddingdata.map((items)=>{return(
                <div key={items.id}>
                    <Image src={items.img} alt='Prewedding'data-aos='zoom-in' data-aos-delay="200" data-aos-once="true"/>
                </div>
            )})}
        </div>
    </>
  )
}

export default Preweddingcard