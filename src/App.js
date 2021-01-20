import React from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home'
import SkillsPage from './components/pages/SkillsPage'
import ProjectsPage from './components/pages/ProjectsPage'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/home' exact component={Home} />
          <Route path='/skills' exact component={SkillsPage} />
          <Route path='/projects' exact component={ProjectsPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
