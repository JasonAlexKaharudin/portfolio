import { useContext } from "react";
import AnalyticsContext from "../AnalyticsContext";
import { motion } from 'framer-motion';
import { MdArrowOutward } from "react-icons/md";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Header = () => {
    const { handleTrackClick } = useContext(AnalyticsContext);

    return (
        <motion.div
        initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}            
            transition={{ duration: 0.5 }}
        >
            <header className='md:pt-10 pb-7'>
                <div className='flex flex-col'>
                    <h1 className='text-3xl md:text-4xl'>Jason</h1>
                    <h2 className='pt-2 text-md text-[#8E8E8E]'>I write code for fun and a living.</h2>
                    <p className="pt-4">
                        I've been working professionally for a year and
                        have been developing mostly on the backend professionally. Now I have the privilege of working at <a href="https://www.kiteworks.com/" className="underline">Kiteworks</a>, a private content network as a backend engineer.
                    </p>
                    
                    <div className="pt-5">
                        <a href='https://github.com/JasonAlexKaharudin?tab=repositories' className='flex pt-4 md:pt-4 text-sm md:text-lg font-monospace text-[#8E8E8E] hover:text-[#B7B7B7]' onClick={(e) => handleTrackClick(e)}>
                            <AiFillGithub size={25} color={'8E8E8E'} />
                            <span className="pt-[3px] md:pt-[2px] pl-2 md:text-sm">
                                Come see my bugs
                            </span>
                        </a>
                        <a href='https://www.linkedin.com/in/jason-a-kaharudin/' className='flex pt-4 md:pt-4 text-sm md:text-lg font-monospace text-[#8E8E8E] hover:text-[#B7B7B7]' onClick={(e) => handleTrackClick(e)}>
                            <AiFillLinkedin size={25} color={'8E8E8E'} />
                            <span className="pt-[3px] md:pt-[2px] pl-2 md:text-sm">
                                 Humble professional brags
                            </span>
                        </a>
                        <a href='mailto:jasonakaharudin@gmail.com' className='flex pt-4 md:pt-4 text-sm md:text-lg font-monospace text-[#8E8E8E] hover:text-[#B7B7B7]' onClick={(e) => handleTrackClick(e)}>
                            <MdArrowOutward  size={25} color={'8E8E8E'}/>
                            <span className="pt-[3px] md:pt-[2px] pl-2 md:text-sm">
                                Email me
                            </span>
                        </a>
                    </div>
                </div>
            </header>
        </motion.div>
        
    )
}

export default Header