import { useContext } from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import AnalyticsContext from '../AnalyticsContext';

const FooterCard = () => {
    const { handleTrackClick } = useContext(AnalyticsContext);

    return (
        <footer className='flex flex-col items-center justify-center md:items-end md:justify-end border-[#8E8E8E] mb-10 md:fixed md:bottom-12 md:right-12'>
            <div className='flex pb-3 pr-3 md:pb-1'>
                <a id='footer-github' href='https://github.com/JasonAlexKaharudin?tab=repositories' className='px-3' onClick={(e) => handleTrackClick(e)}>
                    <span>
                        <AiFillGithub size={35} color={'8E8E8E'} />
                    </span>
                </a>
                <a id='footer-linkedin' href='https://www.linkedin.com/in/jason-a-kaharudin/' className='px-1' onClick={(e) => handleTrackClick(e)}>
                    <span>
                        <AiFillLinkedin size={35} color={'8E8E8E'} />
                    </span>
                </a>
            </div>

            <span>
                <a id='footer-email' href='mailto:jasonakaharudin@gmail.com' className='text-sm md:text-lg font-monospace text-[#8E8E8E]' onClick={(e) => handleTrackClick(e)}>jasonakaharudin@gmail.com</a>
            </span>
            <span>
                <a id='footer-analytics' href='https://analytics-app-gilt.vercel.app/' className='text-sm md:text-md font-monospace text-[#8E8E8E]' onClick={(e) => handleTrackClick(e)}>
                    Click me for analytics!
                </a>
            </span>
        </footer>
    )
}

export default FooterCard;