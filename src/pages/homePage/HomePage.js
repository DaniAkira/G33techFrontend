import React, { useContext, useEffect } from 'react';
import Header from '../../components/header/Header';
import ProjectList from '../../components/projectList/ProjectList';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import { SuccessMessageContext } from '../../contexts/SuccessMessageContext';

const HomePage = () => {
    const navigate = useNavigate();

    const { successMessage, setSuccessMessage } = useContext(SuccessMessageContext);

    useEffect(() => {
        if (successMessage) {
        const timer = setTimeout(() => {
            setSuccessMessage('');
        }, 2000);

        return () => clearTimeout(timer);
        }
    }, [successMessage, setSuccessMessage]);

    const handleAddProjectClick = () => {
        navigate('/registerProject');
    }

    return (
        <div className="home-page">
        {successMessage && (
            <div className="success-message">
                {successMessage}
            </div>
        )}
            <Header />
            <div className="add-project-section">
                <button className="add-project-btn" onClick={handleAddProjectClick}>Adicionar novo projeto</button>
            </div>
            <ProjectList />
        </div>
    );
}

export default HomePage;