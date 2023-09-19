export const getBrowserInfo = (userAgent) => {
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

  browserData.operatingSystem = userAgent.includes('Win') ? 'Windows' : userAgent.includes('Mac') ? 'macOS' : 'Unknown';
  browserData.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  browserData.language = navigator.language;

  return browserData;
};