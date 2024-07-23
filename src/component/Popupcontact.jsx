"use client"
import ContactForm from './Contact/ContactForm'
import { RxCross2 } from 'react-icons/rx';

const Popupcontact = ({onClose}) => {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center ml-[0px] z-50'>
      <div className='w-full md:w-[600px] mt-10 flex flex-col gap-5'>
        <RxCross2 className='text-[25px] place-self-end text-white cursor-pointer' onClick={onClose}/>
        <div className='bg-white p-[40px]'>
          <ContactForm />
        </div>
        
      </div>

    </div>
  )
}

export default Popupcontact
