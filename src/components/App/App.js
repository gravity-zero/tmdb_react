import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Homepage from '../Homepage/Homepage'


function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            component={Homepage}
          />    
        </Switch>
    </BrowserRouter>
  );
}

export default App;
