import React from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage'
import ProjectItem from '../components/ProjectItem';
import ScrollToTop from '../components/ScrollToTop';

const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence>
            <ScrollToTop/>
            <Routes location={useLocation()} key={location.pathname}>
                <Route path="/" element={<HomePage />} />
                <Route path='/:id' element={<ProjectItem />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes