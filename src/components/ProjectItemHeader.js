import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineNavigateNext } from 'react-icons/md';

const ProjectItemHeader = ({ ProjectName, ProjectDates }) => {
    return (
        <div className='flex'>
            <Link to='/'>
                <h1 className='text-lg text-thirdColor hover:underline'>
                    Home
                </h1>
            </Link>
            <span className='pt-[6px] md:pt-[7px]'> <MdOutlineNavigateNext color='white' /> </span>
            <h2 className='text-lg'>{ProjectName}</h2>
            <div className='pl-3'>
                <p className='bg-[#A9A9A9] px-1 rounded-sm text-xs'>
                    {ProjectDates}
                </p>
            </div>
        </div>
    )
}

export default ProjectItemHeader