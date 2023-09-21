import axios from 'axios';

export const getLocationName = (ipAdress: string) =>
  axios.get(
    `https://ipinfo.io/${ipAdress}/json?token=${process.env.REACT_APP_API_KEY_IP}`,
  );
