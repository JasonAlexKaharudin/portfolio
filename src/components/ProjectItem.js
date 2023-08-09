import React from 'react';
import ProjectItemHeader from './ProjectItemHeader';
import ProjectItemDesc from './ProjectItemDesc';
import ProjectItemInfo from './ProjectItemInfo';
import { ProjectData } from './data/ProjectData';
import { useParams } from "react-router-dom";

const ProjectItem = () => {
    const params = useParams();
    console.log(params);
    const currentProject = ProjectData.find(project => project.id === params.id)

    return (
        <section className='pt-20 pb-20 md:pb-32'>
            <ProjectItemHeader ProjectName={currentProject.name} ProjectDates={currentProject.dates} />
            <ProjectItemDesc description={currentProject.description} />
            <ProjectItemInfo
                id={currentProject.id}
                stack={currentProject.stack}
                github={currentProject.github}
                site={currentProject.site}
                miro={currentProject.miro}
                figma={currentProject.figma}
            />
        </section>
    )
}

export default ProjectItem;