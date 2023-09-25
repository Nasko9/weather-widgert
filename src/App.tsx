import { init } from '@noriginmedia/norigin-spatial-navigation';
import { HashRouter } from 'react-router-dom';

// Provider
import ReactQueryProvider from 'components/Providers/ReactQueryProvider';
// Routes
import Routes from 'containers/Routes';
// Context
import { SettingsContextProvider } from 'context/SettingsContext';
import { ThemeContextProvider } from 'context/ThemeContext';

// Init navigation
init({ debug: false, visualDebug: false });

function App() {
  return (
    <ReactQueryProvider>
      <ThemeContextProvider>
        <SettingsContextProvider>
          <HashRouter>
            <Routes />
          </HashRouter>
        </SettingsContextProvider>
      </ThemeContextProvider>
    </ReactQueryProvider>
  );
}

export default App;
