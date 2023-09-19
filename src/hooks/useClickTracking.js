import { useState, useEffect } from 'react';
import { sendClickInformation } from '../sendToServer';

const useClickTracking = () => {
  const [clicks, setClicks] = useState([]);

  useEffect(() => {
    window.onbeforeunload = () => {
        sendClickInformation({ userID: sessionStorage.getItem('userID'), clicks: clicks });
        setClicks([]);
        sessionStorage.removeItem('clicks');
        sessionStorage.removeItem('userID');
    }

    return () => {
        window.onbeforeunload = null;
    };
  }, [clicks]);
};

const handleTrackClick = (e, clicks, setClicks) => {
  const buttonId = e.currentTarget.id;
  const pageURL = window.location.pathname;
  console.log(clicks)
  setClicks([...clicks, { buttonId: buttonId, pageURL: pageURL, timestamp: new Date() }])
}

export { useClickTracking, handleTrackClick }