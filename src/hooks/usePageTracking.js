import { useEffect } from 'react'
import { sendPageTimeInformation } from '../sendToServer';

const usePageTracking = (path, userID) => {
    useEffect(() => {
        const startTime = Date.now();
        const pathURL = path;

        return () => {
            const endTime = Date.now();
            const pageViewDuration = (endTime - startTime) / 1000;
            if (pageViewDuration < 0.5 || pageViewDuration > 120 || pathURL === "/"){
                return;
            }
            sendPageTimeInformation({ userID: userID, pathURL: pathURL, duration: pageViewDuration, timestamp: new Date() });
        }
    });

    return null;
};

export default usePageTracking;