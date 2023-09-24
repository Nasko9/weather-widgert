import { useQuery } from '@tanstack/react-query';

// Api
import { getFiveDayForecastByCityName } from 'api/weather';
// import { WeatherListItem } from 'api/weather/type';
// Hook
import useUserLocation from 'hooks/useUserLocation';

export default function useWeatherData() {
  const { userCity } = useUserLocation();

  const { data: fiveDayForecastData, status: fiveDayForecastStatus } = useQuery(
    ['fiveDayForecast'],
    () => getFiveDayForecastByCityName(userCity),
    {
      staleTime: 1000 * 60 * 30,
      enabled: !!userCity,
      select: (data: any) => {
        // TODO: Replace any with type
        // console.warn(data, 'data for defining type');
        const currentHour = new Date().getHours();
        const intervals = [0, 3, 6, 9, 12, 15, 18, 21];
        let targetHour = intervals.find((hour) => currentHour < hour) || 0;
        const targetTimeString = `${targetHour
          .toString()
          .padStart(2, '0')}:00:00`;

        const filteredList = data?.data.list
          ?.filter((item: any) => item.dt_txt.includes(targetTimeString))
          .slice(0, 5);

        return { list: filteredList, city: data?.data.city };
      },
    },
  );

  return {
    fiveDayForecastData,
    fiveDayForecastStatus,
  };
}
