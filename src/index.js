import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AnimatedRoutes from './routes/AnimatedRoutes';
import Layout from './layouts/Layout';
import './index.css';
import React from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Layout>
      <AnimatedRoutes/>
    </Layout>
  </BrowserRouter>
);