import axios from "axios";

const patchRequest = (url, body, token) => {
  return axios.patch(url, body, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export default patchRequest;
