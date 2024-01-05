import React from 'react';
import { ImHtmlFive } from "react-icons/im";
import { FaBootstrap, FaGithub } from "react-icons/fa";
import { SiJavascript, SiPhp, SiMysql } from "react-icons/si";
import { TbBrandReact, TbBrandLaravel } from "react-icons/tb";

const SkillSection = () => {
  const techs = [
    {
      id: "tech1",
      name: "HTML",
      image: "/images/techs/HTML.png",
    },
    {
      id: "tech2",
      name: "CSS",
      image: "/images/techs/CSS.png",
    },
    {
      id: "tech3",
      name: "JavaScript",
      image: "/images/techs/JavaScript.png",
    },
    {
      id: "tech4",
      name: "PHP",
      image: "/images/techs/PHP.png",
    },
    {
      id: "tech5",
      name: "Java",
      image: "/images/techs/Java.png",
    },
    {
      id: "tech6",
      name: "Laravel",
      image: "/images/techs/Laravel.png",
    },
    {
      id: "tech7",
      name: "MySQL",
      image: "/images/techs/MySQL.png",
    },
    {
      id: "tech8",
      name: "Bootstrap",
      image: "/images/techs/Bootstrap.png",
    },
    {
      id: "tech9",
      name: "Git",
      image: "/images/techs/GitHub.png",
    },
  ];

  return (
    <section>
      <div className="section-skill shadow-lg py-4 py-xl-5 px-4 rounded-5">
        <h1 className="section-title mb-5" data-aos="zoom-in" data-aos-duration="1000">Languages & Tools <span className='text-root-tertiary'>I Used</span></h1>
        <div className="section-body d-flex flex-wrap justify-content-center gap-3 gap-md-4 gap-xl-5">
          {techs.map((tech) => (
            <div key={tech.id}>
              <div className="d-flex justify-content-center align-items-center rounded-circle"  data-aos="zoom-in" data-aos-duration="1000">
                <div className="d-flex flex-column justify-content-center align-items-center gap-2">
                  <div className="tech-image d-flex justify-content-center align-items-center">
                    <img src={tech.image} alt="" className='' />
                  </div> 
                  <p className="tech-name fw-bold">{tech.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillSection