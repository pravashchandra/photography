import React,{useEffect} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import footerbg from '../../public/Images/Footer/new_footer.png';
import footerbgmob from '../../public/Images/Footer/footerbg.png';
import footerlogo from '../../public/Images/Proadosh_logo.png';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Footer = () => {
  useEffect(() => {
    Aos.init();
  }, [])
  
  const colone =[
    {id:1, name:'Home', url: '/'},
    {id:2, name:'About', url: '/about'},
    {id:3, name:'Gallery', url: '/about'},
    {id:4, name:'Contact', url: '/contact'}
  ]
  const coltwo =[
    {id:1, name: "Wedding", url: '/services/wedding'},
    {id:2, name: "Pre Wedding", url: '/services/prewedding'},
    {id:3, name: "Engagement", url: '/services/engagement'},
    {id:4, name: "Birthday", url: '/services/birthday'},
    {id:5, name: "Baby Shower", url: '/services/babyshower'},
    {id:6, name: "Annaprasanna", url: '/services/annaprasanna-shoot'},
  ]
  const colthree =[
    {id:1, name: "Anniversary", url: '/services/anniversary'},
    {id:2, name: "Baby Photoshoot", url: '/services/baby-photoshoot'},
    {id:3, name: "Corporate", url: '/services/corporate'},
    {id:4, name: "House Warming", url: '/services/housewarming'},
    {id:5, name: "Maternity", url: '/services/maternity'},
    {id:6, name: "Naming Ceremony", url: '/services/naming-ceremony'},
  ]

  return (
    <>
      <div className='relative' data-aos ='fade' data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" data-aos-once="true">
          <Image src={footerbg} 
            width={1950}
            height={400}
            alt='Logo'
            className='hidden md:flex object-cover md:h-[420px] xl:h-[100%]'
          />
          <Image src={footerbgmob} 
            width={650}
            height={650}
            alt='Logo'
            className='md:hidden h-[750px] object-cover'
          />
          <div>
          <div className='w-full absolute top-[20px] md:top-[15%] text-left flex flex-col'>
            <div className='flex flex-col md:flex-row justify-between px-[20px] md:px-[24px] xl:px-20'>
              
              
              {/* Footer first Column starts here */}
              <div className='md:w-[25%] md:hidden lg:flex'>
                <React.Fragment>
                  <Link href='/'>
                    <Image src={footerlogo} alt='Logo' width={115} />
                  </Link>
                </React.Fragment>
              </div>
              {/* Footer first Column ends here */}

              
              {/* Footer second Column starts here */}
              <div className='md:w-[25%] mt-[15px] md:mt-[0px]'>
                <React.Fragment>
                <h3 className='text-white mb-[10px] md:mb-[20px] mt-[15px] md:mt-[0px] font-[400] text-[18px] md:text-[20px] tracking-[1px] font-coromont'>Quick Links</h3>
                  {colone.map((footerone) =>{
                    return(
                      <ul key={footerone.id} className='text-[#ececec] pb-[12px] text-[14.5px]'>
                        <Link href={footerone.url}>
                        <li className='space-y-8 md:tracking-[0.7px] transition-all duration-150 hover:text-gold'>{footerone.name}</li>
                        </Link>
                      </ul>
                    )
                  })}
                </React.Fragment>
              
              { /* Footer second Column ends here */}  
              </div>


              {/* Footer third Column starts here */}
              <div className='flex md:w-[50%]'>
              <div className='w-[50%] md:w-[100%]'>
                <React.Fragment>
                <h3 className='text-white mb-[10px] md:mb-[20px] mt-[15px] md:mt-[0px] font-[400] text-[18px] md:text-[20px] tracking-[1px] font-coromont'>Services</h3>
                  {coltwo.map((footertwo) =>{
                    return(
                      <ul key={footertwo.id} className='text-[#ececec] pb-[12px] text-[14.5px]'>
                        <Link href={footertwo.url}>
                          <li className='space-y-8 md:tracking-[0.7px] transition-all duration-150 hover:text-gold'>{footertwo.name}</li>
                        </Link>
                      </ul>
                    )
                  })}
                </React.Fragment>
              </div>
              {/* Footer third Column ends here */}
           

              {/* Footer fourth Column starts here */}
              <div className='w-[50%] md:w-[100%]'>
                <React.Fragment>
                <h3 className='text-white mb-[10px] md:mb-[20px] mt-[15px] md:mt-[0px] font-[400] text-[18px] md:text-[20px] tracking-[1px] font-coromont'>Other Services</h3>
                  {colthree.map((footerthree) =>{
                    return(
                      <ul key={footerthree.id} className='text-[#ececec] pb-[12px] text-[14.5px] '>
                        <Link href={footerthree.url}>
                          <li className='space-y-8 md:tracking-[0.7px] transition-all duration-150 hover:text-gold'>{footerthree.name}</li>
                        </Link>
                      </ul>
                    )
                  })}
                </React.Fragment>
              </div>
              </div>
              {/* Footer fourth Column ends here */}
              <div className='text-white text-[14px] flex flex-col mt-[15px] md:mt-[0px]'>
                <React.Fragment>
                <h3 className='mb-[10px] md:mb-[20px] font-[400] text-[18px] md:text-[20px] tracking-[1px] font-coromont'>Social Links</h3>
                <Link href='tel:8984103719' className='md:tracking-[0.7px]'>
                    <span>+91 8984103719</span>
                  </Link>

                  <Link href='mailto:info@pradoshphotography.com' className='mt-3 md:tracking-[0.7px]'>
                    <span>info@pradoshphotography.com</span>
                  </Link>
                </React.Fragment>
              </div>
              
            </div>

            <div className='flex md:justify-center mx-[20px] md:mx-20 pt-[50px] xl:pt-[90px] text-[#ececec] text-[12px] md:text-[14px] md:tracking-[0.7px]'>
              <p>Copyright © 2023 Pradosh Photography All Rights Reserved</p>
          </div>
          </div>
      </div>
    </div>
    </>
  )
}

export default Footer
