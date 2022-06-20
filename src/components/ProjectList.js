import React from 'react';
import { projectList } from './data/ProjectList';
import ProjectListCard from './ProjectListCard';

const ProjectList = () => {
    return (
        <section className='pb-20 md:pb-32'>
            <div className='flex flex-wrap justify-around pt-6'>
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