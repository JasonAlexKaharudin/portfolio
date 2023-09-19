import { useEffect } from 'react';
import { sendBrowserInformation } from '../sendToServer';
import { getBrowserInfo } from '../helpers/browserHelper';

const useBrowserInfo = () => {
  useEffect(() => {
    const browserInfo = getBrowserInfo(navigator.userAgent)
    
    browserInfo.timestamp = Date.now();
    browserInfo.userID = sessionStorage.getItem('userID')
  
    sendBrowserInformation(browserInfo);  
  }, []);
};

export default useBrowserInfo;