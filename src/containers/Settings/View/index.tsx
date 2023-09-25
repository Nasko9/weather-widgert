// Container
import CardContainer from 'components/Layout/CardContainer';

// Component
import ViewItem from './ViewItem';

export default function View() {
  return (
    <CardContainer>
      <div className="flex flex-col items-center gap-7">
        <h1 className="text-4xl font-bold">Pregled</h1>
        <div className="flex gap-6">
          <ViewItem view="single" />
          <ViewItem view="three-day" />
        </div>
      </div>
    </CardContainer>
  );
}
