import React from 'react'

function ProjectsCard(props) {
    return (
        <>
            <li className='cards_item'>
                <a className='cards_item_link' href={props.path} target="_blank" rel="noopener noreferrer">
                    <figure className='cards_item_pic-wrap'>
                        <img
                            className='cards_item_img'
                            alt='Project pic'
                            src={props.src}
                        />
                        <div className='cards_item_info'>
                            <h5 className='cards_item_text'>{props.text}</h5>
                        </div>
                    </figure>
                </a>
            </li>
        </>
    )
}

export default ProjectsCard