import axios from 'axios';

const apii = axios.create({
  baseURL: 'https://api.github.com',
});

export default apii;
