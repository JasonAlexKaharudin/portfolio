import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AnalyticsContext from '../AnalyticsContext';

const ProjectListCard = ({ project }) => {
    const { handleTrackClick } = useContext(AnalyticsContext);

    return (
        <div className='w-full py-8 md:w-5/12'>
            <Link id={`${project.alt}-project-card-button`} to={`/projects/${project.alt}`} onClick={(e) => handleTrackClick(e)}>
                <img src={project.picture} alt={project.alt} />
                <div className='flex justify-center pt-3'>
                    <h1 className='text-xl font-medium'> {project.name} </h1>
                </div>

                <div className='flex justify-between pt-2 text-xs text-[#8E8E8E]'>
                    {
                        project.stack.map((tech, idx) => {
                            return (
                                <p key={idx}>{tech}</p>
                            )
                        })
                    }
                </div>

                <div className='pt-3 font-light'>
                    <p>{project.header}</p>
                </div>
            </Link>
        </div>
    )
}

export default ProjectListCard;