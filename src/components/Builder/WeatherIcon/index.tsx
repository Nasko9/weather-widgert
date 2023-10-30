import {
  faCloud,
  faCloudBolt,
  faCloudMoon,
  faCloudMoonRain,
  faCloudShowersHeavy,
  faCloudSun,
  faCloudSunRain,
  faMoon,
  faSnowflake,
  faSun,
  faTemperatureFull,
  faWind,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IWeatherIcon {
  weatherKey: string;
  size?: 'small' | 'medium' | 'large';
}

interface IIconProps {
  className?: string;
}

const sizeClasses = {
  small: 'w-16 h-16',
  medium: 'w-32 h-32',
  large: 'w-52 h-52',
};

const weatherIcons: {
  [key: string]: (props: IIconProps) => JSX.Element;
} = {
  '01d': (props) => <FontAwesomeIcon icon={faSun} {...props} />,
  '01n': (props) => <FontAwesomeIcon icon={faMoon} {...props} />,
  '02d': (props) => <FontAwesomeIcon icon={faCloudSun} {...props} />,
  '02n': (props) => <FontAwesomeIcon icon={faCloudMoon} {...props} />,
  '03d': (props) => <FontAwesomeIcon icon={faCloud} {...props} />,
  '03n': (props) => <FontAwesomeIcon icon={faCloud} {...props} />,
  '04d': (props) => <FontAwesomeIcon icon={faCloud} {...props} />,
  '04n': (props) => <FontAwesomeIcon icon={faCloud} {...props} />,
  '09d': (props) => <FontAwesomeIcon icon={faCloudShowersHeavy} {...props} />,
  '09n': (props) => <FontAwesomeIcon icon={faCloudShowersHeavy} {...props} />,
  '10d': (props) => <FontAwesomeIcon icon={faCloudSunRain} {...props} />,
  '10n': (props) => <FontAwesomeIcon icon={faCloudMoonRain} {...props} />,
  '11d': (props) => <FontAwesomeIcon icon={faCloudBolt} {...props} />,
  '11n': (props) => <FontAwesomeIcon icon={faCloudBolt} {...props} />,
  '13d': (props) => <FontAwesomeIcon icon={faSnowflake} {...props} />,
  '13n': (props) => <FontAwesomeIcon icon={faSnowflake} {...props} />,
  '50d': (props) => <FontAwesomeIcon icon={faWind} {...props} />,
  '50n': (props) => <FontAwesomeIcon icon={faWind} {...props} />,
};

export default function WeatherIcon({
  weatherKey,
  size = 'medium',
}: IWeatherIcon) {
  const IconComponent = weatherIcons[weatherKey];

  if (IconComponent) {
    return <IconComponent className={sizeClasses[size]} />;
  } else {
    return (
      <FontAwesomeIcon icon={faTemperatureFull} className={sizeClasses[size]} />
    );
  }
}
