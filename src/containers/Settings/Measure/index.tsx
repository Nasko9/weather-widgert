import { useContext } from 'react';

// Container
import CardContainer from 'components/Layout/CardContainer';
// Context
import SettingsContext from 'context/SettingsContext';

// Component
import MeasureItem from './MesureItem';

export default function Measure() {
  const { measureUnit } = useContext(SettingsContext);

  return (
    <CardContainer>
      <div className="flex flex-col gap-10">
        <MeasureItem sign="Celsius" isSelected={measureUnit === 'Celsius'} />
        <MeasureItem
          sign="Fahrenheit"
          isSelected={measureUnit === 'Fahrenheit'}
        />
      </div>
    </CardContainer>
  );
}
