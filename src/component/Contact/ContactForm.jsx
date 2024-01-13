import React, { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser';

const initialValues = {
  name: "",
  mobile: "",
  email: "",
  message: "",

};
const ContactForm = () => {

  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handelShowSuccess = () =>{
    setShowSuccess(!showSuccess)
  }


  useEffect(() => {
setTimeout(()=>{
  setShowSuccess(false)
}, 5000)

  },[showSuccess])
  

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = 'service_zd3deex';
    const templateId = 'template_qe7uxrq';
    const publicKey = 'UPIYv4Mml8rC1IA3k';

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_mobile: mobile,
      from_email: email,
      to_name: 'Pradosh',
      message: message,
    };

    // Send the email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        setShowSuccess(true)
        // console.log('Email sent successfully!', response);
        setName('');
        setMobile('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  }

  return (
    <form onSubmit={handleSubmit} className='emailForm'>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input 
        type="tel"
        placeholder='Mobile Number'
        value={mobile}
        className='mt-5'
        onChange={(e) => setMobile(e.target.value)}
        
      />
      <input  
        type="email"
        placeholder="Your Email"
        value={email}
        className='mt-5'
        onChange={(e) => setEmail(e.target.value)}

      />
      <select className='mt-5'>
        <option value="">Select Services</option>
        <option value="">Weeding Photography</option>
        <option value="">Pre-Weeding Photography</option>
        <option value="">Engagement Photography</option>
        <option value="">Birthday Photography</option>
        <option value="">Maternity Photography</option>
        <option value="">Baby Shower Photography</option>
        <option value="">Annaparsana Photography</option>
        <option value="">Anniversary Photography</option>
        <option value="">Corporate Photography</option>
        <option value="">Baby Photoshoot</option>
        <option value="">House Warming</option>
        <option value="">Naming ceremony</option>
        <option value="">Othres</option>
      </select>

      <textarea
        cols="50"
        rows="4"
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      >
      </textarea>
      <button type="submit" className="relative flex h-[45px] w-[170px] mt-[30px] items-center justify-center overflow-hidden bg-transpernt text-gold font-josefin uppercase text-[13px] tracking-[1px] border border-gold shadow-sm transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-gold hover:text-white hover:border-gold before:duration-500 before:ease-out hover:shadow-gold-600 hover:before:h-56 hover:before:w-56">
        <span className="relative z-10">Send Email</span>     
      </button>

    {showSuccess && <p>The Email has been sent successfully.</p>}
    </form>
  )
}

export default ContactForm