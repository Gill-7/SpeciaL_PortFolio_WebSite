import React from 'react'
// import { Link } from 'react-router-dom'


function ProjectsCard(props) {
    return (
        <>
            <li className='cards_item'>
                <a className='cards_item_link' href={props.path}>
                    <img
                        className='cards_item_img'
                        alt='Project pic'
                        src={props.src}
                    />
                    <div className='cards_item_info'>
                        <h5 className='cards_item_text'>{props.text}</h5>
                    </div>
                </a>
            </li>
        </>
    )
}

export default ProjectsCard