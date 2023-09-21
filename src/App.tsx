import { init } from '@noriginmedia/norigin-spatial-navigation';
import { HashRouter } from 'react-router-dom';

// Provider
import ReactQueryProvider from 'components/Providers/ReactQueryProvider';
// Routes
import Routes from 'containers/Routes';
// Context
import { DarkModeProvider } from 'context/DarkModeContext';

// Init navigation
init({ debug: false, visualDebug: false });

function App() {
  return (
    <ReactQueryProvider>
      <DarkModeProvider>
        <HashRouter>
          <Routes />
        </HashRouter>
      </DarkModeProvider>
    </ReactQueryProvider>
  );
}

export default App;
