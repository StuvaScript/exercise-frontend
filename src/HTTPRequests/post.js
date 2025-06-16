import axios from "axios";

const postRequest = (url, body, token) => {
  return axios.post(url, body, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export default postRequest;
