import axios from 'axios';

export const getIpAdress = () =>
  axios.get(`${process.env.REACT_APP_API_URL_IP}/?format=json`);
