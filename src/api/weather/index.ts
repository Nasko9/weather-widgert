import axios from '../axiosInstance';

export const getWeatherInfoByCoords = (lat: number, lon: number) =>
  axios.get(
    `/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`,
  );

export const getWeatherInfoByCityName = (city: string) =>
  axios.get(`/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`);
