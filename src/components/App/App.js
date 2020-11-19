import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { useState} from 'react';


import  Homepage  from '../Homepage/Homepage';
import Movies from '../Movies/Movies';
import { getMoviesByName } from '../../services/titles/titles';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

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

  function handleSubmit(event) {
    event.preventDefault();
    getMoviesByName(value.title)
        .then(data => {
            setMovies(data)
        })
  }


  return (
    <BrowserRouter>
      <Header 
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      value={value.title}
      /> 
        <Switch>
          <Route
            exact
            path="/"
          ><Homepage movies={movies} />
          </Route>
          <Route
            exact
            path="/test"
            component={Movies}
          />
        </Switch>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
