import { useContext, useEffect, useState } from 'react';
import Work from '../components/Work';
import { motion } from 'framer-motion';
import ProjectList from '../components/ProjectList';
import Header from '../components/Header';
import AnalyticsContext from '../AnalyticsContext';
import usePageTracking from '../hooks/usePageTracking';

const HomePage = () => {
    const pathURL = window.location.pathname;
    const { userID } = useContext(AnalyticsContext);
    const [isAnimated, setIsAnimated] = useState(false);

    useEffect(() => {
        const delayTime = 300;

        const timeoutId = setTimeout(() => {
            setIsAnimated(true);
        }, delayTime)

        return () => clearTimeout(timeoutId);
    }, []);
    
    usePageTracking(pathURL, userID);

    return (
        
            <>
                <Header/>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={ isAnimated ? { opacity: 1, y: 0 }: {}}
                    transition={{ duration: 0.5 }}
                >
                    <Work />
                    <ProjectList/>
                </motion.div>
            </> 
    )
}

export default HomePage