import { faCloudSun, faGear, faTv } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useFocusable } from '@noriginmedia/norigin-spatial-navigation';
import { useNavigate } from 'react-router-dom';

export default function useMenuItem(id: string) {
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

  const iconProps = {
    className: 'w-8 h-6',
  };

  const sidebarIcons: { [key: string]: JSX.Element } = {
    'menu-item-stream': <FontAwesomeIcon icon={faTv} {...iconProps} />,
    'menu-item-weather': <FontAwesomeIcon icon={faCloudSun} {...iconProps} />,
    'menu-item-settings': <FontAwesomeIcon icon={faGear} {...iconProps} />,
  };

  const { ref, focused } = useFocusable({
    onEnterPress: () => {
      handlePressEnter(id);
    },
  });

  return { ref, focused, sidebarIcons };
}
