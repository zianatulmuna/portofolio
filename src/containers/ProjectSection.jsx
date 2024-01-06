import React from 'react';
import { Link } from 'react-router-dom';
import { getBestProjects, getOtherProjects } from '../utils/project';
import { FaGithub, FaLink } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
import { MdRemoveRedEye } from "react-icons/md";
import { HiMiniArrowUpRight, HiUser } from "react-icons/hi2";
import { RxDividerVertical } from "react-icons/rx";

const ProjectSection = () => {
  const bestProjects = getBestProjects();
  const otherProjects = getOtherProjects();
  
  return (
    <section>
      <div className="section-project px-3 px-sm-4 px-md-5 px-xl-9 py-5" id='project'>
        <div className="mb-5">
          <h1 className='section-title text-start mb-2'><span className='text-root-tertiary'>My</span> Project</h1>
          <h5>The best of my works</h5>
        </div> 
        <div className="section-body">
          {bestProjects.map((project) => (
              <div key={project.id} className={`project-first d-flex flex-column ${project.reverse ? 'flex-xl-row-reverse' : ''} flex-xl-row align-items-center gap-4 gap-xl-5`}>
              <div className="project-image" data-aos="fade-up" data-aos-duration="2000">
                <img src={project.image} alt="" />
              </div>
              <div className="project-description text-center text-xl-start" data-aos="fade-up" data-aos-duration="1000">
                <h4 className=''>{project.name} <span className='fw-bold text-root-primary'>{project.title}</span></h4>
                <div className="project-library">
                  <p className='my-2 text-root-tertiary fw-bold'>
                    {project.techs.map((tech, index) => (
                      <span key={index}>
                        {tech}
                        {index !== project.techs.length - 1 && <RxDividerVertical className={'text-dark'} />}
                      </span>
                    ))}
                  </p>
                </div>
                <p>{project.body}</p>
                <div className="project-button d-flex justify-content-center justify-content-xl-start gap-3 mt-3">
                  <Link to={`/project/${project.id}`} className='btn btn-root-primary-outline-grad'>
                    <FaEye /> Detail
                  </Link>
                  <a href={project.github} target='_blank' className='btn btn-root-primary-outline-grad'><FaGithub /> Github</a>
                  <a href={project.demo} target='_blank' className='btn btn-root-primary-outline-grad'><HiMiniArrowUpRight s/> Demo</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="section-other-project bg-white px-3 px-sm-4 px-md-5 px-xl-9 pb-5" id='project'>
        <div className="mb-5">
          <h1 className='section-title mb-2'>Other Noteworthy <span className='text-root-tertiary'>Projects</span></h1>
        </div> 
        <div className="section-body mb-5">
          <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
          {otherProjects.map((project) => (
            <div className="col">
              <div className="card shadow-root-lg rounded-4 h-100" data-aos="fade-up" data-aos-duration="3000">
                <div className="card-image rounded-4">
                  <img src={project.image} className="card-img-top rounded-top-4" alt="..." />
                </div>
                <div className="card-body px-4">
                  <h5 className="fw-bold text-secondary mb-2">{project.name}</h5>
                  <h4 className="card-title fw-bold">{project.title}</h4>
                  <div className='hstack gap-2'>
                    <h6 className='text-root-tertiary'><HiUser /></h6> 
                    <a href={project.github}  className='link-root-primary'>{project.developer}</a>
                  </div>
                  <p className="mt-3">{project.body}</p>
                </div>
                <div className="card-footer rounded-bottom-4 d-flex gap-3 border-0 pb-4 bg-white">
                  <Link to={`/project/${project.id}`} className='btn btn-root-primary-outline-grad flex-fill'>
                    <MdRemoveRedEye /> Detail
                  </Link>
                  <a href={project.link} target='_blank' className='btn btn-root-primary-outline-grad flex-fill'><FaLink /> Live Link</a>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectSection