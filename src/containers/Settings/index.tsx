import {
  FocusContext,
  useFocusable,
} from '@noriginmedia/norigin-spatial-navigation';
import { useContext } from 'react';

// Context
import ThemeContext from 'context/ThemeContext';

// Components
import Location from './Location';
import Measure from './Measure';
import Mode from './Mode';
import View from './View';

export default function Settings() {
  const { theme } = useContext(ThemeContext);
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
          <Mode mode="light" isSelected={theme === 'light'} />
          <Mode mode="dark" isSelected={theme === 'dark'} />
        </div>
      </div>
    </FocusContext.Provider>
  );
}
