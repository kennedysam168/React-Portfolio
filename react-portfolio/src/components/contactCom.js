import React from 'react';
import {  Route } from "react-router-dom";



function ContactCom() {
    return (
        <>
    <h1>Contact</h1>
    <pre>{`

        Reach out to me if you 
        are interested in working
        together or want to inquire 
        about any website needs you have!

        Listed below are the best ways to get in touch with me
        as well as github and resume links

        Phone: 864-553-2889
        Email: Kennedysam168@gmail.com
        
    `}
        <div className='github'>
        Github: <a href="https://github.com/kennedysam168">https://github.com/kennedysam168</a>
        </div>
        <div className='resume'>
        Resume: <a href="react-portfolio/src/Sam_Kennedy_-_Front-end_Developer.pdf">Click here for Resume</a>
        </div>
    </pre>
    </>
    )
}



export default ContactCom;