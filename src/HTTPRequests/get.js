import axios from "axios";

const getRequest = (url, token) => {
  return axios.get(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export default getRequest;
