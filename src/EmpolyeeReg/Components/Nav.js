import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="navbar-right">
        <img className='logo-img' src='logoe.jpg'/>
        <Link className="navbar-brand" to="/">Employee Registration</Link>
      </div>
      <ul className="navbar-nav" id="navbarNav">
        <li className="nav-del">
          <Link className="nav-link" to="/">Form</Link></li>  
        <p class="styled-pipe">|</p>
        <li className="nav-edit">
          <Link className="nav-link" to="/regtable">List</Link></li> 
      </ul>
    </nav>
    //create employee
    //view employee
  );
};

// const toggleMenu = () => {
//   const navbarNav = document.getElementById('navbarNav');
//   navbarNav.classList.toggle('active');
// };

export default Nav;

