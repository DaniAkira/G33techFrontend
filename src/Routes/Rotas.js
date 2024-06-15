import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from '../pages/homePage/HomePage';
import FormPage from '../pages/formPage/FormPage';

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<HomePage/>} />
                <Route exact path="/registerProject" element={<FormPage/>} />
            </Routes>
        </BrowserRouter>
    )
}

export { Rotas };