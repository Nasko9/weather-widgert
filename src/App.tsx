import { HashRouter } from 'react-router-dom';

// Routes
import Routes from 'containers/Routes';
// Context
import { DarkModeProvider } from 'context/DarkModeContext';

function App() {
  return (
    <DarkModeProvider>
      <HashRouter>
        <Routes />
      </HashRouter>
    </DarkModeProvider>
  );
}

export default App;
