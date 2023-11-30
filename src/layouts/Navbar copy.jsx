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
    <header className={`portofolio__header ${changeColor ? 'header-color' : '' } d-flex align-items-center justify-content-between sticky-top`}>
      <div className='hstack gap-3'>
        <img src="/assets/zian.png" className='logo' alt="" />
        <h5>ZIANATUL MUNA</h5>
      </div>
      <nav className="navigation">
        <ul>
          <li><NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} end>HOME</NavLink></li>
          <li><NavLink to="/about" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} end>ABOUT</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} end>CONTACT</NavLink></li>
          <li>
            <NavLink to="/project" className='btn btn-root-secondary rounded-5 px-4 d-none d-lg-block text-dark'>PROJECT</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;