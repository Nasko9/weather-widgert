import {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from 'react';

interface IDarkModeContext {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
}

interface IContextProvider {
  children: JSX.Element;
}

const initialStateContext = {
  darkMode: false,
  setDarkMode: () => {},
};

const DarkModeContext = createContext<IDarkModeContext>(initialStateContext);

export function DarkModeProvider({ children }: IContextProvider) {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  // !If somehing wrong with darkmode set default state in use state to TRUE

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDark);
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString());
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export default DarkModeContext;
