import { useContext } from 'react';
import { GoLinkExternal } from 'react-icons/go';
import AnalyticsContext from '../AnalyticsContext';
import usePageTracking from '../hooks/usePageTracking';

const ProjectItemInfo = ({ id, stack, github, site, miro, figma }) => {
    const { handleTrackClick, userID } = useContext(AnalyticsContext);
    const pathURL = window.location.pathname;

    usePageTracking(pathURL, userID);

    return (
        <div>
            <div className='flex py-1'>
                <p className='px-2 max-h-6 bg-[#245526] rounded-sm text-[#68EA6D] font-medium'>STACK</p>
                <p className='pl-3 text-[#A4A4A4]'>{stack.join(' ')}</p>
            </div>

            <div className='flex py-1'>
                <p className='px-2 bg-[#245526] rounded-sm text-[#68EA6D] font-medium'>CODE</p>

                <div className='flex text-thirdColor'>
                    <a id={`${id}-github`} href={github} className='flex pl-5 hover:underline' onClick={(e) => handleTrackClick(e)}>
                        Github
                        <span className='pt-1 pl-2'> <GoLinkExternal /> </span>
                    </a>
                </div>
            </div>

            {
                site &&
                <div className='flex py-1'>
                    <p className='px-2 bg-[#245526] rounded-sm text-[#68EA6D] font-medium'>SITE</p>

                    <div className='flex text-thirdColor'>
                        <a id={`${id}-site`}  href={site} className='pl-5' onClick={(e) => handleTrackClick(e)}>
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
                        <a id={`${id}-miro`} href={miro} className='pl-5' onClick={(e) => handleTrackClick(e)}>
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
                        <a id={`${id}-figma`} href={figma} className='pl-5' onClick={(e) => handleTrackClick(e)}>
                            Prototypes
                        </a>
                        <span className='pt-1 pl-2'> <GoLinkExternal /> </span>
                    </div>
                </div>
            }
        </div>
    )
}

export default ProjectItemInfo;