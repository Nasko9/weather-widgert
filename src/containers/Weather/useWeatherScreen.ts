import { useFocusable } from '@noriginmedia/norigin-spatial-navigation';
import { useState } from 'react';

// Hook
import useWeatherData from 'hooks/useWeatherData';

export default function useWeatherScreen() {
  const [cardIndex, setCardIndex] = useState<number>(0);

  const { ref, focusKey } = useFocusable();

  const { fiveDayForecastData, fiveDayForecastStatus } = useWeatherData();

  return {
    ref,
    focusKey,
    fiveDayForecastData,
    fiveDayForecastStatus,
    cardIndex,
    setCardIndex,
  };
}
