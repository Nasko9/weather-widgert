import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useFocusable } from '@noriginmedia/norigin-spatial-navigation';
import { useContext } from 'react';

// Components
import SettingContainer from 'components/Layout/SettingContainer';
// Context
import SettingsContext from 'context/SettingsContext';

interface IMeasureItem {
  sign: 'Celsius' | 'Fahrenheit';
  isSelected: boolean;
}

export default function MeasureItem({ sign, isSelected }: IMeasureItem) {
  const { setMeasureUnit } = useContext(SettingsContext);
  const { ref, focused } = useFocusable({
    onEnterPress: () => {
      setMeasureUnit(sign);
    },
  });

  return (
    <div className="flex items-center gap-4">
      <SettingContainer focused={focused}>
        <p ref={ref} className="text-6xl font-bold p-2">
          {sign === 'Celsius' ? '°C' : '°F'}
        </p>
      </SettingContainer>
      {isSelected && <FontAwesomeIcon icon={faCheck} className="w-8 h-8" />}
    </div>
  );
}
