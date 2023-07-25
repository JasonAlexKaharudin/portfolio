import Header from '../components/Header';
import Bio from '../components/Bio';
import Work from '../components/Work';
import ProjectBtn from '../components/ProjectBtn';
import { motion } from 'framer-motion';
import usePageTracking from '../usePageTracking';
import useBrowserInfo from '../useBrowserInfo';

const HomePage = () => {
    const pathURL = window.location.pathname;
    usePageTracking(pathURL);
    useBrowserInfo();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Header />
            <Bio />
            <ProjectBtn />
            <Work />
        </motion.div>
    )
}

export default HomePage