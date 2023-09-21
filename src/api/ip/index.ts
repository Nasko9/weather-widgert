import axios from 'axios';

export const getIpAdress = () =>
  axios.get('https://api.ipify.org/?format=json');
