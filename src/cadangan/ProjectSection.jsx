import React from 'react';
import { FaGithub } from "react-icons/fa";
import { MdRemoveRedEye } from "react-icons/md";
import { HiMiniArrowUpRight, HiMiniArrowRight } from "react-icons/hi2";
import { RxDividerVertical } from "react-icons/rx";

const ProjectSection = () => {
  const projects = [
    {
      id: "1",
      name: "Front-End Developer",
      image: "/images/projects/1.png",
      body: "Mendesain dan memanage UI/UX. Membuat halaman web yang interaktif, menarik, dan sesuai dengan kebutuhan pengguna. Membangun halaman web responsif yang kompatibel dengan berbagai perangkat."
    },
    {
      id: "2",
      name: "Back-End Developer",
      image: "/images/projects/2.png",
      body: "Mengembangkan logika aplikasi, manajemen pengguna, dan otorisasi. Mendesain dan mengintegrasikan database, API, dan logika server untuk mendukung fungsi yang kompleks dalam aplikasi web."
    },
    {
      id: "3",
      name: "Web Aplication",
      image: "/images/projects/3.png",
      body: "Membuat aplikasi web dari awal atau pengembangan berkelanjutan. Dapat bekerja dengan Progressive Web Apps untuk menciptakan web yang memiliki fungsi aplikasi native."
    },
    {
      id: "4",
      name: "Mockup Design",
      image: "/images/projects/4.png",
      body: "Mendesign interface sistem sebelum diterapkan pada implementasi code."
    },
    {
      id: "5",
      name: "Admin Dashboard",
      image: "/images/projects/5.png",
      body: "Merancang dashboard yang responsif, memberikan tampilan yang bersih dan informasi yang relevan untuk memudahkan pengambilan keputusan."
    },
  ];
  
  return (
    <section>
      <div className="section-project px-3 px-sm-4 px-md-5 px-xl-9 py-5">
        <div className="mb-5">
          <h1 className='section-title fw-bold text-start mb-2'><span className='text-root-secondary'>My</span> Project</h1>
          <h5>The best of my works</h5>
        </div>    
        <div className="section-body">
          <div className="project-first d-flex flex-column flex-xl-row align-items-center">
            <div className="col pe-xl-5 mb-4 mb-xl-0" data-aos="fade-right" data-aos-duration="2000">
              <div className="project-image">
                <img src="/images/projects/1.png" alt="" />
              </div>
            </div>
            <div className="col flex-fill text-center text-xl-start" data-aos="fade-left" data-aos-duration="1000">
              <h4 className=''>Website Klinik Terapi <span className='fw-bold text-root-primary'>Rumah Terapi Sahabat</span></h4>
              <div className="project-library">
                <p className='my-2 text-root-secondary fw-bold'>PHP <RxDividerVertical className='text-dark' /> Laravel <RxDividerVertical className='text-dark' /> JavaScript <RxDividerVertical className='text-dark' /> Bootstrap</p>
              </div>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae recusandae illum inventore accusamus nihil ipsa quo natus! Est in, asperiores voluptates distinctio optio, placeat mollitia quod tempore ipsam dolore aperiam!</p>
              <div className="project-button d-flex justify-content-center justify-content-xl-start gap-3 mt-3">
                <button className='btn btn-root-primary-outline'><MdRemoveRedEye /> View</button>
                <button className='btn btn-root-primary-outline'><FaGithub /> Github</button>
                <button className='btn btn-root-primary-outline'><HiMiniArrowUpRight s/> Demo</button>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column-reverse flex-xl-row align-items-center">
            <div className="col flex-fill text-center text-xl-start" data-aos="fade-right" data-aos-duration="1000">
              <h4>Web App Resep Makanan <span className='fw-bold text-root-primary'>FoodIntake</span></h4>
              <div className="project-library">
                <p className='my-2 text-root-secondary fw-bold'>JavaScript <RxDividerVertical className='text-dark' /> API <RxDividerVertical className='text-dark' /> Progressive Web App</p>
              </div>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae recusandae illum inventore accusamus nihil ipsa quo natus! Est in, asperiores voluptates distinctio optio, placeat mollitia quod tempore ipsam dolore aperiam!</p>
              <div className="project-button d-flex justify-content-center justify-content-xl-start gap-3 mt-3">
                <button className='btn btn-root-primary-outline'><MdRemoveRedEye /> View</button>
                <button className='btn btn-root-primary-outline'><FaGithub /> Github</button>
                <button className='btn btn-root-primary-outline'><HiMiniArrowUpRight s/> Demo</button>
              </div>
            </div>
            <div className="col ps-xl-5 mb-4 mb-xl-0" data-aos="fade-left" data-aos-duration="2000">
              <div className="project-image">
                <img src="/images/projects/2.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="mb-5">
          <h1 className='section-title fw-bold text-center text-start my-5'>Other Noteworthy <span className='text-root-secondary'>Project</span></h1>
          <h5>The best of my works</h5>
        </div> 
        <div className="section-body">

        </div>
      </div>
    </section>
  )
}

export default ProjectSection