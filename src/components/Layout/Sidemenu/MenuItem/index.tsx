import useMenuItem from './useMenuItem';

interface IMenuItem {
  id: string;
  label: string;
  isSidebarFocused: boolean;
}

export default function MenuItem({ id, label, isSidebarFocused }: IMenuItem) {
  const { ref, focused, sidebarIcons } = useMenuItem(id);

  return (
    <div
      ref={ref}
      className={`pl-5 flex gap-3 overflow-hidden ${
        focused
          ? 'text-icon-focus-light dark:text-icon-focus-dark'
          : 'text-icon-light dark:text-icon-dark'
      }  `}
    >
      {sidebarIcons[id]}
      <p className={`text-lg ${isSidebarFocused ? 'opacity-1' : 'opacity-0'} `}>
        {label}
      </p>
    </div>
  );
}
