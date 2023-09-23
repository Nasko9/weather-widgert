import axios from 'axios';

export const getLocationName = (ipAdress: string) =>
  axios.get(
    `${process.env.REACT_APP_API_URL_LOCATION}/${ipAdress}/json?token=${process.env.REACT_APP_API_KEY_LOCATION}`,
  );
