import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Homepage from '../Homepage/Homepage'
import Movies from '../Movies/Movies'


function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            component={Homepage}
          />
          <Route
            exact
            path="/test?=`${id}`"
            component={Movies}
          />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
