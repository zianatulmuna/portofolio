import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navigation">
      <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
        <li><Link to="/contact">CONTACT</Link></li>
        <li>
          <Link to="/project" className='btn btn-warning rounded-5 px-4 d-none d-lg-block text-dark'>PROJECT</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;