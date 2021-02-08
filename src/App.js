import React from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import SkillsPage from './components/SkillsPage'
import ProjectsPage from './components/ProjectsPage'
import AboutPage from './components/AboutPage'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/skills' component={SkillsPage} />
          <Route path='/projects' component={ProjectsPage} />
          <Route path='/about'  component={AboutPage} />
        </Switch>
  
      </Router>
    </>
  );
}

export default App;
