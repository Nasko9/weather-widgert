import { useContext } from 'react';

// Type
import { City, WeatherListItem } from 'api/weather/type';
// Components
import AsyncComponent from 'components/Async';
import CardContainer from 'components/Builder/CardContainer';
import WeatherIcon from 'components/Builder/WeatherIcon';
// Context
import SettingsContext from 'context/SettingsContext';
// Utils
import { convertDateFormat, getCurrentTime } from 'utils/dateConverter';
import { convertKelvin } from 'utils/temperatureConverter';

// Skeleton
import Skeleton from './Skeleton';

interface IHero {
  index: number;
  data: { list: WeatherListItem[]; city: City } | any; //Todo: Replace any with type
  status: string;
}

export default function Hero({ index, data, status }: IHero) {
  const { measureUnit } = useContext(SettingsContext);

  return (
    <AsyncComponent
      status={status}
      component={
        <CardContainer>
          <div className="flex flex-col gap-4">
            <div>
              {' '}
              <p className="text-xl font-bold text-right">
                {convertDateFormat(data?.list[index]?.dt_txt)}
                {index === 0 ? `, ${getCurrentTime()}` : ''}
              </p>
            </div>
            <div className="flex gap-20 items-center pb-4">
              <WeatherIcon
                weatherKey={data?.list[index]?.weather[0].icon}
                size="large"
              />
              <div>
                <div className="flex flex-col items-center gap-5">
                  <p className="text-3xl font-bold">
                    {data?.city?.name},{data?.city?.country}
                  </p>
                  <h1 className="text-9xl font-bold">
                    {convertKelvin(data?.list[index]?.main.temp, measureUnit)}
                  </h1>
                  <div className="flex gap-10 text-2xl">
                    <div>
                      <p>
                        Min:{' '}
                        <strong>
                          {convertKelvin(
                            data?.list[index]?.main.temp_min,
                            measureUnit,
                          )}
                        </strong>
                      </p>
                      <p>
                        Max:{' '}
                        <strong>
                          {convertKelvin(
                            data?.list[index]?.main.temp_max,
                            measureUnit,
                          )}
                        </strong>
                      </p>
                    </div>
                    <div>
                      <p>
                        Pritisak:{' '}
                        <strong>{data?.list[index]?.main.pressure} hPa</strong>
                      </p>
                      <p>
                        Vlažnost:{' '}
                        <strong>{data?.list[index]?.main.humidity} %</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContainer>
      }
      skeleton={<Skeleton />}
    />
  );
}
