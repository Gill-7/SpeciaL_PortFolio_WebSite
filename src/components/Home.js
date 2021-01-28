import React from 'react'
import '../App.css'
import Main from './Main'
import Skills from './Skills'
import Projects from './Projects'
import Footer from './Footer'

function Home() {
    return (
        <>
          <Main />
          <Skills />
          <Projects />  
          <Footer />
        </>
    );
}

export default Home