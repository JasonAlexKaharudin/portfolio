import { useEffect, useState } from 'react';
import { sendBrowserInformation } from '../sendToServer';
import { getBrowserInfo } from '../helpers/browserHelper';

const useBrowserInfo = () => {
  const [browserInfo, setBrowserInfo] = useState({
    userAgent: '',
    browserName: '',
    browserVersion: '',
    device: '',
    operatingSystem: '',
    timezone: '',
    language: '',
    timestamp: '',
  });

  useEffect(() => {
    const timestamp = Date.now();
    const userAgent = navigator.userAgent;
    const { 
      browserName, 
      browserVersion, 
      device, 
      operatingSystem, 
      timezone, 
      language 
    } = getBrowserInfo(userAgent);
  
    setBrowserInfo({ 
      userAgent,
      browserName,
      browserVersion,
      device,
      operatingSystem,
      timezone,
      language,
      timestamp
    });

    sendBrowserInformation({
      userAgent,
      browserName,
      browserVersion,
      device,
      operatingSystem,
      timezone,
      language,
      timestamp
    }, sessionStorage.getItem('userID'));
  }, []);

  return browserInfo;
};

export default useBrowserInfo;