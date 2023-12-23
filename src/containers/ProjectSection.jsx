import React from 'react';
import { FaGithub } from "react-icons/fa";
import { MdRemoveRedEye } from "react-icons/md";
import { HiMiniArrowUpRight, HiMiniArrowRight } from "react-icons/hi2";
import { RxDividerVertical } from "react-icons/rx";

const ProjectSection = () => {
  const projects = [
    {
      id: "1",
      name: "Website Klinik Terapi",
      title: "Rumah Terapi Sahabat",
      image: "/images/projects/1.png",
      tech: ["PHP", "Laravel", "JavaScript", "Bootstrap"],
      body: "Mendesain dan memanage UI/UX. Membuat halaman web yang interaktif, menarik, dan sesuai dengan kebutuhan pengguna. Membangun halaman web responsif yang kompatibel dengan berbagai perangkat.",
      github: "https://github.com/zianatulmuna/rumahterapisahabat",
      demo: "https://rumahterapisahabat.web.id/",
      reverse: false,
    },
    {
      id: "2",
      name: "Back-End Developer",
      title: "FoodIntake",
      image: "/images/projects/2.png",
      tech: ["JavaScript", "API", "Progressive Web App"],
      body: "Mengembangkan logika aplikasi, manajemen pengguna, dan otorisasi. Mendesain dan mengintegrasikan database, API, dan logika server untuk mendukung fungsi yang kompleks dalam aplikasi web.",
      github: "https://github.com/zianatulmuna/foodintake",
      demo: "https://foodintake.vercel.app/",
      reverse: true,
    },
  ];
  
  return (
    <section>
      <div className="section-project px-3 px-sm-4 px-md-5 px-xl-9 py-5" id='project'>
        <div className="mb-5">
          <h1 className='section-title fw-bold text-start mb-2'><span className='text-root-secondary'>My</span> Project</h1>
          <h5>The best of my works</h5>
        </div> 
        <div className="section-body">
          {projects.map((project) => (
              <div className={`project-first d-flex flex-column ${project.reverse ? 'flex-xl-row-reverse' : ''} flex-xl-row align-items-center gap-4 gap-xl-5`}>
              <div className="project-image" data-aos="fade-up" data-aos-duration="2000">
                <img src={project.image} alt="" />
              </div>
              <div className="project-description text-center text-xl-start" data-aos="fade-up" data-aos-duration="1000">
                <h4 className=''>{project.name} <span className='fw-bold text-root-primary'>{project.title}</span></h4>
                <div className="project-library">
                  <p className='my-2 text-root-secondary fw-bold'>
                    {project.tech.map((item, index) => (
                      <span key={index}>
                        {item}
                        {index !== project.tech.length - 1 && <RxDividerVertical className={'text-dark'} />}
                      </span>
                    ))}
                  </p>
                </div>
                <p>{project.body}</p>
                <div className="project-button d-flex justify-content-center justify-content-xl-start gap-3 mt-3">
                  <a href="" className='btn btn-root-primary-outline-grad'><MdRemoveRedEye /> Detail</a>
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