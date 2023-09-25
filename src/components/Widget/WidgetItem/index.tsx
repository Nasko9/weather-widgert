import { useContext } from 'react';

// Type
import { WeatherListItem } from 'api/weather/type';
// Context
import SettingsContext from 'context/SettingsContext';
// Utils
import { convertKelvin } from 'utils/temperatureConverter';
import { convertDateFormat } from 'utils/dateConverter';

// Component
import WeatherIcon from 'components/Layout/WeatherIcon';

export default function WidgetItem({ dt_txt, weather, main }: WeatherListItem) {
  const { measureUnit } = useContext(SettingsContext);

  return (
    <div className="flex flex-col items-center gap-2">
      <p className="text-xl font-bold">{convertDateFormat(dt_txt)}</p>
      <WeatherIcon weatherKey={weather[0].icon} size="small" />
      <p className="text-3xl font-bold">
        {convertKelvin(main.temp, measureUnit)}
      </p>
    </div>
  );
}
