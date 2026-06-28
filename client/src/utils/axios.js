import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "https://api.fashionzero.in/api/v1" ,
  withCredentials: true,
});

export default instance;
