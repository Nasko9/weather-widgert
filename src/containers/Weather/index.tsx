import {
  FocusContext,
  useFocusable,
} from '@noriginmedia/norigin-spatial-navigation';

export default function Weather() {
  const { ref, focusKey, focused } = useFocusable({});

  // const { weatherData } = useWeatherData();
  // console.log(weatherData);

  return (
    <FocusContext.Provider value={focusKey}>
      <div
        ref={ref}
        className={`ml-52 h-52 w-52 ${focused ? 'bg-red-400' : 'bg-green-400'}`}
      ></div>
    </FocusContext.Provider>
  );
}
