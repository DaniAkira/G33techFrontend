import React from 'react';
import Header from '../../components/header/Header';
import ProjectList from '../../components/projectList/ProjectList';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="home-page">
            <Header />
            <div className="add-project-section">
                <button className="add-project-btn">Adicionar novo projeto</button>
            </div>
            <ProjectList />
        </div>
    );
}

export default HomePage;