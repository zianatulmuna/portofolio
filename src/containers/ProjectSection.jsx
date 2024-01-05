import React from 'react';
import { Link } from 'react-router-dom';
import { getAllProjects } from '../utils/project';
import { FaGithub } from "react-icons/fa";
import { MdRemoveRedEye } from "react-icons/md";
import { HiMiniArrowUpRight, HiMiniArrowRight } from "react-icons/hi2";
import { RxDividerVertical } from "react-icons/rx";

const ProjectSection = () => {
  const projects = getAllProjects();
  
  return (
    <section>
      <div className="section-project px-3 px-sm-4 px-md-5 px-xl-9 py-5" id='project'>
        <div className="mb-5">
          <h1 className='section-title text-start mb-2'><span className='text-root-tertiary'>My</span> Project</h1>
          <h5>The best of my works</h5>
        </div> 
        <div className="section-body">
          {projects.map((project) => (
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
                    <MdRemoveRedEye /> Detail
                  </Link>
                  <a href={project.github} target='_blank' className='btn btn-root-primary-outline-grad'><FaGithub /> Github</a>
                  <a href={project.demo} target='_blank' className='btn btn-root-primary-outline-grad'><HiMiniArrowUpRight s/> Demo</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectSection