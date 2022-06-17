import React from 'react';
import { ProjectData } from './data/ProjectData';
import { useParams } from "react-router-dom";
import { MdOutlineNavigateNext } from 'react-icons/md';
import { GoLinkExternal } from 'react-icons/go';

const Project = () => {
    const params = useParams();
    const currentProject = ProjectData.find(project => project.id === params.id)

    return (
        <section className='pt-20 pb-20 md:pb-32'>
            <div className='flex'>
                <h1 className='text-sm text-thirdColor md:text-lg'>
                    Projects
                </h1>

                <span className='pt-[3px] md:pt-[6px]'> <MdOutlineNavigateNext color='white' /> </span>

                <h2 className='text-sm md:text-lg'>{currentProject.name}</h2>

                <div className='pl-3'>
                    <p className='bg-[#A9A9A9] px-1 rounded-sm text-xs md:text-sm'>
                        {currentProject.dates}
                    </p>
                </div>
            </div>

            <div className='py-5'>
                {
                    currentProject.description.map((text, idx) => {
                        return (
                            <p key={idx} className='py-2 font-light indent-5'>
                                {text}
                            </p>
                        )
                    })
                }
            </div>


            <div>
                <div className='flex py-1'>
                    <p className='px-2 max-h-6 bg-[#245526] rounded-sm text-[#68EA6D] font-medium'>STACK</p>


                    <p className='pl-3 text-[#A4A4A4]'>{currentProject.stack.join(' ')}</p>
                </div>

                <div className='flex py-1'>
                    <p className='px-2 bg-[#245526] rounded-sm text-[#68EA6D] font-medium'>CODE</p>

                    <div className='flex text-thirdColor'>
                        <a href={currentProject.github} className='pl-5 '>
                            Github
                        </a>
                        <span className='pt-1 pl-2'> <GoLinkExternal /> </span>
                    </div>
                </div>

                {
                    currentProject.site &&
                    <div className='flex py-1'>
                        <p className='px-2 bg-[#245526] rounded-sm text-[#68EA6D] font-medium'>SITE</p>

                        <div className='flex text-thirdColor'>
                            <a href={currentProject.site} className='pl-5 '>
                                {currentProject.id}
                            </a>
                            <span className='pt-1 pl-2'> <GoLinkExternal /> </span>
                        </div>
                    </div>
                }

                {
                    currentProject.miro &&
                    <div className='flex py-1'>
                        <p className='px-2 bg-[#245526] rounded-sm text-[#68EA6D] font-medium'>MIRO</p>

                        <div className='flex text-thirdColor'>
                            <a href={currentProject.miro} className='pl-5 '>
                                User Flows
                            </a>
                            <span className='pt-1 pl-2'> <GoLinkExternal /> </span>
                        </div>
                    </div>
                }

                {
                    currentProject.figma &&
                    <div className='flex py-1'>
                        <p className='px-2 bg-[#245526] rounded-sm text-[#68EA6D] font-medium'>FIGMA</p>

                        <div className='flex text-thirdColor'>
                            <a href={currentProject.figma} className='pl-5 '>
                                Prototypes
                            </a>
                            <span className='pt-1 pl-2'> <GoLinkExternal /> </span>
                        </div>
                    </div>
                }

            </div>
        </section>
    )
}

export default Project;