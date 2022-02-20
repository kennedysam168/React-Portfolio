import React from 'react';
import {  NavLink } from "react-router-dom";
import icon from '/Users/samkennedy/Desktop/React-Portfolio/react-portfolio/src/icon-image.jpeg';


const Homepage= ({ currentPage, handlePageChange }) =>{
  return (
    <div className = 'background-design'>
    <div className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
          <NavLink
            to="/Projects"
            className={
              window.location.pathname === '/Projects' ? 'nav-link active' : 'nav-link'
            }>
            Projects
          </NavLink>
          </li>
          <li className="nav-item">
          <NavLink
            to="/AboutMe"
            className={
              window.location.pathname === '/AboutMe' ? 'nav-link active' : 'nav-link'
            }>
            About Me
          </NavLink>
          </li>
          <li className="nav-item">
          <NavLink
            to="/Contact"
            className={
              window.location.pathname === '/Contact' ? 'nav-link active' : 'nav-link'
            }>
            Contact
          </NavLink>
          </li>
        </ul>
        </div>
        <img src={icon} alt="icon" className="icon-image"/>
      <div className="name">Sam Kennedy</div>
      <div className="scroll-prompt">Scroll!</div>
      </div>
  </div>
  </div>
  );
};


export default Homepage;