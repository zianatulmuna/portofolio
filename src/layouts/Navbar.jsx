import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { LuAlignJustify } from "react-icons/lu";

function Navbar() {
  const [changeColor, setChangeColor] = useState(false);

  const changeHeaderColor = () => {
    if(window.scrollY > 40) {
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
    // <header className={`navbar-header-trans ${changeColor ? 'navbar-header px-3 px-sm-4 px-md-5 px-xl-9 py-2' : '' } d-flex align-items-center justify-content-between sticky-top`}>
    //   <div className='hstack gap-3'>
    //     <img src="/assets/zian.png" className='logo' alt="" />
    //     <h5>ZIANATUL MUNA</h5>
    //   </div>
    //   <nav className="navigation d-none d-lg-block">
    //     <ul>
    //       <li><a href='/#'>HOME</a></li>
    //       <li><a href='/#about'>ABOUT</a></li>
    //       <li><a href='/#contact'>CONTACT</a></li>
    //       <li>
    //         <a href='/#project' className='btn btn-root-secondary px-3 py-2 rounded-5 text-dark'>PROJECT</a>
    //       </li>
    //     </ul>
    //   </nav>
    // </header>
    <nav class={`navbar navbar-expand-md ${changeColor ? 'navbar-header py-2' : 'navbar-header-trans py-4' }  px-3 px-sm-4 px-md-5 px-xl-9 sticky-top`}>
      <div class="container-fluid p-0">
        {/* <a class="" href="#">Navbar</a> */}
        <div className='navbar-brand hstack gap-3'>
          <img src="/assets/zian.png" className='logo' alt="" />
          <h5 className='d-none d-sm-block'>ZIANATUL MUNA</h5>
        </div>
        <button class="navbar-toggler border-0 fs-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <LuAlignJustify />
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div class="navbar-nav py-3 py-md-0 text-center gap-2 gap-md-4 gap-xl-5">
            <a class="nav-link" aria-current="page" href="#home">HOME</a>
            <a class="nav-link" href="#about">ABOUT</a>
            <a class="nav-link" href="#contact">CONTACT</a>
            <a class="btn btn-root-secondary px-3 py-2 rounded-5 text-dark" href='#project'>PROJECT</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;