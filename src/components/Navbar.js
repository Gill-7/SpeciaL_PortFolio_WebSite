import React from 'react'
import './Navbar.css'
import {SiJustgiving} from 'react-icons/si'

function Navbar() {
    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <div className='nav-logo'>
                    <SiJustgiving />
                </div>
                <ul className='nav-heading'>
                    <li><a className='a-link' href='./home'>Home</a></li>
                    <li><a className='a-link' href='./skills'>Skills</a></li>
                    <li><a className='a-link' href='./projects'>Projects</a></li>
                    <li><a className='a-link' href='./about'>About Me</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar