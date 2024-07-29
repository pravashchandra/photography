import React, {useEffect} from 'react';
import Image from 'next/image';
import Aos from 'aos';
import 'aos/dist/aos.css'
import Link from 'next/link';

const Card = ({service}) => {
    useEffect(() => {
        Aos.init();
      }, [])

  return (
    <>
        <div className='w-[100%%] pt-[5px] flex'>
            <div className='group cursor-pointer overflow-hidden'>
                  <Link href={`${service.path}`}>
                <div className="relative inline-block">
                    <Image src={service.image}  alt='img_1' priority="true" className='w-[200px] md:w-[300px] h-[110px] md:h-[162px] lg:h-[210px] object-cover rounded-[50%] hover:scale-105' />
                    <div className="absolute inset-0 bg-gold bg-opacity-70 flex items-center justify-center rounded-[50%] opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <h3 className='text-[12px] md:text-[20px] font-josefin font-[400] text-[white] tracking-[1px]'>{service.title}</h3>
                    </div>
                </div>
                </Link>
            </div>  
        </div> 
        
    </>
  )
}
export default Card
