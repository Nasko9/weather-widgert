import axios from '../axiosInstance';

// export const getWeatherInfoByCoords = (lat: number, lon: number) => {
//   return axios.get(
//     `/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`,
//   );
// };

export const getWeatherInfoByCityName = (city: string) => {
  return axios.get(
    `/weather?q=${encodeURIComponent(city)}&appid=${
      process.env.REACT_APP_API_KEY
    }`,
  );
};

// export const getFiveDayForecastByCoords = (lat: number, lon: number) => {
//   return axios.get(
//     `/forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`,
//   );
// };

export const getFiveDayForecastByCityName = (city: string) => {
  return axios.get(
    `/forecast?q=${encodeURIComponent(city)}&appid=${
      process.env.REACT_APP_API_KEY
    }`,
  );
};
