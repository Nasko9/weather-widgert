import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Container
import SettingContainer from 'components/Layout/SettingContainer';

// Hook
import useInput from './useInput';

export default function Input() {
  const { location, inputRef, inputHandler, ref, focused } = useInput();

  return (
    <SettingContainer focused={focused}>
      <div ref={ref} className="flex items-center gap-2">
        {' '}
        <input
          ref={inputRef}
          className="text-3xl font-bold p-2 bg-primary-light inputElement"
          placeholder="Lokacija"
          value={location}
          onChange={(e) => inputHandler(e.target.value)}
        />
        <FontAwesomeIcon icon={faLocationDot} className="w-9 h-9" />
      </div>
    </SettingContainer>
  );
}
