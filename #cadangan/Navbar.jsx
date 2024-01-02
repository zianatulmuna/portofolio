import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

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
    <nav class={`navbar navbar-expand-lg ${changeColor ? 'navbar-header px-3 px-sm-4 px-md-5 px-xl-9 py-2' : '' } sticky-top bg-body-tertiary`}>
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
            <a class="nav-link" href="#">Features</a>
            <a class="nav-link" href="#">Pricing</a>
            <a class="nav-link disabled" aria-disabled="true">Disabled</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;