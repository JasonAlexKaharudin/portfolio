import { useContext } from 'react';
import Work from '../components/Work';
import { motion } from 'framer-motion';
import ProjectList from '../components/ProjectList';
import Header from '../components/Header';
import AnalyticsContext from '../AnalyticsContext';
import usePageTracking from '../hooks/usePageTracking';

const HomePage = () => {
    const pathURL = window.location.pathname;
    const { userID } = useContext(AnalyticsContext);
    
    usePageTracking(pathURL, userID);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className='flex flex-col'>
                <Header/>
                <Work />
                <ProjectList/>
            </div>
        </motion.div>
    )
}

export default HomePage