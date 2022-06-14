import React, { useEffect } from 'react'
import WorkResp from './WorkResp';

const MMContent = {
    role: 'Co-founder & CTO',
    dates: 'February 2021 - February 2022',
    res: ['Work with customer-facing API', 'Something to do with Widgets', 'Managed some dudes', 'These stuff on the web app with postgreSQL']
}

const amiliContent = {
    role: 'UX Designer and Project Management Intern',
    dates: 'May 2021 - August 2021',
    res: ['Help improve Customer Dashboard', 'Debug Customer', 'Helped with V2 of customer dashboard', 'These stuff on the web app with postgreSQL']
}


const WorkCard = ({ showMM }) => {
    useEffect(() => {
        console.log(showMM);
    }, [showMM])


    return (
        <div className='flex flex-col pt-5 md:pt-0 md:pl-10'>
            <div className='flex flex-col'>
                <h1 className='pb-2 text-2xl'> {showMM === true? MMContent.role : amiliContent.role} </h1>
                <h2 className='pb-3 text-sm font-light text-[#A4A4A4]'>{showMM === true? MMContent.dates : amiliContent.dates}</h2>
                
                { 
                    showMM === true? 
                    MMContent.res.map((text, idx) => {
                        return(
                            <WorkResp key={idx} text={text}/>
                        )
                    })
                    :
                    amiliContent.res.map((text, idx) => {
                        return(
                            <WorkResp key={idx} text={text}/>
                        )
                    })
                }                
            </div>
        </div>
    )
}

export default WorkCard