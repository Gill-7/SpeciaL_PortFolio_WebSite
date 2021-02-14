import React from 'react'
import './Projects.css'
import ProjectsCard from './ProjectsCard'

function Projects() {
    return (
        <div className='cards'>
            <h1>Personal Projects</h1>
            <div className='cards_container'>
                <div className='cards_all'>
                    <ul className='cards_items'>
                        <ProjectsCard 
                            src='image/projects/netflix.jpg'
                            text='Netflix React Project'
                            path='https://determined-franklin-113754.netlify.app/'
                        />
                        <ProjectsCard 
                            src='image/projects/paris.jpg'
                            text='Europe Travel'
                            path='https://romantic-wilson-bc730f.netlify.app'
                        />
                    </ul>
                    <ul className='cards_items'>
                        <ProjectsCard 
                            src='image/projects/todo.jpg'
                            text='Todo App'
                            path='https://upbeat-brattain-45e4f6.netlify.app/'
                        />
                        <ProjectsCard 
                            src='image/projects/pac.png'
                            text='Pacman'
                            path='https://github.com/Gill-7/Pac-ManGame'
                        />
                        <ProjectsCard 
                            src='image/projects/img.jpg'
                            text='Recipe App'
                            path='https://gifted-minsky-45dd72.netlify.app/'
                        />
                        
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Projects
