import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `http://api.openweathermap.org/data/2.5/forecast?APPID=${process.env.REACT_APP_APPID}`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 3000,
});

export default axiosInstance;
