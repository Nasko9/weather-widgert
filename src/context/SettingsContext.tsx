import {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from 'react';

interface ISettingsContext {
  viewMode: 'Single' | 'Three';
  setViewMode: Dispatch<SetStateAction<'Single' | 'Three'>>;
  location: string;
  setLocation: Dispatch<SetStateAction<string>>;
  measureUnit: 'Celsius' | 'Fahrenheit';
  setMeasureUnit: Dispatch<SetStateAction<'Celsius' | 'Fahrenheit'>>;
}

interface IContextProvider {
  children: JSX.Element;
}

const initialStateContext: ISettingsContext = {
  viewMode: 'Single',
  setViewMode: () => {},
  location: '',
  setLocation: () => {},
  measureUnit: 'Celsius',
  setMeasureUnit: () => {},
};

const SettingsContext = createContext<ISettingsContext>(initialStateContext);

export function SettingsContextProvider({ children }: IContextProvider) {
  const [viewMode, setViewMode] = useState<'Single' | 'Three'>('Single');
  const [location, setLocation] = useState<string>('');
  const [measureUnit, setMeasureUnit] = useState<'Celsius' | 'Fahrenheit'>(
    'Celsius',
  );

  useEffect(() => {
    const savedView = localStorage.getItem('viewMode');
    if (savedView === 'Single' || savedView === 'Three') {
      setViewMode(savedView);
    }

    const savedLocation = localStorage.getItem('location');
    if (savedLocation) {
      setLocation(savedLocation);
    }

    const savedUnit = localStorage.getItem('measureUnit');
    if (savedUnit === 'Celsius' || savedUnit === 'Fahrenheit') {
      setMeasureUnit(savedUnit);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('viewMode', viewMode);
    localStorage.setItem('location', location);
    localStorage.setItem('measureUnit', measureUnit);
  }, [viewMode, location, measureUnit]);

  return (
    <SettingsContext.Provider
      value={{
        viewMode,
        setViewMode,
        location,
        setLocation,
        measureUnit,
        setMeasureUnit,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export default SettingsContext;
