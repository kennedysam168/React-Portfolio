import React from 'react';
import './App.css';
import Icon from './components/icon';
import Navbar from './components/navbar';
import Name from './components/name'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import BackgroundDesign from './components/background-design';
import Projects from './pages/Projects';

function App() {
  return (
    <Router>
    <Navbar />
    <Switch>
        <Route path='/projects' component={<Projects />} />
    </Switch>
    <Icon />
    <Name />
    <BackgroundDesign />
    </Router>
  )
};

export default App;
