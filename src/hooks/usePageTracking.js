import { useEffect } from 'react'
import { sendPageTimeInformation } from '../sendToServer';

const usePageTracking = (path, userID) => {
    const startTime = Date.now();
 
    useEffect(() => {
        return () => {
            const endTime = Date.now();
            const pageViewDuration = (endTime - startTime) / 1000;
            if (pageViewDuration < 0.5 || pageViewDuration > 120 || path === "/"){
                return;
            }
            sendPageTimeInformation({ userID: userID, pathURL: path, duration: pageViewDuration, timestamp: new Date() });
        }
    });

    return null;
};

export default usePageTracking;