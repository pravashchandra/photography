import React, { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser';
import { Form, useFormik } from 'formik';
import { contactForm } from '@/schemas';

const initialValues = {
  name: "",
  mobile: "",
  email: "",
  service: "",
  message: "",

};

const onSubmit =async (values, actions) =>{
await new Promise((resolve, reject) => setTimeout(resolve,1000))
}
const ContactForm = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  const {values, errors, touched, handleBlur, handleChange, handleSubmit, setValues} = useFormik({
    initialValues: initialValues,
    validationSchema : contactForm,
    onSubmit: (e)=>{
    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = 'service_zd3deex';
    const templateId = 'template_qe7uxrq';
    const publicKey = 'UPIYv4Mml8rC1IA3k';

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: values.name,
      from_mobile: values.mobile,
      from_email: values.email,
      to_name: 'Pradosh',
      message: values.message,
    };

    // Send the email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        setShowSuccess(true)
        
        console.log(response?.status == 200);

        if(response?.status == 200){

           setValues({
            name: "",
            mobile: "",
            email: "",
            service: "",
            message: "",
          })
       
        } 
      })
    }
  })

  useEffect(() => {
    setTimeout(()=>{
      setShowSuccess(false)
    }, 1000)

  },[showSuccess])

  return (
    <form onSubmit={handleSubmit} className='emailForm flex flex-col gap-8'>
      <div className='w-full flex flex-col md:flex-row justify-between items-start  gap-8 md:gap-4'>
        <div className='w-full md:w-[50%]'>
          <input
          type="text"
          placeholder="Your Name"
          name='name'
          value={values.name}
          autoComplete='off'
          onChange={handleChange}
          />
          {errors.name && touched.name && <p className='text-[red] mt-1'>{errors.name}</p>}
        </div>
        

        <div className='w-full md:w-[50%]'>
          <input 
          type="tel"
          placeholder='Mobile Number'
          value={values.mobile}
          name='mobile'
          minLength={10}
          maxLength={10}
          autoComplete='off'
          onChange={handleChange} 
          />
          {errors.mobile && touched.mobile && <p className='text-[red] mt-1'>{errors.mobile}</p>}
        </div>
      </div>
      
      <div className='w-full flex flex-col md:flex-row justify-between items-start gap-8 md:gap-4'>
        <div className='w-full md:w-[50%]'>
          <input  
          type="email"
          placeholder="Your Email"
          name='email'
          value={values.email}
          autoComplete='off'
          onChange={handleChange}
          />
          {errors.email && touched.email && <p className='text-[red] mt-1'>{errors.email}</p>}
        </div>

        <div className='w-full md:w-[50%]'>
          <select name='service'>
            <option value="" defaultValue disabled hidden>Select Services</option>
            <option value="photography">Wedding Photography</option>
            <option value="prewedding">Pre-Wedding Photography</option>
            <option value="engagement">Engagement Photography</option>
            <option value="birthday">Birthday Photography</option>
            <option value="maternity">Maternity Photography</option>
            <option value="baby-shower">Baby Shower Photography</option>
            <option value="annaparsana">Annaparsana Photography</option>
            <option value="anniversary">Anniversary Photography</option>
            <option value="corporate">Corporate Photography</option>
            <option value="babyphotoshoot">Baby Photoshoot</option>
            <option value="housewarming">House Warming</option>
            <option value="naimgceremony">Naming ceremony</option>
            <option value="others">Othres</option>
          </select>
          {errors.service && touched.service && <p className='text-[red] mt-1'>{errors.service}</p>}
        </div>
      </div>
      
  

      <textarea
        cols="50"
        rows="4"
        placeholder="Message"
        name='message'
        value={values.message}
        className='h-[80px] md:h-[100px]'
        onChange={handleChange}
      >
      </textarea>

      {/* <ReCAPTCHA
       sitekey='6LdptVEpAAAAANxnwckQ93C4ROV_F0NBXekU1ieN'
       onChange={(val)=>setCapValue(val)}
       /> */}
      <button type="submit" className="relative flex h-[45px] w-[170px] mt-[5px] items-center justify-center overflow-hidden bg-transpernt text-gold font-josefin uppercase text-[13px] tracking-[1px] border border-gold shadow-sm transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-gold hover:text-white hover:border-gold before:duration-500 before:ease-out hover:shadow-gold-600 hover:before:h-56 hover:before:w-56">
        <span className="relative z-10">Send Email</span>     
      </button>

      {showSuccess && <p className='mt-2 text-white'>The Email has been sent successfully.</p>}
    </form>
  )
}

export default ContactForm