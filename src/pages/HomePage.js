import React from 'react'
import Header from '../components/Header';
import Bio from '../components/Bio';
import Work from '../components/Work';
import ProjectBtn from '../components/ProjectBtn';

const HomePage = () => {
    return (
        <>
            <Header />
            <Bio />
            <ProjectBtn />
            <Work />
        </>
    )
}

export default HomePage