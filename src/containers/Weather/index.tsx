import {
  FocusContext,
  useFocusable,
} from '@noriginmedia/norigin-spatial-navigation';
// import useWeatherData from 'hooks/useWeatherData';

export default function Weather() {
  const { ref, focusKey, focused } = useFocusable({});

  // const { weatherData } = useWeatherData();
  // console.log(weatherData, 'weatherdata');

  return (
    <FocusContext.Provider value={focusKey}>
      <div
        ref={ref}
        className={`h-52 w-52 ${focused ? 'bg-red-400' : 'bg-green-400'}`}
      ></div>
    </FocusContext.Provider>
  );
}
