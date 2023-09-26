import axios from '../axiosInstance';

export const getWeatherInfoByCityName = (city: string) => {
  return axios.get(
    `/weather?q=${encodeURIComponent(city)}&appid=${
      process.env.REACT_APP_API_KEY
    }`,
  );
};

export const getFiveDayForecastByCityName = (city: string) => {
  return axios.get(
    `/forecast?q=${encodeURIComponent(city)}&appid=${
      process.env.REACT_APP_API_KEY
    }`,
  );
};
