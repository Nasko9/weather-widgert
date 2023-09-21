import { useFocusable } from '@noriginmedia/norigin-spatial-navigation';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// // Hook
// import useData from 'hooks/useWeatherData';

export default function useWidget() {
  const [isVisible, setIsVisible] = useState(false);

  const navigate = useNavigate();

  const { ref, focusSelf, focused } = useFocusable({
    onEnterPress: () => {
      if (isVisible) navigate(`/weather`);
    },
  });

  useEffect(() => {
    setIsVisible(true);

    const interval = setInterval(() => {
      setIsVisible((prev) => !prev);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    focusSelf();
  }, [focusSelf]);

  // useEffect(() => {
  //   const findCurrentWeather = (arr: any) => {
  //     const now = new Date().getTime();

  //     const differences = arr.map((item: any) => {
  //       return {
  //         ...item,
  //         difference: Math.abs(now - item.timestamp),
  //       };
  //     });

  //     differences.sort((a: any, b: any) => a.difference - b.difference);

  //     return differences[0];
  //   };

  //   // if (dataByCoords) {
  //   //   const closestTimestamp = findCurrentWeather(dataByCoords?.data.list);
  //   //   console.log(dataByCoords);
  //   //   console.log(closestTimestamp, 'dt');
  //   // }
  // }, [dataByCoords]);

  return { ref, focused, isVisible };
}
