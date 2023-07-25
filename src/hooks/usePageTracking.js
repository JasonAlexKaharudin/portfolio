import { useEffect } from 'react'
import { sendClickInformation } from '../analytics';

const usePageTracking = (path, userID) => {
    useEffect(() => {
        const startTime = Date.now();
        const pathURL = path;

        return () => {
            const endTime = Date.now();
            const pageViewDuration = (endTime - startTime) / 1000;
            if (pageViewDuration < 1.000){
                return
            }
            sendClickInformation({ userID: userID, pathURL: pathURL, duration: pageViewDuration });
        }
    });

    return null;
};

export default usePageTracking;