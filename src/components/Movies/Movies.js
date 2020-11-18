import React, { useState, useEffect } from 'react';
import './Movies.css';
import { getMoviesByName } from '../../services/titles/titles';

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
    <div className="Movies">
        <h1>Total de résultat: {movies.total_results}</h1>
        <ul>
        { movies.results.map((movie) =>
            <li value={movie.id}>{movie.title}</li>
        )}
        </ul>
    </div>
  )
}

export default Homepage;
