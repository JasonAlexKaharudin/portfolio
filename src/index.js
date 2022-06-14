import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import HomePage from './components/pages/HomePage';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage/>} />
      </Routes>
    </Layout>
  </BrowserRouter>
);