import React, { useState, useEffect } from 'react';
import './Movies.scss';
import { getMoviesByName } from '../../services/titles/titles';
import Header from '../Header/Header';
import { BrowserRouter} from 'react-router-dom';

function Homepage(props) {
  const name = "spider";

  const [movies, setMovies] = useState({
    total_results: '',
    results: []
  });
  

  useEffect(() => {
    if (name) {
        getMoviesByName(name)
        .then(data => {
            setMovies(data)            
        })
    }
}, [name]);

console.log(movies)

  return (
    <BrowserRouter>
      <div className="Movies">
        <Header/> 
        <h1>Total de résultat: {movies.total_results}</h1>
        <ul>
          { movies.results.map((movie) =>
              <li value={movie.id}>{movie.title}</li>
          )}
        </ul>
      </div>
    </BrowserRouter>
  )
}

export default Homepage;
