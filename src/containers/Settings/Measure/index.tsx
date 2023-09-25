// Container
import CardContainer from 'components/Layout/CardContainer';

// Component
import MeasureItem from './MesureItem';

export default function Measure() {
  return (
    <CardContainer>
      <div className="flex flex-col gap-10">
        <MeasureItem sign="&deg;C " />
        <MeasureItem sign="&deg;F" />
      </div>
    </CardContainer>
  );
}
