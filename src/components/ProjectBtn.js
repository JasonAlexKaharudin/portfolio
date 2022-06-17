import React from 'react'
import { Link } from 'react-router-dom';
import { MdOutlineNavigateNext } from 'react-icons/md';

const ProjectBtn = () => {
    return (
        <div className='flex justify-center pt-16'>
            <Link to='/projects'>
                <button
                    className='px-2 pl-3 py-2 text-[#000000] font-medium rounded-md bg-fourthColor hover:bg-[#957502]'
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