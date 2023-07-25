import { useEffect, useState } from 'react';
import { sendBrowserInformation } from './analytics';

const useBrowserInfo = () => {
  const [browserInfo, setBrowserInfo] = useState({
    userAgent: '',
    browserName: '',
    browserVersion: '',
    device: '',
    operatingSystem: '',
    timezone: '',
    language: '',
  });

  const dataSent = false;

  useEffect(() => {
    const getBrowserInfo = (userAgent) => {
      const browserData = {};
    
      const browserRegex = /(chrome|firefox|safari|edge|msie|trident(?=\/))\/?\s*(\d+)/i;
      const matches = userAgent.match(browserRegex);
      if (matches) {
        browserData.browserName = matches[1].toLowerCase();
        browserData.browserVersion = matches[2];
      } else {
        browserData.browserName = 'unknown';
        browserData.browserVersion = 'unknown';
      }
    
      if (/Android/i.test(userAgent)) browserData.device = 'Android';
      else if (/iPhone|iPad|iPod/i.test(userAgent)) browserData.device = 'iOS';
      else if (/Windows Phone/i.test(userAgent)) browserData.device = 'Windows Phone';
      else browserData.device = 'Desktop';
    
      return browserData;
    };

    const sendDataToServer = (data) => {
      sendBrowserInformation(data)
    };

    const userAgent = navigator.userAgent;
    const { browserName, browserVersion, device } = getBrowserInfo(userAgent);
    const operatingSystem = userAgent.includes('Win') ? 'Windows' : userAgent.includes('Mac') ? 'macOS' : 'Unknown';
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const language = navigator.language;
  
    setBrowserInfo({
      userAgent,
      browserName,
      browserVersion,
      device,
      operatingSystem,
      timezone,
      language,
    });

    if (!dataSent) {
      sendDataToServer({
        userAgent,
        browserName,
        browserVersion,
        device,
        operatingSystem,
        timezone,
        language,
      });
    }

    return () => {
    };
  }, [dataSent]);

  return browserInfo;
};

export default useBrowserInfo;