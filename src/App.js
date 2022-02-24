import React from 'react';
import './App.css';
import Homepage from './components/homepage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Projects from './pages/Projects';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';


function App() {
  return (
    <Router>
    <Homepage />
    <Routes>
    <Route path='/Projects' element={  <Projects />}> 
        
    </Route>
    <Route path='/AboutMe' element={  <AboutMe />}> 
        
    </Route>
    <Route path='/Contact' element={  <Contact />}> 
        
    </Route>
    </Routes>
    {/* <Icon />
    <Name /> */}
    </Router>
  )
};

export default App;
