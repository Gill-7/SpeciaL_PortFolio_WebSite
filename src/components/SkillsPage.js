import React from 'react'
import '../App.css'
import Skills from './Skills'
import './Skills.css'

export default function SkillsPage() {
    return (
        <>
           <div className='skills_main_container'>
            <Skills />
            <div className='skills_abilities'>
                <h2 className='skills_head'>The abilities that I have and I learn:</h2>
                <div className='skills_contain'>
                        <ul className='skills_have'>
                            <h4 className='skills_softs'>Soft Skills</h4>
                            <li className='skills_soft ski'>Problem Solving</li>
                            <li className='skills_soft ski'>Creativity</li>
                            <li className='skills_soft ski'>Critical Thinking</li>
                            <li className='skills_soft ski'>Work Ehic</li>
                            <li className='skills_soft ski'>Collaboration</li>
                        </ul>
                        <ul className='skills_learn'>
                            <h4 className='skills_hards'>Hard Skills</h4>
                            <li className='skills_hard ski'>Git</li>
                            <li className='skills_hard ski'>Debugging</li>
                            <li className='skills_hard ski'>Front End Frameworks</li>
                            <li></li>
                        </ul>
                </div>
            </div>
           </div>
        </>
    )
}
