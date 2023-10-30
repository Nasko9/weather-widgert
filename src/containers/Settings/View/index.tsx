import { useContext } from 'react';

// Container
import CardContainer from 'components/Builder/CardContainer';
// Context
import SettingsContext from 'context/SettingsContext';

// Component
import ViewItem from './ViewItem';

export default function View() {
  const { viewMode } = useContext(SettingsContext);

  return (
    <CardContainer>
      <div className="flex flex-col items-center gap-7">
        <h1 className="text-4xl font-bold">Pregled</h1>
        <div className="flex gap-6">
          <ViewItem view="Single" isSelected={viewMode === 'Single'} />
          <ViewItem view="Three" isSelected={viewMode === 'Three'} />
        </div>
      </div>
    </CardContainer>
  );
}
