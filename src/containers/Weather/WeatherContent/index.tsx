import { Dispatch, SetStateAction } from 'react';

// Type
import { WeatherListItem } from 'api/weather/type';
// Component
import AsyncComponent from 'components/Async';

// Component
import Skeleton from './Skeleton';
import WeatherCard from './WeatherCard';

interface IWeatherContent {
  data: WeatherListItem[];
  status: string;
  setCardIndex: Dispatch<SetStateAction<number>>;
}

export default function WeatherContent({
  data,
  status,
  setCardIndex,
}: IWeatherContent) {
  return (
    <AsyncComponent
      status={status}
      component={
        <div className="flex gap-10">
          {data?.map((item: WeatherListItem, index: number) => (
            <WeatherCard
              key={index}
              id={index}
              setCardIndex={setCardIndex}
              {...item}
            />
          ))}
        </div>
      }
      skeleton={<Skeleton />}
    />
  );
}
