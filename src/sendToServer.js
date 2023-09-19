import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_BASE_URL + "/api/analytics";

const getURL = (url) => {
  const extractedUrl = url.match(/https?:\/\/[^/]*(?=(\/|$))/);
  if (extractedUrl) {
    return extractedUrl[0];
  }
}

const sendBrowserInformation = (browserData) => {  
  if (browserData.userID === null || getURL(document.referrer) === window.location.origin){
    console.log("userID is either null or I came from the same place")
    return
  }

  axios.post(API_BASE_URL + "/browser-info", browserData)
    .catch((error) => {
      console.error('Error tracking browser information.', error)
    })
}

const sendClickInformation = (clickData) => {
  if (clickData.clicks.length === 0) {
    return
  }

  axios.post(API_BASE_URL + "/button-click", clickData)
    .catch((error) => {
      console.error('Error tracking button.', error)
    })
}

const sendPageTimeInformation = (pageViewData) => {
  axios.post(API_BASE_URL + '/page-view', pageViewData)
    .catch((error) => {
      console.error('Error tracking page view.', error);
    })
}

export { sendClickInformation, sendPageTimeInformation, sendBrowserInformation };