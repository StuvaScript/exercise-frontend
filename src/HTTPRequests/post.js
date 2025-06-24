import axios from "axios";

const VITE_API_BASE_URL = `${import.meta.env.VITE_API_BASE_URL}`;

const postRequest = (url, body, token) => {
  const fullURL = `${VITE_API_BASE_URL}${url}`;

  return axios.post(fullURL, body, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export default postRequest;
