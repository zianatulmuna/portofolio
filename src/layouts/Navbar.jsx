import React, { useState, useEffect } from 'react';
import { LuAlignJustify } from "react-icons/lu";

function Navbar() {
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
        <div className='navbar-brand hstack gap-3'>
          <img src="/assets/zian.png" className='logo' alt="" />
          <h5>ZIANATUL MUNA</h5>
        </div>
        <button className="navbar-toggler border-0 fs-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <LuAlignJustify />
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav py-3 py-md-0 text-center gap-2 gap-md-4 gap-xl-5">
            <a className="nav-link link-root-dark" aria-current="page" href="/#">HOME</a>
            <a className="nav-link link-root-dark" href="/#about">ABOUT</a>
            <a className="nav-link link-root-dark" href="/#contact">CONTACT</a>
            <a className="btn btn-root-secondary px-3 py-2 rounded-5 text-color fw-bold" href='/#project'>PROJECT</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;