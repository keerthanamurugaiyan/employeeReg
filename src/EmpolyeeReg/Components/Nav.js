import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="navbar-right">
        {/* <img className='logo-img' src='emplo.jpg' /> */}
        <img className='logo-img'src='/emplo.jpg' alt='Navbar logo'/>
        <Link className="navbar-brand" to="/employee/create">Employee Registration</Link>
      </div>
      <ul className="navbar-nav" id="navbarNav">
        <li className="nav-create">
          <Link className="nav-link" to="/employee/create">Create emplyee</Link></li>  
        <p class="styled-pipe">|</p>
        <li className="nav-view">
          <Link className="nav-link" to="/employee/view">View emplyee</Link></li> 
      </ul>
    </nav>

  );
};

// const toggleMenu = () => {
//   const navbarNav = document.getElementById('navbarNav');
//   navbarNav.classList.toggle('active');
// };

export default Nav;

