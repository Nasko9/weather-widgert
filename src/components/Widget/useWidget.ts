import { useFocusable } from '@noriginmedia/norigin-spatial-navigation';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Type
import { WeatherListItem } from 'api/weather/type';
// Context
import SettingsContext from 'context/SettingsContext';
// Hook
import useWeatherData from 'hooks/useWeatherData';

export default function useWidget() {
  const [displayedData, setDisplayedData] = useState<WeatherListItem[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const { viewMode } = useContext(SettingsContext);

  const navigate = useNavigate();

  const { ref, focusSelf, focused } = useFocusable({
    onEnterPress: () => {
      if (isVisible) navigate(`/weather`);
    },
  });

  const { fiveDayForecastData, fiveDayForecastStatus } = useWeatherData();

  useEffect(() => {
    setIsVisible(true);

    const interval = setInterval(() => {
      setIsVisible((prev) => !prev);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (fiveDayForecastData) {
      let data;
      switch (viewMode) {
        case 'Single':
          data = fiveDayForecastData.list.slice(0, 1);
          break;
        case 'Three':
          data = fiveDayForecastData.list.slice(0, 3);
          break;
        default:
          data = fiveDayForecastData.list;
          break;
      }
      setDisplayedData(data);
    }
  }, [fiveDayForecastData, viewMode]);

  useEffect(() => {
    focusSelf();
  }, [focusSelf]);

  const skeletonCount = displayedData && displayedData.length > 1 ? 3 : 1;

  return {
    ref,
    focused,
    isVisible,
    fiveDayForecastStatus,
    displayedData,
    skeletonCount,
  };
}
