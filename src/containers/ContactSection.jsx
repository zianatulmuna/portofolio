import React from 'react';
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";
import { IoLogoWhatsapp } from "react-icons/io";

const ContactSection = () => {
  return (
    <section>
      <div className="section-contact text-center py-4 py-lg-5 px-3 px-sm-4 px-md-5 px-xl-9" id='contact' data-aos="zoom-in" data-aos-duration="1000">
        <h5 className='text-root-secondary fw-bold mb-4' data-aos="zoom-in" data-aos-duration="1000">~ Lets Connect ~</h5>
        <h1 className='section-title fw-bolder mb-2'><span className='text-white'>Get In</span> Touch</h1>
        <div className="contact-text d-flex justify-content-center text-white p-4">
          <p data-aos="zoom-in" data-aos-duration="1000">I'm currently avaliable to take on new projects, so feel free to send me a message about anything. You can contact anytime at 24/7, I will get back to you as soon as possible!</p>
        </div>
        <h2 className='fw-bold mt-5'>Say Hello <img src="/assets/hello.png" alt="" className='icon-hello mb-2' /></h2>
        <div className="contact-list d-flex justify-content-center gap-3 my-4" data-aos="zoom-in" data-aos-duration="4000">
          <a href="https://wa.me/+6287812529226" target='_blank' className='btn btn-root-secondary'><IoLogoWhatsapp /></a>
          <a href="mailto:zianatulmn@gmail.com" target='_blank' className='btn btn-root-secondary'><TbMailFilled /></a>
          <a href="https://www.linkedin.com/in/zianatulmuna/" target='_blank' className='btn btn-root-secondary'><FaLinkedin /></a>
        </div>
      </div>
    </section>
  )
}

export default ContactSection