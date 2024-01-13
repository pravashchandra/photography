"use client"
import ContactForm from './Contact/ContactForm'
import { RxCross2 } from 'react-icons/rx';

const Popupcontact = ({toggleContactForm}) => {

  
    
  return (
    <div className='bg-gold/[0.7] w-[100%] fixed left-0 right-0 bottom-0 top-0'>
        <div className='w-[30%] absolute bg-black px-10 py-10 rounded-md top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]'>
            <div className=''>
                <ContactForm className="z-50 w-[30%]"/>
                <span >
                    <RxCross2 className='text-[20px] z-50 absolute top-[-28px] right-[-28px] hover:text-[grey]' onClick={toggleContactForm}/>
                </span>
                
            </div>
            
        </div>
      
    </div>
  )
}

export default Popupcontact
