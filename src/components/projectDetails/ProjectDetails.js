import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ProjectDetails.css';

const ProjectDetails = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const project = state?.project;

    if (!project) {
        return <div>Projeto não encontrado</div>;
    }

    return (
        <div className='project-details'>
            <h1>{project.name}</h1>
            <div className='project-manager-view-card'>
                <p>Responsável:</p>
                <p>{project.project_manager}</p>
            </div>
            <div className='project-description-view-card'>
                <p>Descrição:</p>
                <p>{project.description}</p>
            </div>
            <div className='tasks-view-card'>
                <h3>Tasks:</h3>
                <ul>
                    {project.tasks.map((task, index) => (
                        <li key={index}>
                            <h4>{task.name}</h4>
                            <p>{task.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='project-dates-view-card'>
                <p>Início/Entrega:</p>
                <p>{new Date(project.start_date).toLocaleDateString()} - {new Date(project.end_date).toLocaleDateString()}</p>
            </div>
        </div>
    );
}

export default ProjectDetails;