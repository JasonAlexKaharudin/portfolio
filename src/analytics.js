import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_BASE_URL + "/api/analytics";

const sendBrowserInformation = (browserData, userID) => {
  browserData.userID = userID;
  axios.post(API_BASE_URL + "/browser-info", {
    browserInfo: browserData
  })
    .catch((error) => {
      console.error('Error tracking button.', error)
    })
}

const sendClickInformation = (clickData) => {
  axios.post(API_BASE_URL + "/button-click", {
    payload: clickData
  })
    .catch((error) => {
      console.error('Error tracking button.', error)
    })
}

const sendPageTimeInformation = (pageViewData) => { 
  axios.post(API_BASE_URL + '/page-view', {
    payload: pageViewData
  })
    .catch((error) => {
      console.error('Error tracking page view.', error);
    })
}

export { sendClickInformation, sendPageTimeInformation, sendBrowserInformation };