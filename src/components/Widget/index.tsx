import { FocusContext } from '@noriginmedia/norigin-spatial-navigation';

// Type
import { WeatherListItem } from 'api/weather/type';
// Component
import AsyncComponent from 'components/Async';
import CardContainer from 'components/Builder/CardContainer';

// Skeleton
// import Skeleton from './Skeleton';
// Hook
import useWidget from './useWidget';
// Components
import WidgetItem from './WidgetItem';

export default function Widget() {
  const { ref, focused, isVisible, fiveDayForecastStatus, displayedData } =
    useWidget();

  return (
    <FocusContext.Provider value={'widget'}>
      <div
        className={`absolute top-10 right-12 drop-shadow-xl ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        ref={ref}
      >
        <AsyncComponent
          status={fiveDayForecastStatus}
          component={
            <CardContainer focused={focused}>
              <div className="flex gap-14">
                {displayedData?.map((item: WeatherListItem, index: number) => (
                  <WidgetItem key={index} {...item} />
                ))}
              </div>
            </CardContainer>
          }
          skeleton={<></>}
        />
      </div>
    </FocusContext.Provider>
  );
}
