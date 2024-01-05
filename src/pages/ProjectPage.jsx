import { React, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavbarProject from '../layouts/NavbarProject';
import { useParams } from 'react-router-dom';
import { getProject, getProjectByIndex } from '../utils/project';
import { FaGithub} from "react-icons/fa";
import { FaLink,FaLaptopCode } from "react-icons/fa6";
import { HiMiniArrowUpRight, HiMiniArrowRight, HiMiniArrowLeft } from "react-icons/hi2";


const ProjectPage = () => {
  const { id } = useParams();
  const project = getProject(id);
  const nextProject = getProjectByIndex(project.index + 1);
  const prevProject = getProjectByIndex(project.index - 1);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <NavbarProject />
      <section>
        <div className="page-project">
          <div className="project-title d-flex flex-column-reverse flex-xl-row justify-content-between align-items-center text-center px-3 px-sm-4 px-md-5 px-xl-9 py-5">
            <div className="col-xl-7 project-laptop">
              <img src={project.imageDetail} alt="" />
            </div>
            <div className="col-xl-5">
              <h2 className='rounded-5 mb-2 fw-bold'>{project.name}</h2>
              <h1 className='mb-3'>{project.title}</h1>
              <p className='small mb-3 text-root-secondary'>{project.developer}</p>
              <div className="project-button d-flex flex-column flex-sm-row justify-content-center align-items-center gap-4 mt-4 mb-5 mb-xl-0 mt-xl-5">
                <a href={project.github} target='_blank' className='btn btn-root-secondary rounded-5 p-2 px-3'><FaGithub /> Github</a>
                <a href={project.link} target='_blank' className='btn btn-root-secondary rounded-5 p-2 px-3'><FaLink s/> Website Link</a>
                <a href={project.demo} target='_blank' className='btn btn-root-secondary rounded-5 p-2 px-3'><HiMiniArrowUpRight s/> Demo</a>
              </div>
            </div>
          </div>
          <div className="bg-white py-5">
            <div className="project-section px-3 px-sm-4 px-md-5 px-xl-15 pb-5" id='project-overview'>
              <h2>Project Overview</h2>
              <div className="d-flex flex-column flex-xl-row gap-2 gap-xl-5">
                <div>
                  {project.overview.split('\n').map((paragraph, i) => (
                    <p key={i} className='mb-4'>{paragraph}</p>
                  ))}
                </div>
                <div className="project-logo shadow-root-lg rounded-5 p-4">
                  <img src={project.logo} alt="" />
                </div>
              </div>
            </div>
            <div className="project-section px-3 px-sm-4 px-md-5 px-xl-15 pb-5" id='project-techs'>
              <h2>Tools I Used</h2>
              <div className="project-tool d-flex flex-wrap gap-4 gap-xl-4">
                <img src="/images/techs/HTML.png" alt="" />
                <img src="/images/techs/CSS.png" alt="" />
                {project.techs.map((tech, i) => (
                  <img key={i} src={`/images/techs/${tech}.png`} alt="" />
                ))}
              </div>
            </div>
            <div className="project-section px-3 px-sm-4 px-md-5 px-xl-15 pb-5" id='project-features'>
              <h2>Features</h2>
              <div className='feature-list'>
                <div className="accordion accordion-flush" id="accordionFlushExample">
                  {project.feature.map((fitur, i) => (
                    <div key={i} className="accordion-item">
                      <h4 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-${i}`} aria-expanded="false" aria-controls={`flush-${i}`}>
                          <h5>{fitur.name}</h5>
                        </button>
                      </h4>
                      <div id={`flush-${i}`} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body d-flex flex-column-reverse flex-xl-row gap-3 gap-xl-5 align-items-center">
                            <p>{fitur.body}</p>
                            <div className="feature-video">
                              <img src={fitur.video} alt="" />
                            </div>
                          </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="project-section px-3 px-sm-4 px-md-5 px-xl-15" id='project-scopes'>
              <h2>My Job Desk</h2>
              <div className="d-flex flex-wrap gap-3">
                {project.scope.split(',').map((item, i) => (
                  <p key={i} className='py-2 px-3 bg-secondary-subtle rounded-3 shadow-sm'>{item}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between gap-3 py-5 px-3 px-sm-4 px-md-5 px-xl-15 bg-white">
          { prevProject ? 
            <Link to={`/project/${prevProject.id}`} className='link-root-dark'>
              <h5><HiMiniArrowLeft /> Prev</h5>
              <h5>{prevProject.name} {prevProject.title}</h5>
            </Link>
            : 
            <div></div>
          }
          { nextProject ?
            <Link to={`/project/${nextProject.id}`} className='link-root-dark text-end'>
              <h5>Next <HiMiniArrowRight /></h5>
              <h5>{nextProject.name} {nextProject.title}</h5>
            </Link>
            :
            <div></div>
          }
        </div>
      </section>
    </>
  )
}

export default ProjectPage