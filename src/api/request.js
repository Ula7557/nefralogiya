import axios from "axios";

export const request = axios.create({
  baseURL: "https://admin-nefro.ssv.uz/api",
  headers: {
    "api-token": process.env.REACT_APP_API_TOKEN,
  },
});