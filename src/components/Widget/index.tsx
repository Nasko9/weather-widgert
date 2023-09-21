import { faBolt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FocusContext } from '@noriginmedia/norigin-spatial-navigation';

// Hook
import useWidget from './useWidget';

export default function Widget() {
  const { ref, focused, isVisible } = useWidget();

  return (
    <FocusContext.Provider value={'widget'}>
      <div>
        <div
          className={`w-44 h-40 rounded-xl bg-element-light text-text-light shadow-lg absolute top-8 right-8 flex justify-center items-center flex-col gap-2 transition-opacity duration-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          } ${focused ? 'border-[#74796D] border-5' : ''}`}
          ref={ref}
        >
          <FontAwesomeIcon icon={faBolt} className="w-14 h-12" />
          <p className="text-4xl font-bold ">14 °C</p>
        </div>
      </div>
    </FocusContext.Provider>
  );
}
