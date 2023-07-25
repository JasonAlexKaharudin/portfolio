import { useEffect } from 'react'
import { sendClickInformation } from './analytics';

const usePageTracking = (path) => {
    useEffect(() => {
        const startTime = Date.now();
        const pathURL = path;

        return () => {
            const endTime = Date.now();
            const pageViewDuration = (endTime - startTime) / 1000;

            sendClickInformation({ pathURL: pathURL, duration: pageViewDuration });
        }
    });

    return null;
};

export default usePageTracking;
