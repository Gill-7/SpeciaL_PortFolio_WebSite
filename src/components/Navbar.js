import React from 'react'
import './Navbar.css'
import {SiJustgiving} from 'react-icons/si'

function Navbar() {
    return (
        <nav className='navbar'>
            <div className='nav-logo'>
                <SiJustgiving />
            </div>
            <ul className='nav-heading'>
                <li><a href='./home'>Home</a></li>
                <li><a href='./skills'>Skills</a></li>
                <li><a href='./projects'>Projects</a></li>
            </ul>
            
        </nav>
    )
}

export default Navbar