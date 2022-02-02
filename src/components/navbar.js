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
            to="/"
            className={
              window.location.pathname === '/' ? 'nav-link active' : 'nav-link'
            }>
            Home
          </Link>
          </li>
          <li className="nav-item">
          <Link
            to="/"
            className={
              window.location.pathname === '/projects' ? 'nav-link active' : 'nav-link'
            }>
            Projects
          </Link>
          </li>
          <li className="nav-item">
          <Link
            to="/"
            className={
              window.location.pathname === '/aboutme' ? 'nav-link active' : 'nav-link'
            }>
            About Me
          </Link>
          </li>
        </ul>
        </div>
      </div>
  </div>
  );
};


export default Navbar;