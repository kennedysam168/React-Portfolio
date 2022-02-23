import React from 'react';
import proj2 from "../photos/project2.png"
import proj1 from "../photos/canta-screenshot.png"
import codeQuiz from "../photos/code-quiz.jpg"
import Footer from './footer';


const ProjectsCom = () => {
    return (
    <div className="project-container">

    <div className="proj2-links">
    <img className='proj2' src={proj2} alt="proj2" />
    <h2>Title:  WishList</h2>
        <h2>Page Link:<a href=" https://wishlistmanager.herokuapp.com/"> https://wishlistmanager.herokuapp.com/</a></h2>
        <h2>Github Repo Link: <a href="https://github.com/jeremiah-quill/gift-exchange-manager">https://github.com/jeremiah-quill/gift-exchange-manager</a></h2>
    </div>

    <div className="proj1-links">
    <img className='proj1' src={proj1} alt="proj1" />
    <h2>Title:  Canta</h2>
        <h2>Page Link: <a href="https://kennedysam168.github.io/Group-Project-1/">https://kennedysam168.github.io/Group-Project-1/</a></h2>
        <h2>Github Repo Link: <a href="https://github.com/kennedysam168/Group-Project-1">https://github.com/kennedysam168/Group-Project-1</a></h2>
    </div>
    
    <div className="code-quiz-links">
    <img className='code-quiz' src={codeQuiz} alt="code-quiz" />
    <h2>Title:  Code Quiz</h2>
            <h2>Page Link: <a href="https://kennedysam168.github.io/Code-Quiz-Project/">https://kennedysam168.github.io/Code-Quiz-Project/</a></h2>
            <h2>Github Repo Link: <a href="https://github.com/kennedysam168/Code-Quiz-Project">https://github.com/kennedysam168/Code-Quiz-Project</a></h2>
    </div>

        <Footer />
    </div>
    );
}


export default ProjectsCom;