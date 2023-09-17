import { Route, Routes as Switch } from 'react-router-dom';

// Pages
import Settings from './Settings';
import Stream from './Stream';
import Weather from './Weather';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" element={<Stream />} />
      <Route path="/weather" element={<Weather />} />
      <Route path="/settings" element={<Settings />} />
    </Switch>
  );
}
