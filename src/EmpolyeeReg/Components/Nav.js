import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="navbar">
      {/* <div className="navbar-left">
        <Link className="nav-link" to="/form">Form</Link>
        <Link className="nav-link" to="/list">List</Link>
      </div> */}
      <div className="navbar-right">
        <img className='logo-img' src='logoe.jpg'/>
        <Link className="navbar-brand" to="/">Employee Registration</Link>
      </div>
      {/* <span className="navbar-toggler" onClick={toggleMenu}>&#9776;</span> */}
      <ul className="navbar-nav" id="navbarNav">
        <li className="nav-del">
          <Link className="nav-link" to="/">Form</Link>
        </li>
        <li className="nav-edit">
          <Link className="nav-link" to="/regtable">List</Link>
        </li>
      </ul>
    </nav>
  );
};

// const toggleMenu = () => {
//   const navbarNav = document.getElementById('navbarNav');
//   navbarNav.classList.toggle('active');
// };

export default Nav;

