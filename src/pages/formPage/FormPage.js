import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/Header';
import axios from 'axios';
import './FormPage.css'; // Importe o arquivo CSS para os estilos

const FormPage = () => {
  const navigate = useNavigate();
  const [projectName, setProjectName] = useState('');
  const [projectManager, setProjectManager] = useState('');
  const [description, setDescription] = useState('');
  const [tasks, setTasks] = useState([{ name: '', description: '' }]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleAddTask = () => {
    setTasks([...tasks, '']);
  };

  const handleTaskChange = (index, field, value) => {
    const newTasks = [...tasks];
    newTasks[index][field] = value;
    setTasks(newTasks);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const projectData = {
        name: projectName,
        project_manager: projectManager,
        description: description,
        start_date: startDate,
        end_date: endDate,
        tasks: tasks.map(task => ({
            name: task.name,
            description: task.description
        }))
    };
    console.log({ projectData });

    try {
        const response = await axios.post('http://localhost:3000/project', projectData);
        if (response.status === 200) {
          console.log('Projeto criado com sucesso!');
          // Redirecionar ou mostrar uma mensagem de sucesso conforme necessário
        } else {
          console.error('Erro ao criar o projeto:', response.statusText);
        }
      } catch (error) {
        console.error('Erro ao criar o projeto:', error);
      };
  };

  return (
    <div>
      <Header />
      <form className="form-container" onSubmit={handleSubmit}>
        <div className='forms-label project-name'>
          <label>Nome do Projeto</label>
          <input
            type="text"
            placeholder="Nome do projeto"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
        </div>
        <div className='forms-label project-manager'>
          <label>Nomes dos responsáveis</label>
          <input
            type="text"
            placeholder="Nome dos responsáveis"
            value={projectManager}
            onChange={(e) => setProjectManager(e.target.value)}
          />
        </div>
        <div className='forms-label project-description'>
          <label>Descrição</label>
          <textarea
            placeholder="Descrição do projeto"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className='forms-label tasks'>
          <label>Tasks</label>
          {tasks.map((task, index) => (
            <div key={index} className="task">
              <input
                type="text"
                placeholder="Nome da tarefa"
                value={task.name}
                onChange={(e) => handleTaskChange(index, 'name', e.target.value)}
              />
              <input
                type="text"
                placeholder="Descrição da tarefa"
                value={task.description}
                onChange={(e) => handleTaskChange(index, 'description', e.target.value)}
              />
            </div>
          ))}
          <button className='new-task-btn' type="button" onClick={handleAddTask}>
            Adicionar nova tarefa
            <img 
                src='assets/plus.png'
                alt="plusbtn"
            ></img>
          </button>
        </div>
        <div className='forms-label start-date'>
          <label>Data de início</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className='forms-label end-date'>
          <label>Data de entrega</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <div className="buttons">
          <button type="button" onClick={() => navigate(-1)}>
            Voltar
          </button>
          <button type="submit" onClick={handleSubmit}>Cadastrar</button>
        </div>
      </form>
    </div>
  );
};

export default FormPage;