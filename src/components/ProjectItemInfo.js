import React from 'react';
import { GoLinkExternal } from 'react-icons/go';

const ProjectItemInfo = ({ id, stack, github, site, miro, figma }) => {
    return (
        <div>
            <div className='flex py-1'>
                <p className='px-2 max-h-6 bg-[#245526] rounded-sm text-[#68EA6D] font-medium'>STACK</p>
                <p className='pl-3 text-[#A4A4A4]'>{stack.join(' ')}</p>
            </div>

            <div className='flex py-1'>
                <p className='px-2 bg-[#245526] rounded-sm text-[#68EA6D] font-medium'>CODE</p>

                <div className='flex text-thirdColor'>
                    <a href={github} className='pl-5 '>
                        Github
                    </a>
                    <span className='pt-1 pl-2'> <GoLinkExternal /> </span>
                </div>
            </div>

            {
                site &&
                <div className='flex py-1'>
                    <p className='px-2 bg-[#245526] rounded-sm text-[#68EA6D] font-medium'>SITE</p>

                    <div className='flex text-thirdColor'>
                        <a href={site} className='pl-5 '>
                            {id}
                        </a>
                        <span className='pt-1 pl-2'> <GoLinkExternal /> </span>
                    </div>
                </div>
            }

            {
                miro &&
                <div className='flex py-1'>
                    <p className='px-2 bg-[#245526] rounded-sm text-[#68EA6D] font-medium'>MIRO</p>

                    <div className='flex text-thirdColor'>
                        <a href={miro} className='pl-5 '>
                            User Flows
                        </a>
                        <span className='pt-1 pl-2'> <GoLinkExternal /> </span>
                    </div>
                </div>
            }

            {
                figma &&
                <div className='flex py-1'>
                    <p className='px-2 bg-[#245526] rounded-sm text-[#68EA6D] font-medium'>FIGMA</p>

                    <div className='flex text-thirdColor'>
                        <a href={figma} className='pl-5 '>
                            Prototypes
                        </a>
                        <span className='pt-1 pl-2'> <GoLinkExternal /> </span>
                    </div>
                </div>
            }
        </div>
    )
}

export default ProjectItemInfo