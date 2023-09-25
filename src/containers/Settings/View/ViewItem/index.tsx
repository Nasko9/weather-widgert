import { faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useFocusable } from '@noriginmedia/norigin-spatial-navigation';

// Container
import SettingContainer from 'components/Layout/SettingContainer';

interface IViewItem {
  view: 'single' | 'three-day';
}

export default function ViewItem({ view }: IViewItem) {
  const { ref, focused } = useFocusable({
    onEnterPress: () => {
      console.log(view, 'view pressed');
    },
  });

  return (
    <SettingContainer focused={focused}>
      <div ref={ref} className="flex flex-col items-center gap-4 p-4">
        {view === 'single' ? (
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
    </SettingContainer>
  );
}
