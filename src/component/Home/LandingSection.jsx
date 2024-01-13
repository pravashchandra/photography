import Image from 'next/image'
import Link from 'next/link';
import AboutUs from '@/component/Home/AboutMe'
import NavBar from '@/component/NavBar'
import profile from '../../../public/Images/Home/pravash2.png'
import { HiChevronRight } from "react-icons/hi";

const LandingSection = () => {
  return (
    <div>
      <div>
      
      </div>
      <div className='flex w-full px-20 py-20 items-center'>
          <div className='w-[50%] justify-start items-center'>
              <h1 className='flex text-[3em] font-bold'>Hii, Im <AboutUs /></h1>
              <p className='mt-6 text-[19px] font-[300] w-[65%]'>High level experience in web design and development knowledge, producing quality work.</p>
              <div className='w-[full] flex gap-3'>
                <button className='flex text-[white]  text-[17px] font-[500] bg-[blue] border rounded-[25px] px-9 py-3 mt-12 gap-1'><Link href='/projects'>View Work</Link><span className='flex text-[25px] font-[400] mt-[2xpx]'>< HiChevronRight /></span></button>
                <button className='flex text-[white]  text-[17px] font-[500] bg-[blue] border rounded-[25px] px-9 py-3 mt-12 gap-1'><Link href='/contact'>Hire Me</Link><span className='flex text-[25px] font-[400] mt-[2xpx]'>< HiChevronRight /></span></button>
              </div>
          </div>
        
          <div className='w-[50%] justify-center m-auto'>
            <Image src={profile} width={500} height={500} alt='Pravash' className='m-auto' />
          </div> 
      </div>   
    </div>
  )
}

export default LandingSection
