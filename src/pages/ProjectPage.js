import React from 'react';
import ProjectList from '../components/ProjectList';

const ProjectPage = () => {
    return (
        <div className='pt-20 md:pt-14'>
            <h1 className='text-3xl text-center pb-7 md:pb-14 font-monospace text-secondaryTextColor'>Projects</h1>
            <ProjectList/>
        </div>
    )
}

export default ProjectPage;