import {
  FocusContext,
  useFocusable,
} from '@noriginmedia/norigin-spatial-navigation';

// Components
import Location from './Location';
import Measure from './Measure';
import Mode from './Mode';
import View from './View';

export default function Settings() {
  const { ref, focusKey } = useFocusable();
  return (
    <FocusContext.Provider value={focusKey}>
      <div ref={ref} className="flex flex-col items-center gap-24 mt-40">
        <div className="flex gap-10">
          {' '}
          <Measure />
          <Location />
          <View />
        </div>
        <div className="flex gap-24">
          <Mode mode="light" />
          <Mode mode="dark" />
        </div>
      </div>
    </FocusContext.Provider>
  );
}
