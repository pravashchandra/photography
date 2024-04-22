import React, {useEffect} from 'react';
import Image from 'next/image';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Card = ({service}) => {
    useEffect(() => {
        Aos.init();
      }, [])

  return (
    <>
        <div className='w-[100%%] pt-[5px] flex'>
            <div className='group cursor-pointer overflow-hidden'>
                <div className="relative">
                    {/* <Link href={service.path}> */}
                        <Image src={service.image}  alt='img_1' priority="true" className='w-[200px] md:w-[300px] h-[110px] md:h-[162px] lg:h-[210px] object-cover transition-all duration-500 rounded-[50%] border border-lightgold-100 before:duration-500' />
                    {/* </Link> */}
                    <div className="absolute w-full h-full top-0 left-0 flex flex-col justify-center items-center bg-[#C48F56] rounded-[50%] opacity-0 group-hover:opacity-100 transition-all duration-700">
                        <h3 className='text-[12px] md:text-[19px] font-josefin font-[400] text-[white] bg-[lightgold] justify-center text-center pt-2 pb-3'>{service.title}</h3>
                    </div>
                </div>

            </div>  
        </div> 
        
    </>
  )
}
export default Card
