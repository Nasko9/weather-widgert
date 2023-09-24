import { FocusContext } from '@noriginmedia/norigin-spatial-navigation';

// Components
import Hero from './Hero';
//Hook
import useWeatherScreen from './useWeatherScreen';
// Component
import WeatherContent from './WeatherContent';

export default function Weather() {
  const {
    ref,
    focusKey,
    fiveDayForecastData,
    fiveDayForecastStatus,
    cardIndex,
    setCardIndex,
  } = useWeatherScreen();

  return (
    <FocusContext.Provider value={focusKey}>
      <div ref={ref} className="flex flex-col items-center gap-40 mt-40">
        <Hero
          index={cardIndex}
          data={fiveDayForecastData}
          status={fiveDayForecastStatus}
        />
        <WeatherContent
          data={fiveDayForecastData?.list}
          status={fiveDayForecastStatus}
          setCardIndex={setCardIndex}
        />
      </div>
    </FocusContext.Provider>
  );
}
