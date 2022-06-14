import React from 'react';
import { MdNavigateNext } from 'react-icons/md';

const WorkResp = ({ text }) => {
    return (
        <div className='flex'>
            <span className='pt-[3px]'><MdNavigateNext color={'339F78'} /></span>
            <p className='text-sm'>{text}</p>
        </div>
    )
}

export default WorkResp