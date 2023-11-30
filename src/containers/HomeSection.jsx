import React from 'react';
import { Typewriter, Cursor } from 'react-simple-typewriter';
import { HiOutlineBriefcase } from "react-icons/hi";
import { BsArrowDownRight } from "react-icons/bs";

const HomeSection = () => {

  // const {text} = useTypewriter({
  //   words: ['Web', 'Front-End', 'Back-End'],
  //   loop: {},
  // });

  return (
    <section id='home'>
        <div className="portofolio-opening d-flex justify-content-between align-items-center">
          <div className="text-white">
            <div className="animate__animated animate__bounceIn">
              <h2 className='hello'>Hi, I'm Zian <img src="/assets/hello.png" alt="" className='icon-hello mb-2' /></h2>
              <h4>A <span className='text-root-secondary'><Typewriter words={['Web', 'Front-End', 'Back-End']} loop={false} typeSpeed={150} deleteSpeed={70} delaySpeed={2000} /></span><Cursor /> Developer</h4>
              <p className="mt-4 pe-5">A Junior Fullstack Web Developer building the Front-end and Back-End of Websites and Web Applications.</p>
              <p>Love coding and push the limits.</p>
            </div>
            
            <div className="d-flex gap-3">
              <button className='btn btn-root-secondary rounded-5 px-4 py-3 mt-5 d-flex align-items-center gap-3 animate__animated animate__zoomIn'><h6 className='fw-bold'>My Works</h6><h5><HiOutlineBriefcase /></h5></button>
              <button className='btn btn-outline-light rounded-5 px-4 py-3 mt-5 d-flex align-items-center gap-3 animate__animated animate__zoomIn'><h6 className='fw-bold'>Reach Me</h6><h5><BsArrowDownRight /></h5></button>
            </div>
          </div>
          <div className="home-img animate__animated animate__flipInY">
            <img src="/images/zian.png" alt="" />
          </div>
        </div>
      </section>
  )
}

export default HomeSection