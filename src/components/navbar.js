import React from 'react';
import {  Link } from "react-router-dom";


const Navbar= () =>{
  return (
    <div className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
          <Link
            to="/projects"
            className={
              window.location.pathname === './Projects' ? 'nav-link active' : 'nav-link'
            }>
            Projects
          </Link>
          </li>
          <li className="nav-item">
          <Link
            to="/aboutme"
            className={
              window.location.pathname === '/aboutme' ? 'nav-link active' : 'nav-link'
            }>
            About Me
          </Link>
          </li>
          <li className="nav-item">
          <Link
            to="/contact"
            className={
              window.location.pathname === '/contact' ? 'nav-link active' : 'nav-link'
            }>
            Contact
          </Link>
          </li>
        </ul>
        </div>
      </div>
  </div>
  );
};


export default Navbar;