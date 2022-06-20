import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineNavigateNext } from 'react-icons/md';

const ProjectItemHeader = ({ ProjectName, ProjectDates }) => {
    return (
        <div className='flex'>
            <Link to='/projects'>
                <h1 className='text-sm text-thirdColor md:text-lg hover:underline'>
                    Projects
                </h1>
            </Link>
            <span className='pt-[3px] md:pt-[6px]'> <MdOutlineNavigateNext color='white' /> </span>
            <h2 className='text-sm md:text-lg'>{ProjectName}</h2>
            <div className='pl-3'>
                <p className='bg-[#A9A9A9] px-1 rounded-sm text-xs md:text-sm'>
                    {ProjectDates}
                </p>
            </div>
        </div>
    )
}

export default ProjectItemHeader