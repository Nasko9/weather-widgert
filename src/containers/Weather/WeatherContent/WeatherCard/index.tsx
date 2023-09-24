import { useFocusable } from '@noriginmedia/norigin-spatial-navigation';
import { Dispatch, SetStateAction } from 'react';

// Type
import { WeatherListItem } from 'api/weather/type';
// Component
import CardContainer from 'components/Layout/CardContainer';
import WeatherIcon from 'components/Layout/WeatherIcon';
// Utils
import { convertDateFormat } from 'utils/dateConverter';
import { convertKelvin } from 'utils/temperatureConverter';

interface IWeatherCard extends WeatherListItem {
  id: number;
  setCardIndex: Dispatch<SetStateAction<number>>;
}

export default function WeatherCard({
  dt_txt,
  weather,
  main,
  id,
  setCardIndex,
}: IWeatherCard) {
  const { ref, focused } = useFocusable({
    onFocus: () => {
      setCardIndex(id);
    },
  });

  return (
    <CardContainer focused={focused}>
      <div ref={ref} className="flex flex-col items-center gap-5">
        <p className="text-xl font-bold">{convertDateFormat(dt_txt)}</p>
        <WeatherIcon weatherKey={weather[0].icon} size="medium" />
        <p className="text-6xl font-bold">
          {convertKelvin(main.temp, 'celsius')} °C
        </p>
      </div>
    </CardContainer>
  );
}
