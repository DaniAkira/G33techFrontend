import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <div className='card-first-section'>
                <p>{project.name}</p>
                <div className="project-actions">
                    <button className="edit-btn">
                        <img 
                            src='assets/search.png'
                            alt="edit-btn"
                        ></img>
                    </button>
                    <button className="delete-btn">
                        <img 
                            src='assets/trash.png'
                            alt="trash-btn"
                        ></img>
                    </button>
                </div>
            </div>
            <div className='card-second-section'>
                <p className='project-description'>{project.description}</p>
                <div className="project-dates">
                    <p>Início:</p>
                    <span> {new Date(project.start_date).toLocaleDateString()}</span>
                    <p>Entrega:</p>
                    <span> {new Date(project.end_date).toLocaleDateString()}</span>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;