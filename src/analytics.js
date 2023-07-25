import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_BASE_URL + "/api/analytics";

const sendBrowserInformation = (browserInfo) => {
  axios.post(API_BASE_URL + "/browser-info", {
    browserInfo: browserInfo,
  })
    .then((response) => {
      console.log(`Clicks Payload successfully sent.`, response.data);
    })
    .catch((error) => {
      console.error('Error tracking button.', error)
    })
}

const sendClickInformation = (clicksArray) => {
  if (clicksArray.length === 0) {
    return;
  }
  axios.post(API_BASE_URL + "/button-click", {
    payload: clicksArray
  })
    .then((response) => {
      console.log(`Clicks Payload successfully sent.`, response.data);
    })
    .catch((error) => {
      console.error('Error tracking button.', error)
    })
}

const sendPageTimeInformation = (pageTimeInfo) => {
  axios.post(API_BASE_URL + '/page-view', {
    payload: pageTimeInfo
  })
    .then((response) => {
      console.log(`Page View info send`, response.data);
    })
    .catch((error) => {
      console.error('Error tracking page view.', error);
    })
}

export { sendClickInformation, sendPageTimeInformation, sendBrowserInformation };