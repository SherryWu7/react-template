import axios from "axios";
import { config as apiConfig } from "../../store/api";

export default function request({ url, options, api }) {
  const { method, data, headers } = options;
  let config = {
    // withCredentials: false,
    url: apiConfig.api[apiConfig.env][api] + url,
    headers: headers || {
      "Content-Type": "application/json", // "Content-Type": "application/x-www-form-urlencoded"
    },
    method,
  };
  if (method === "GET") {
    config.params = data;
  } else {
    config.data = data;
  }
  return axios(config)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error(error);
    });
}
