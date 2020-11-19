import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Homepage from '../Homepage/Homepage'
import Movies from '../Movies/Movies'

import Footer from '../Footer/Footer';

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
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
