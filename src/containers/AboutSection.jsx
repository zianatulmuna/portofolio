import React from 'react';
import CertificationComponent from '../components/CertificationComponent';
import { HiOutlineDocumentText, HiOutlineLocationMarker, HiOutlineUser, HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import { BsArrowDownRight } from "react-icons/bs";
import { GrCertificate } from "react-icons/gr";
import { PiGraduationCap, PiCertificateLight } from "react-icons/pi";
import { BiUser } from "react-icons/bi";

const AboutSection = () => {
  
  return (
    <section id='about'>
      <div className="section-about px-3 px-sm-4 px-md-4 px-lg-5 px-xl-9 py-5">
        <h1 className="section-title fw-bold">About <span className='text-root-secondary'>Me</span></h1>
        <div className="section-body" data-aos="fade-up" data-aos-duration="1000">
          <div className="row row-cols-1 row-cols-xl-2 g-2 g-xl-5">
            <div className="col about-col-profile mb-5">
              <div className='about-profile'>
                <p className='mb-2'>A person who focuses on being a web developer with 2 years of experience in creating responsive websites and managing database. Able to work in frontend and backend development to provide a good user experience. I'm trained to work in teams and have worked on several web projects.</p> 
                <p>I'm quietly detail-oriented, persistent, highly committed, and enjoy learning new things in the process. I'm interested in jobs where I can contribute, learn, and grow. Please, feel free to reach out.</p>
                <div className="d-flex align-items-end gap-3">
                  <button className='btn btn-root-primary  rounded-4 px-4 py-3 mt-5 d-flex align-items-center gap-3'><h6 className='fw-bold'>Download CV</h6><h5><HiOutlineDocumentText /></h5></button>
                  <div className="icon-sign">
                    <img src="/assets/signature.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col about-col-history">
              <div className="about-history">
                <ul className="nav nav-underline d-flex justify-content-between flex-column flex-md-row mb-3" id="pills-tab" role="tablist">
                  <li className="nav-basic nav-item" role="presentation">
                    <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                      <div className="hstack gap-2">
                        <p>Basic Information</p>
                        <span className='h5 text-color'><BiUser /></span>
                      </div>
                    </button>
                  </li>
                  <li className="nav-education nav-item" role="presentation">
                    <button className="nav-link text-color" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
                      <div className="hstack gap-2">
                        <p>Education</p>
                        <span className='h5 text-color'><PiGraduationCap /></span>
                      </div>
                    </button>
                  </li>
                  <li className="nav-certification nav-item" role="presentation">
                    <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
                      <div className="hstack gap-2">
                        <p>Certification</p>
                        <span className='h5 text-color'><PiCertificateLight /></span>
                      </div>
                    </button>
                  </li>
                </ul>
                <div className="tab-content pt-3 px-3" id="pills-tabContent">
                  <div className="tab-basic tab-pane animate__animated animate__fadeIn fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">
                    <div className="hstack gap-3 mb-3">
                      <HiOutlineLocationMarker />
                      <p>Indonesia</p>
                    </div>
                    <div className="hstack gap-3 mb-3">
                      <HiOutlineUser />
                      <p>23 yr</p>
                    </div>
                    <div className="hstack gap-3 mb-3">
                      <HiOutlinePhone />
                      <p>+6287812529226</p>
                    </div>
                    <div className="hstack gap-3 mb-3">
                      <HiOutlineMail />
                      <p>zianatulmn@gmail.com</p>
                    </div>
                  </div>
                  <div className="tab-education tab-pane tab-education animate__animated animate__fadeIn fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex="0">
                    <div className="hstack gap-4">
                      <div className="me-auto">
                        <p className='text-root-primary'>July 2019 - November 2023</p>
                        <h4>Mataram University</h4>
                        <div className="border-bottom-hr"></div>
                        <p className='fw-bold'>Bachelor of Informatics Engineering</p>
                        <p>Graduate with 3.83 GPA and Cumlaude predicate</p>
                      </div>
                      <img src="/images/unram.png" alt="" />
                    </div>
                    <div className="hstack gap-4 mt-5">
                      <div className="me-auto">
                        <p className='text-root-primary'>February 2022 - June 2022</p>
                        <h4>SIB Dicoding</h4>
                        <div className="border-bottom-hr"></div>
                        <p className='fw-bold'>Front-End and Back-End Web Developer</p>
                        <p>Graduate with Best Capstone Project appreciation</p>
                      </div>
                      <img src="/images/dicoding-logo.png" alt="" />
                    </div>
                  </div>
                  <div className="tab-certification tab-pane tab-certification animate__animated animate__fadeIn fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex="0">
                    <CertificationComponent />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection