import { lazy, Suspense } from 'react';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

const Homepage = lazy(() => import('../Homepage/Homepage'));


function App() {
  return (
    <BrowserRouter>
      <Suspense fallback="loading...">
        <Switch>
          <Route
            exact
            path="/"
            component={Homepage}
          />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
