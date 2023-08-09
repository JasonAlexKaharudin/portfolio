import React from 'react';
import { projectList } from './data/ProjectList';
import ProjectListCard from './ProjectListCard';

const ProjectList = () => {
    return (
        <section className="pt-24 md:pt-18">
            <div className='flex'>
                <h1 className='text-2xl border-b-4 md:text-2xl border-secondaryTextColor font-monospace'>Projects</h1>
            </div>

            <div className='flex flex-wrap justify-around pt-5'>
                {
                    projectList.map((project, idx) => {
                        return (
                            <ProjectListCard key={idx} project={project} />
                        )
                    })
                }
            </div>
        </section>

    )
}

export default ProjectList;