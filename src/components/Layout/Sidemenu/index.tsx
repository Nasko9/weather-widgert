import { FocusContext } from '@noriginmedia/norigin-spatial-navigation';

// Component
import MenuItem from './MenuItem';
import useSideMenu, { ISideMenu } from './useSideMenu';

export default function Sidemenu({
  focusKey: focusKeyParam,
}: {
  focusKey: string;
}) {
  const { ref, focusKey, hasFocusedChild, sideMenu } =
    useSideMenu(focusKeyParam);

  return (
    <FocusContext.Provider value={focusKey}>
      <div
        ref={ref}
        className={`h-screen flex items-center overflow-hidden transition-all duration-500 bg-sidebar-light dark:bg-sidebar-dark drop-shadow-xl ${
          hasFocusedChild ? 'w-52' : 'w-20'
        }`}
      >
        <div className="flex flex-col gap-10">
          {sideMenu.map((item: ISideMenu) => (
            <MenuItem
              id={item.id}
              label={item.label}
              isSidebarFocused={hasFocusedChild}
            />
          ))}
        </div>
      </div>
    </FocusContext.Provider>
  );
}
