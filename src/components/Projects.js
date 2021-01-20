import React from 'react'
import './Projects.css'
import ProjectsCard from './ProjectsCard'

function Projects() {
    return (
        <div className='cards'>
            <h1>Check out these Projects!</h1>
            <div className='cards_container'>
                <div className='cards_all'>
                    <ul className='cards_items'>
                        <ProjectsCard 
                            src='image/projects/paris.jpg'
                            text='Europe Travel'
                            path='https://github.com/Gill-7/Europe_Travel'
                        />
                        <ProjectsCard 
                            src='image/projects/todo.jpg'
                            text='Todo App'
                            path='https://github.com/Gill-7/react_todo_app'
                        />
                    </ul>
                    <ul className='projects_items'>
                        <ProjectsCard 
                            src='image/projects/paris.jpg'
                            text='Europe Travel'
                            path='https://github.com/Gill-7/Europe_Travel'
                        />
                        <ProjectsCard 
                            src='image/projects/todo.jpg'
                            text='Todo App'
                            path='https://github.com/Gill-7/react_todo_app'
                        />
                        <ProjectsCard 
                            src='image/projects/todo.jpg'
                            text='Todo App'
                            path='https://github.com/Gill-7/react_todo_app'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Projects
