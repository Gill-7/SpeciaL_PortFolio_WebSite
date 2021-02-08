import React from 'react'
import '../App.css'
import ProjectsCard from './ProjectsCard'
import './Projects.css'

export default function ProjectsPage() {
    return (
        <>
            <div className='cards'>
            <h1>More Projects</h1>
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
                        <ProjectsCard 
                            src='image/projects/pac.png'
                            text='Pacman'
                            path='https://github.com/Gill-7/Pac-ManGame'
                        />
                    </ul>
                    <ul className='cards_items'>
                        <ProjectsCard 
                            src='image/projects/img.jpg'
                            text='ImagesAPI'
                            path='https://github.com/Gill-7/Images_API'
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
                    <ul className='cards_items'>
                        <ProjectsCard 
                            src='image/projects/css.jpg'
                            text='Flex Grid Projects'
                            path='https://github.com/Gill-7/flex_grid_Project/tree/master/projects'
                        />
                        <ProjectsCard 
                            src='image/projects/design.jpg'
                            text='Styled Comp CSS'
                            path='https://github.com/Gill-7/Styled-component-website'
                        />
                        <ProjectsCard 
                            src='image/projects/responsive.jpg'
                            text='Responsive Project'
                            path='https://github.com/Gill-7/css-responsive-project'
                        />
                        
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}
