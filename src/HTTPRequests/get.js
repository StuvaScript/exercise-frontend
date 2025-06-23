import axios from "axios";

const VITE_API_BASE_URL = `${import.meta.env.VITE_API_BASE_URL}`;

const getRequest = (url, token) => {
  const fullURL = `${VITE_API_BASE_URL}${url}`;

  return axios.get(fullURL, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export default getRequest;
