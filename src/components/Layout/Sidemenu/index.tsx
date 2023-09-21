import { faTv, faCloudSun, faGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  FocusContext,
  useFocusable,
} from '@noriginmedia/norigin-spatial-navigation';
import { useEffect } from 'react';

// Component
import MenuItem from './MenuItem';
// import { useEffect } from 'react';

export default function Sidemenu({
  focusKey: focusKeyParam,
}: {
  focusKey: string;
}) {
  const { ref, focusKey, focusSelf, hasFocusedChild } = useFocusable({
    focusable: true,
    saveLastFocusedChild: false,
    trackChildren: true,
    autoRestoreFocus: true,
    isFocusBoundary: false,
    focusKey: focusKeyParam,
    preferredChildFocusKey: '',
  });

  useEffect(() => {
    focusSelf();
  }, [focusSelf]);

  return (
    <FocusContext.Provider value={focusKey}>
      <div
        ref={ref}
        className={`absolute h-screen flex items-center overflow-hidden transition-all duration-500 bg-sidebar-light dark:bg-sidebar-dark drop-shadow-xl ${
          hasFocusedChild ? 'w-48' : 'w-20'
        }`}
      >
        <div className="flex flex-col gap-10">
          <MenuItem
            id="menu-item-stream"
            icon={<FontAwesomeIcon icon={faTv} className="w-8 h-6" />}
            label={'Nazad na strim'}
            isSidebarFocused={hasFocusedChild}
          />
          <MenuItem
            id="menu-item-weather"
            icon={<FontAwesomeIcon icon={faCloudSun} className="w-8 h-6" />}
            label={'Prognoza'}
            isSidebarFocused={hasFocusedChild}
          />
          <MenuItem
            id="menu-item-settings"
            icon={<FontAwesomeIcon icon={faGear} className="w-6 h-6" />}
            label={'Podešavanja'}
            isSidebarFocused={hasFocusedChild}
          />
        </div>
      </div>
    </FocusContext.Provider>
  );
}
