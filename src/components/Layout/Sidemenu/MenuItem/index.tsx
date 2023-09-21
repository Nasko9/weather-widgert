import { useFocusable } from '@noriginmedia/norigin-spatial-navigation';
import { useNavigate } from 'react-router-dom';

interface IMenuItem {
  id: string;
  label: string;
  icon: JSX.Element;
  isSidebarFocused: boolean;
}

export default function MenuItem({
  id,
  icon,
  label,
  isSidebarFocused,
}: IMenuItem) {
  const navigate = useNavigate();

  const handlePressEnter = (props: string) => {
    switch (props) {
      case 'menu-item-stream':
        navigate('/');
        break;
      case 'menu-item-weather':
        window.localStorage.setItem('playerCurrentIndex', '0');
        navigate('/weather');
        break;
      case 'menu-item-settings':
        navigate('/settings');
        break;
      default:
        break;
    }
  };

  const { ref, focused } = useFocusable({
    onEnterPress: () => {
      handlePressEnter(id);
    },
  });

  return (
    <div
      ref={ref}
      className={`pl-5 ${
        focused
          ? 'text-icon-focus-light dark:text-icon-focus-dark'
          : 'text-icon-light dark:text-icon-dark'
      }  `}
    >
      {icon}
      <p
        className={`text-lg  ${isSidebarFocused ? 'opacity-1' : 'opacity-0'} `}
      >
        {label}
      </p>
    </div>
  );
}
