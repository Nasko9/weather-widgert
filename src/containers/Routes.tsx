import { Route, Routes as Switch } from 'react-router-dom';

// Component
import Layout from 'components/Layout';

// Pages
import Settings from './Settings';
import Stream from './Stream';
import Weather from './Weather';

export default function Routes() {
  return (
    <>
      <Switch>
        <Route path="/" element={<Stream />} />
      </Switch>
      <Layout>
        <Switch>
          <Route path="/weather" element={<Weather />} />
          <Route path="/settings" element={<Settings />} />
        </Switch>
      </Layout>
    </>
  );
}

//!Research whether it is a good practice to use 2 switch components inside one router and whether it is okay to configure the Layout like this
