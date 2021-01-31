import React, { Component } from 'react'
import { SiJustgiving } from 'react-icons/si'
import './Navbar.css'

class Navbar extends Component {
    
    state = { clicked: false }

    handleClick = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }    

    render() {
        return (
            <nav className='navbar'>
                <a className='nav-logo' href='/home'><SiJustgiving /></a>
                <div className='menu-icon' onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={this.state.clicked ? 'nav-heading active' : 'nav-heading'}>
                    <li><a className='nav-link' href='./home'>Home</a></li>
                    <li><a className='nav-link' href='./skills'>Skills</a></li>
                    <li><a className='nav-link' href='./projects'>Projects</a></li>
                    <li><a className='nav-link' href='./about'>About Me</a></li>
                </ul>
            </nav>
        )
    }
}

export default Navbar