import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // form.value.reset();

    emailjs.sendForm('service_3g2qwua', 'template_3wyqfwc', form.current, 'n4b9TcL4GJfaKzafK')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div >
      <div className="flex flex-col justify-center items-center py-20 ">
      <h1 className="font-extrabold text-transparent md:text-5xl text-xl bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">
        Contact Me
      </h1>


<form className='flex flex-col gap-0' ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input className='bg-transparent rounded-md h-10 md:w-96 w-full border-2 border-cyan-500' type="text" name="user_name" /><br/>
      <label>Email</label>
      <input className='bg-transparent rounded-md h-10 md:w-96 w-full border-2 border-cyan-500' type="email" name="user_email" /><br/>
      <label>Message</label>
      <textarea className='bg-transparent rounded-md h-24 md:w-96 w-full border-2 border-cyan-500' name="message" />
      <button className='mt-5 rounded-md px-10 py-2 bg-cyan-500 text-white font-medium uppercase pointer' type="submit" >Submit</button>
    </form>


      </div>
    </div>
  );
};

export default Contact;