import React from 'react'
import './Footer.css'
import { GrTwitter, GrLinkedinOption } from 'react-icons/gr'
import { AiOutlineGithub, AiOutlineMail } from 'react-icons/ai'

function Footer() {
    return (
        <div className='footer'>
            <div className='footer_container'>
                <div className='footer_contact'>
                    <div className='contact'>Contact Info</div>
                    <div className='contact_info'>
                        <div className='contacts contact_email'><span><AiOutlineMail/></span>gillpreetsinghgill@gmail.com</div>
                    </div>
                </div>
                <div className='social-rights'>
                    <div className='social_link'>
                        <a className='social twitter_link' href='https://twitter.com/home'><GrTwitter /></a>
                        <a className='social linkedin_link' href='https://www.linkedin.com/feed/'><GrLinkedinOption /></a>
                        <a className='social github-link' href='https://github.com/Gill-7'><AiOutlineGithub /></a>
                    </div>
                    <div className='footer-rights'>
                        <p>2021 All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
