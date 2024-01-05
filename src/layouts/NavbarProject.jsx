import React, { useState, useEffect } from 'react';
import { LuAlignJustify } from "react-icons/lu";
import { FaArrowLeft } from "react-icons/fa6";

function NavbarProject() {
  const [changeColor, setChangeColor] = useState(false);

  const changeHeaderColor = () => {
    if(window.scrollY > 40 || window.location.pathname !== "/") {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  }

  useEffect(() => {
    changeHeaderColor();

    window.addEventListener("scroll", changeHeaderColor)
  })
  
  return (
    <nav className={`navbar navbar-expand-md ${changeColor ? 'navbar-header py-2' : 'navbar-header-trans py-4' }  px-3 px-sm-4 px-md-5 px-xl-9 sticky-top`}>
      <div className="container-fluid p-0">
        <a href="/" className='navbar-brand link-root-dark hstack gap-2'>
          <FaArrowLeft />
          <h5>Home</h5>
        </a>
        <button className="navbar-toggler border-0 fs-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <LuAlignJustify />
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav py-3 py-md-0 text-center gap-2 gap-md-4 gap-xl-5">
            <a className="nav-link link-root-dark" href="#project-overview">Overview</a>
            <a className="nav-link link-root-dark" href="#project-techs">Techs</a>
            <a className="nav-link link-root-dark" href="#project-features">Features</a>
            <a className="nav-link link-root-dark" href="#project-scopes">Job Scopes</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavbarProject;