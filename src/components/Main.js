import React from 'react'
import '../App.css'
import './Main.css'

function Main() {
    return (
        <div className='main'>
            <h1 className='main-heading'>
                Hello, I'm <span className='name'>Gillpreet Singh</span>.<br />
                I'm a <span className='profession'>front-end developer</span>.
            </h1>
        </div>
    )
}

export default Main