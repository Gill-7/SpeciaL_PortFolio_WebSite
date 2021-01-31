import React from 'react'
import '../App.css'
import Skills from './Skills'
import './Skills.css'

export default function SkillsPage() {
    return (
        <>
           <Skills />
           <div className='skills_abilities'>
               <h2 className='skills_head'>The abilities I have and I learn:</h2>
               <div className='skills_contain'>
                   <div className='skills_type'>
                       <ul className='skills_have'>
                           <h4 className='skills_soft'>Soft Skills</h4>
                           <li className='skills_soft_1'>Problem Solving</li>
                           <li className='skills_soft_1'>Creativity</li>
                           <li className='skills_soft_1'>Critical Thinking</li>
                           <li className='skills_soft_1'>Work Ehic</li>
                           <li className='skills_soft_1'>Collaboration</li>
                       </ul>
                       <ul className='skills_learn'>
                           <h4 className='skills_hard'>Hard Skills</h4>
                           <li className='skills_hard_2'>Git</li>
                           <li className='skills_hard_2'>Debugging</li>
                           <li className='skills_hard_2'>Front End Frameworks</li>
                           <li></li>
                       </ul>
                   </div>
               </div>
           </div>
        </>
    )
}
