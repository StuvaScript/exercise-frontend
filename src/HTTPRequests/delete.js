import axios from "axios";

const deleteRequest = (url, token) => {
  return axios.delete(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export default deleteRequest;
