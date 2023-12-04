import axios from 'axios';

const baseURL = 'http://localhost:3001';

const instance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export default instance;
