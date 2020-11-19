import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import { useState} from 'react';
import  Homepage  from '../Homepage/Homepage';
import Movies from '../Movies/Movies';
import Header from '../Header/Header';
import Details from '../Details/Details'
import Footer from '../Footer/Footer';
import Searchbar from '../Searchbar/Searchbar';

function App() {

  const [value, setValue] = useState({
    title: '' 
   });
  
   const [movies, setMovies] = useState({
    total_results: '',
    results: []
  });

  function handleChange(event) {
    setValue({
      ...value,
      [event.target.name]: event.target.value
      });
    }
  
    console.log(value)

  return (
    <BrowserRouter>
      <Header 
        handleChange={handleChange}
        value={value.title}
        setMovies={setMovies}
      />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Homepage movies={movies} />}
          />
          <Route
            exact
            path="/test"
            component={Movies}
          />
          <Route
            exact
            path="/details/:id"
            component={Details}
          />
        </Switch>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
