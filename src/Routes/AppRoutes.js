import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from '../pages/homePage/HomePage';

const AppRoutes = () => {
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<HomePage/>}></Route>
        </Routes>
    </BrowserRouter>
}

export { AppRoutes };