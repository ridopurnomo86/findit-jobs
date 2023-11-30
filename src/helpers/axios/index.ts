import axios from 'axios';

const baseURL = import.meta.env.VITE_BASE_BACKEND_API_URL;

const instance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    'User-Agent': import.meta.env.VITE_BASE_API_USER_AGENT,
    'Authorization-Key': import.meta.env.VITE_BASE_API_AUTHORIZATION,
  },
});

export default instance;
