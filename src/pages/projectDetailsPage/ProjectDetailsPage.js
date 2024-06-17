import React from "react";
import Header from "../../components/header/Header";
import { useNavigate } from "react-router-dom";
import ProjectDetails from "../../components/projectDetails/ProjectDetails";

const ProjectDetailsPage = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Header />
            <ProjectDetails />
            <div className="buttons">
                <button onClick={() => navigate('/')}>Voltar</button>
                <button onClick={() => console.log('Edit')}>Editar</button>
            </div>
        </div>
    )
}

export default ProjectDetailsPage;