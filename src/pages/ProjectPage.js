import React from 'react';
import Projects from '../components/Projects';

const ProjectPage = () => {
    return (
        <div className='pt-20 md:pt-14'>
            <h1 className='text-3xl text-center pb-7 md:pb-14 font-monospace text-secondaryTextColor'>Projects</h1>
            <Projects/>
        </div>
    )
}

export default ProjectPage;