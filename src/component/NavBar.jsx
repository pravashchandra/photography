"use client"
import React,{useEffect} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import logo from "../../public/Images/Proadosh_logo.png"
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { HiMenuAlt1 } from 'react-icons/hi';
import { RxCross2 } from 'react-icons/rx';
import ServicesMenu from './ServicesMenu';
import Popupcontact from './Popupcontact';
import { usePathname } from 'next/navigation';
import Aos from 'aos';
import 'aos/dist/aos.css'


const NavBar = () => {
  useEffect(() => {
    Aos.init();
  }, [])
  const pathname = usePathname();
  const isActive = pathname.startsWith(Link.href)

  const [toggleNav, setToggleNav] =useState(false);

  const handleNavToggle =() =>{
    setToggleNav(!toggleNav);
  }

  const [showSubMenu, setShowSubMenu] = useState(false);
  
  const handleShowSubMenu =() =>{
    setShowSubMenu(!showSubMenu);
  };

  const[toggleClose, setToggleClose]= useState(true);

  const handleSidebarToggle =() =>{
    setToggleClose(!toggleClose);
  };


  // Popup Contact Form Event Starts  here
  const [showPopup, setShowPopup] = useState(false);

  const toggleContactForm =() =>{
  setShowPopup(!showPopup)
  }
 // Popup Contact Form Event End here

  return (
    <>
      <div className={`w-full flex px-[24px] xl:px-20 py-4 justify-between items-center absolute top-0 left-0 z-10`}>
        <div className='flex'>
          <Link href="/"><Image src={logo} alt='Logo;' className='w-[110px] md:w-[120px]'/></Link>
        </div>
        <span 
          onClick={handleNavToggle} 
          className='flex md:hidden text-white text-[2em] justify-end'
        > 
          {toggleNav ? < RxCross2 className='z-50'/> : < HiMenuAlt1 className='z-50'/> }
          
        </span>

        {/*------------Desktop Menu Bar----------- */}
        <div className='hidden md:flex py-6 text-white text-[17px] tracking-[1px]'>
          <div className='flex space-x-8'>
            <ul className='flex space-x-14 font-josefin font-[300]'>
              <li className='font-josefin'><Link href="/" className={`${isActive ? "font-bold" : ""} font-josefin`}>Home</Link></li>
              <li><Link href="/about" className="font-josefin">About Us</Link></li>
              <li className='flex'
              onMouseEnter={()=>setShowSubMenu(true)}
              onMouseLeave={()=>setShowSubMenu(false)}
              >
                {showSubMenu && <ServicesMenu /> }
                <Link href="/#" className='font-josefin'>Services</Link>
                {showSubMenu ? <MdKeyboardArrowUp className='text-[22px] mt-[2px]'/> : <MdKeyboardArrowDown className='text-[22px]  mt-[2px]'/>}
                
              </li>
              <li><Link href="/gallery" className='font-josefin'>Gallery</Link></li>
              <li><Link href="/contact" className='font-josefin'>Contact</Link></li>
            </ul>  
          </div> 
        </div>
        

        <div className='hidden md:flex'>
          
          <button 
            className='relative flex h-[35px] md:h-[40px] w-[130px] md:w-[160px] items-center justify-center overflow-hidden bg-transprent text-white font-josefin uppercase text-[12px] md:text-[12px] tracking-[1px] border border-white shadow-md transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-gold hover:text-white hover:border-gold before:duration-500 before:ease-out hover:shadow-gold-600 hover:before:h-56 hover:before:w-56'
            onClick={toggleContactForm}
          >
            {showPopup && <Popupcontact toggleContactForm={toggleContactForm}/> }
              <span className='relative z-10'>Get a quote</span>
          </button>
        </div>
      </div>

      {/* ----- Mobile toggle menu strats here -----*/}
       
        <div className={`fixed top-[0px] left-0 w-[83%] h-[100vh] z-40 md:hidden ${toggleNav ? "translate-x-0" : "translate-x-[-500px]"} text-[white] bg-[#cba95a] shadow-sm justify-start p-8 transition-all`}>
        <div className='flex flex-col justify-end '>
          <ul className='flex flex-col justify-start gap-4 text-[17px] tracking-[0.5px] font-josefin'>
              <li onClick={handleNavToggle} className=''><Link href="/" className='font-josefin'>Home</Link></li>
              <li onClick={handleNavToggle}><Link href="/about" className='font-josefin'>About Us</Link></li>
              <li 
                onClick={handleShowSubMenu}
              >
                <div className='flex flex-col'>
                  <div className='flex'>
                    <Link href="/#" className='font-josefin'>Services</Link>
                    {showSubMenu ? <MdKeyboardArrowUp className='text-[25px] mt-[0px]'/>: <MdKeyboardArrowDown className='text-[25px] mt-[0px]'/>}
                  </div>
                  {showSubMenu && <ServicesMenu handleNavToggle={handleNavToggle} />}
                </div>
                
                
              </li>
              <li onClick={handleNavToggle}><Link href="/contact" className='font-josefin'>Contact</Link></li>
          </ul>  
        </div>
      </div>
      
      
    </>
  )
}

export default NavBar
