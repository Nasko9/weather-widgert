import { useQuery } from '@tanstack/react-query';

// Api
import { getFiveDayForecastByCityName } from 'api/weather';
// Hook
import useUserLocation from 'hooks/useUserLocation';

export default function useWeatherData() {
  const { userCity } = useUserLocation();

  const { data: weatherData } = useQuery(
    ['weatherInfo'],
    () => getFiveDayForecastByCityName(userCity),
    { staleTime: 1000 * 60 * 30, enabled: !!userCity },
  );

  return { weatherData };
}
