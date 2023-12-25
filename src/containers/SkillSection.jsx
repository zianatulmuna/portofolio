import React from 'react';
import { ImHtmlFive } from "react-icons/im";
import { FaBootstrap, FaGithub } from "react-icons/fa";
import { SiJavascript, SiPhp, SiMysql } from "react-icons/si";
import { TbBrandReact, TbBrandLaravel } from "react-icons/tb";

const SkillSection = () => {
  const techs = [
    {
      id: "1",
      name: "HTML",
      image: "/images/techs/1.png",
    },
    {
      id: "2",
      name: "CSS",
      image: "/images/techs/2.png",
    },
    {
      id: "3",
      name: "JavaScript",
      image: "/images/techs/3.png",
    },
    {
      id: "4",
      name: "PHP",
      image: "/images/techs/4.png",
    },
    {
      id: "5",
      name: "Java",
      image: "/images/techs/5.png",
    },
    {
      id: "6",
      name: "Laravel",
      image: "/images/techs/6.png",
    },
    {
      id: "5",
      name: "MySQL",
      image: "/images/techs/7.png",
    },
    {
      id: "5",
      name: "Bootstrap",
      image: "/images/techs/8.png",
    },
    {
      id: "5",
      name: "Git",
      image: "/images/techs/9.png",
    },
  ];

  return (
    <section>
      <div className="section-skill shadow-lg py-4 py-xl-5 px-4 rounded-5">
        <h1 className="section-title fw-bold mb-5" data-aos="zoom-in" data-aos-duration="1000">Languages & Tools <span className='text-root-secondary'>I Used</span></h1>
        <div className="section-body d-flex flex-wrap justify-content-center gap-3 gap-md-4 gap-xl-5">
          {techs.map((tech) => (
            <>
              <div className="d-flex justify-content-center align-items-center rounded-circle"  data-aos="zoom-in" data-aos-duration="1000">
                <div className="d-flex flex-column justify-content-center align-items-center gap-2">
                  <div className="tech-image d-flex justify-content-center align-items-center">
                    <img src={tech.image} alt="" className='' />
                  </div> 
                  <p className="tech-name fw-bold">{tech.name}</p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillSection