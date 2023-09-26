import { faCheck, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useFocusable } from '@noriginmedia/norigin-spatial-navigation';
import { useContext } from 'react';

// Container
import SettingContainer from 'components/Layout/SettingContainer';
import SettingsContext from 'context/SettingsContext';

interface IViewItem {
  view: 'Single' | 'Three';
  isSelected: boolean;
}

export default function ViewItem({ view, isSelected }: IViewItem) {
  const { setViewMode } = useContext(SettingsContext);
  const { ref, focused } = useFocusable({
    onEnterPress: () => {
      setViewMode(view);
    },
  });

  return (
    <SettingContainer focused={focused}>
      <div ref={ref} className="p-2">
        <div className="flex flex-col items-center gap-4 p-4">
          {view === 'Single' ? (
            <>
              <h3 className="text-3xl font-bold">Jedan dan</h3>
              <FontAwesomeIcon icon={faSun} className="w-10 h-10" />
            </>
          ) : (
            <>
              <h3 className="text-3xl font-bold">Tri dana</h3>
              <div className="flex gap-3">
                <FontAwesomeIcon icon={faSun} className="w-10 h-10" />
                <FontAwesomeIcon icon={faSun} className="w-10 h-10" />
                <FontAwesomeIcon icon={faSun} className="w-10 h-10" />
              </div>
            </>
          )}
        </div>
        {isSelected && (
          <FontAwesomeIcon
            icon={faCheck}
            className="w-8 h-8 absolute bottom-3 right-4"
          />
        )}
      </div>
    </SettingContainer>
  );
}
