import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const FooterCard = () => {
    return (
        <footer className='flex flex-col items-center justify-center md:items-end md:justify-end border-[#8E8E8E] md:fixed md:bottom-14 md:right-14'>
            <div className='flex pb-3 md:pb-1'>
                <a href='https://github.com/JasonAlexKaharudin?tab=repositories' className='px-3'>
                    <span>
                        <AiFillGithub size={30} color={'8E8E8E'} />
                    </span>
                </a>
                <a href='https://www.linkedin.com/in/jason-a-kaharudin/' className='px-1'>
                    <span>
                        <AiFillLinkedin size={30} color={'8E8E8E'} />
                    </span>
                </a>
            </div>

            <span>
                <a href='mailto:jasonakaharudin@gmail.com' className='text-sm md:text-md font-monospace text-[#8E8E8E]'>jasonakaharudin@gmail.com</a>
            </span>

        </footer>
    )
}

export default FooterCard;