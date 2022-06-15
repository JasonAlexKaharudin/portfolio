import React from 'react'
import WorkDetails from './WorkDetails'

const WorkCard = ({ selectedTab }) => {
    return (
        <div className='flex flex-col pt-5 md:pt-0 md:pl-10'>
            <div className='flex flex-col'>
                <h1 className='pb-2 text-3xl'>{selectedTab.role}</h1>
                <h2 className='pb-3 text-md font-light text-[#A4A4A4]'>{selectedTab.dates}</h2>
                {
                    selectedTab.res.map((text, idx) => {
                        return (
                            <WorkDetails key={idx} text={text} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default WorkCard