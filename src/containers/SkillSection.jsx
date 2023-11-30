import React from 'react';
import { ImHtmlFive } from "react-icons/im";
import { FaBootstrap, FaGithub } from "react-icons/fa";
import { SiJavascript, SiPhp, SiMysql } from "react-icons/si";
import { TbBrandReact, TbBrandLaravel } from "react-icons/tb";

const SkillSection = () => {
  return (
    <section>
      <div className="portofolio-skill py-5">
        <h1 className="section-title fw-bold"><span className='text-color'>My</span> Skill</h1>
        <div className="portofolio-body">
          <div className='row row-cols-sm-3 row-cols-md-4 row-cols-lg-5 margin-auto'>
            <div className='col mx-5'>
              <div className="icon-skill rounded-circle bg-white">
                <ImHtmlFive />
              </div>
              <h6 className='my-2'>HTML <span className='fw-bold'>(90%)</span></h6>
            </div>
            <div className='col mx-5'>
              <div className="icon-skill rounded-circle bg-white">
                <FaBootstrap />
              </div>
              <h6 className='my-2'>Bootstrap <span className='fw-bold'>(80%)</span></h6>
            </div>
            <div className='col mx-5'>
              <div className="icon-skill rounded-circle bg-white">
                <SiJavascript />
              </div>
              <h6 className='my-2'>Javascript <span className='fw-bold'>(70%)</span></h6>
            </div>
            <div className='col mx-5'>
              <div className="icon-skill rounded-circle bg-white">
                <TbBrandReact />
              </div>
              <h6 className='my-2'>React <span className='fw-bold'>(70%)</span></h6>
            </div>
            <div className='col mx-5'>
              <div className="icon-skill rounded-circle bg-white">
                <SiPhp />
              </div>
              <h6 className='my-2'>PHP <span className='fw-bold'>(70%)</span></h6>
            </div>            
            <div className='col mx-5'>
              <div className="icon-skill rounded-circle bg-white">
                <TbBrandLaravel />
              </div>
              <h6 className='my-2'>Laravel <span className='fw-bold'>(70%)</span></h6>
            </div>
            <div className='col mx-5'>
              <div className="icon-skill rounded-circle bg-white">
                <SiMysql />
              </div>
              <h6 className='my-2'>My SQL <span className='fw-bold'>(70%)</span></h6>
            </div>
            <div className='col mx-5'>
              <div className="icon-skill rounded-circle bg-white">
                <FaGithub />
              </div>
              <h6 className='my-2'>GitHub <span className='fw-bold'>(70%)</span></h6>
            </div>
            <div className='col mx-5'>
              <div className="icon-skill rounded-circle bg-white">
                <FaGithub />
              </div>
              <h6 className='my-2'>REST API <span className='fw-bold'>(70%)</span></h6>
            </div>
            <div className='col mx-5'>
              <div className="icon-skill rounded-circle bg-white">
                <FaGithub />
              </div>
              <h6 className='my-2'>Progressive Web Apps <span className='fw-bold'>(70%)</span></h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillSection