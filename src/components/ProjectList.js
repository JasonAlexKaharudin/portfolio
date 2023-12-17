import React from 'react';
import { projectList } from './data/ProjectList';
import ProjectListCard from './ProjectListCard';

const ProjectList = () => {
    return (
        <section className="pt-20 md:pt-16">
            <h1 id='work' className='text-2xl text-[#a1a1a1] md:text-2xl'>Projects</h1>

            <div className='flex flex-wrap justify-between pt-5'>
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