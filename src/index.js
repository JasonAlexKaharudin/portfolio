import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import Project from './components/Project';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/projects" element={<ProjectPage/>} />
        <Route path='/projects/:id' element={<Project/>}/>
      </Routes>
    </Layout>
  </BrowserRouter>
);