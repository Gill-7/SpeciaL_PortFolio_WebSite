import React from 'react'
import './Skills.css'

function Skills() {
    return (
        <div className='container'>
            <h1 className='heading'>Skills</h1>
            <div className='skills'>      
                <div className='skills-main'>
                    <div className='skills-logo'>
                        <div className='logo'>
                            <img className='img' src='./image/html.png' alt='' />
                        </div>
                        <h3>HTML5</h3>
                    </div>
                </div>
                
                <div className='skills-main'>
                    <div className='skills-logo'>
                        <div className='logo'>
                            <img className='img' src='./image/css.png' alt='' />
                        </div>
                        <h3>CSS3</h3>
                    </div>
                </div>

                <div className='skills-main'>
                    <div className='skills-logo'>
                        <div className='logo'>
                            <img className='img' src='./image/js.png' alt='' />
                        </div>
                        <h3>JAVASCRIPT</h3>
                    </div> 
                </div>     
                
                <div className='skills-main'>
                    <div className='skills-logo'>
                        <div className='logo'>
                            <img className='img' src='./image/react.png' alt='' />
                        </div>
                        <h3>REACT</h3>
                    </div>
                </div>
                
                
                <div className='skills-main'>
                    <div className='skills-logo'>
                        <div className='logo'>
                            <img className='img' src='./image/npm.png' alt='' />
                        </div>
                        <h3>NPM</h3>
                    </div>
                </div>
                
                
                <div className='skills-main'>
                    <div className='skills-logo'>
                        <div className='logo'>
                            <img className='img' src='./image/json.png' alt='' />
                        </div>
                        <h3>JSON</h3>
                    </div>      
                </div>
            </div>          
        </div>
    )
}

export default Skills