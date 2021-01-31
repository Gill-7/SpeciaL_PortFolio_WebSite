import React from 'react'
import '../App.css'
import './Main.css'

function Main() {
    return (
        <div className='main'>
            
            <h1 className='main-heading'>
                Hello, I'm <span className='name'>Gillpreet Singh.</span><br />
                I'm a <span className='profession'>front-end developer.</span>
            </h1>

            <div class="bird-container bird-container--one">
                <div class="bird bird--one"></div>
            </div>
        
            <div class="bird-container bird-container--two">
                <div class="bird bird--two"></div>
            </div>
            
            <div class="bird-container bird-container--three">
                <div class="bird bird--three"></div>
            </div>
            
            <div class="bird-container bird-container--four">
                <div class="bird bird--four"></div>
            </div>
        </div>
    )
}

export default Main