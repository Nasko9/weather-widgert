import { faCloudMoon, faCloudSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useFocusable } from '@noriginmedia/norigin-spatial-navigation';

// Container
import CardContainer from 'components/Layout/CardContainer';

interface IMode {
  mode: 'dark' | 'light';
}

export default function Mode({ mode }: IMode) {
  const { ref, focused } = useFocusable({
    onEnterPress: () => {
      console.log(mode, 'mode pressed');
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
      </div>
    </CardContainer>
  );
}
