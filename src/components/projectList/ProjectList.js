import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProjectCard from '../projectCard/ProjectCard';
import './ProjectList.css';

const ProjectList = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        console.log('useEffect chamado');
        axios.get('http://localhost:3000/project')
            .then(response => {
                console.log(response.data);
                setProjects(response.data);
            })
            .catch(error => console.error('Erro ao buscar projetos:', error));
    }, []);

    return (
        <div className="project-list">
            {projects.map(project => (
                <ProjectCard key={project._id} project={project} />
            ))}
        </div>
    );
}

export default ProjectList;