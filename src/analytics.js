import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_BASE_URL + "/api/analytics";

function sendClickInformation(clicksArray) {
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

export default sendClickInformation;