import { useState, useEffect } from 'react';
import { getMoviesByName } from '../../services/titles/titles';
import './Homepage.scss';
import Header from '../Header/Header';
import Card from '../Card/Card';
import { BrowserRouter} from 'react-router-dom';

function Homepage() {
  //const filter = "";
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
    console.log(handleSubmit)
    getMoviesByName(value.title)
        .then(data => {
            setMovies(data)
        console.log(useEffect)
        })
  }

console.log(movies)


  return (
    <BrowserRouter>
      <div className="Homepage">
        <Header/> 
        <div className="Cards">
          <Card/> 
          <Card/> 
          <Card/> 
          <Card/> 
        </div>

        <form onSubmit={handleSubmit}>
          <div className="input">
            <label>
              Recherche par Nom de film
              <input 
                type="text" 
                id="title" 
                name="title" 
                value={value.title}
                onChange={handleChange}
                />
              <input type="submit" />
            </label>
          </div>
        </form>
        <div className="Movies">
          <h1>Total de résultat: {movies.results.length}</h1>
          <ul>
            { movies.results.map((movie) =>
                <li value={movie.id}>{movie.title}</li>
            )}
          </ul>
        </div>
      </div>
    </BrowserRouter>

  )
}

export default Homepage;