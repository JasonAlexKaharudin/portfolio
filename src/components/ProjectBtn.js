import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineNavigateNext } from 'react-icons/md';
import AnalyticsContext from '../AnalyticsContext';

const ProjectBtn = () => {
    const { handleTrackClick } = useContext(AnalyticsContext);

    return (
        <div className='flex justify-center pt-16'>
            <Link to='/projects'>
                <button
                    className='px-2 pl-3 py-2 text-[#000000] font-medium rounded-md bg-fourthColor hover:bg-[#957502]'
                    id='home-projects-button'
                    onClick={(e) => handleTrackClick(e)}
                >

                    <div className='flex'>
                        <p>Projects</p>
                        <span className='pt-[5px]'><MdOutlineNavigateNext /> </span>
                    </div>
                </button>
            </Link>
        </div>
    )
}

export default ProjectBtn