import React, {useState} from 'react'
import WhtasApp from "../../public/Whatsapp-icon.svg"
import Image from 'next/image';

const Whatsapp = () => {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
      };
      const handleMouseLeave = () => {
        setIsHovered(false);
      };
    const handleWhatsAppClick = () => {
        window.open('https://api.whatsapp.com/send?phone=9776292237', '_blank');
      };
  return (
    <div className='fixed bottom-[30px] right-[20px] cursor-pointer'>
        <div className="flex items-center rounded-full pl-4 relative hover:bg-[#40C351]" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {isHovered && <p className=" text-white p-[12px] transition-all">WhatsApp Us</p>}
            <Image src={WhtasApp} width={52} height={52} alt='WhatsApp' onClick={handleWhatsAppClick} />
        </div>
    </div>
  )
}

export default Whatsapp
