import axios from 'axios';

const api  = axios.create({
  baseURL: "https://api.tago.io/data",
})


export default api;
