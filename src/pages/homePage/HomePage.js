import React from 'react';
import Header from '../../components/header/Header';
import ProjectList from '../../components/projectList/ProjectList';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
    const navigate = useNavigate();

    const handleAddProjectClick = () => {
        navigate('/registerProject');
    }

    return (
        <div className="home-page">
            <Header />
            <div className="add-project-section">
                <button className="add-project-btn" onClick={handleAddProjectClick}>Adicionar novo projeto</button>
            </div>
            <ProjectList />
        </div>
    );
}

export default HomePage;