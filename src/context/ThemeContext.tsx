import {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from 'react';

// Update the interface
interface IThemeContext {
  theme: 'dark' | 'light';
  setTheme: Dispatch<SetStateAction<'dark' | 'light'>>;
}

interface IContextProvider {
  children: JSX.Element;
}

// Modify the initial state
const initialThemeContext: IThemeContext = {
  theme: 'light',
  setTheme: () => {},
};

const ThemeContext = createContext<IThemeContext>(initialThemeContext);

export function ThemeContextProvider({ children }: IContextProvider) {
  const [theme, setTheme] = useState<'dark' | 'light'>('light');

  useEffect(() => {
    const mode = localStorage.getItem('theme');
    if (mode === 'dark' || mode === 'light') {
      setTheme(mode);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
