import {
  faCheck,
  faCloudMoon,
  faCloudSun,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useFocusable } from '@noriginmedia/norigin-spatial-navigation';
import { useContext } from 'react';

// Container
import CardContainer from 'components/Builder/CardContainer';
// Context
import ThemeContext from 'context/ThemeContext';

interface IMode {
  mode: 'dark' | 'light';
  isSelected: boolean;
}

export default function Mode({ mode, isSelected }: IMode) {
  const { setTheme } = useContext(ThemeContext);
  const { ref, focused } = useFocusable({
    onEnterPress: () => {
      setTheme(mode);
    },
  });

  return (
    <CardContainer focused={focused}>
      <div ref={ref} className="p-5">
        {mode === 'light' ? (
          <FontAwesomeIcon icon={faCloudSun} className="w-60 h-60" />
        ) : (
          <FontAwesomeIcon icon={faCloudMoon} className="w-60 h-60" />
        )}
        {isSelected && (
          <FontAwesomeIcon
            icon={faCheck}
            className="absolute bottom-8 right-8 w-10 h-10"
          />
        )}
      </div>
    </CardContainer>
  );
}
