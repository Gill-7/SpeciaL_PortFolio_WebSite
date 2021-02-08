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
                            path='https://github.com/Gill-7/Netflix_React_Project'
                        />
                        <ProjectsCard 
                            src='image/projects/paris.jpg'
                            text='Europe Travel'
                            path='https://github.com/Gill-7/Europe_Travel'
                        />
                    </ul>
                    <ul className='cards_items'>
                        <ProjectsCard 
                            src='image/projects/pac.png'
                            text='Pacman'
                            path='https://github.com/Gill-7/Pac-ManGame'
                        />
                        <ProjectsCard 
                            src='image/projects/todo.jpg'
                            text='Todo App'
                            path='https://github.com/Gill-7/react_todo_app'
                        />
                        <ProjectsCard 
                            src='image/projects/movie.jpg'
                            text='Movie Search'
                            path='https://github.com/Gill-7/react_movie_search'
                        />
                        
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Projects
