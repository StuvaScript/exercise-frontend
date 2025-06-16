import axios from "axios";

const postRequest = (url, body) => {
  return axios.post(url, body, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export default postRequest;
