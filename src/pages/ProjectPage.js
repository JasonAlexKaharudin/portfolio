// CURRENTLY UNUSED
import ProjectList from '../components/ProjectList';
import { motion } from 'framer-motion';

const ProjectPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}   
            transition={{ duration: 0.5 }}
        >
            <div className='pt-20 md:pt-14'>
                <h1 className='text-3xl text-center pb-7 md:pb-14 font-monospace text-secondaryTextColor'>Projects</h1>
                <ProjectList />
                <p>hi</p>
            </div>
        </motion.div>
    )
}

export default ProjectPage;