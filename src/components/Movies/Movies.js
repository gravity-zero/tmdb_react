import React, { useState, useEffect } from 'react';
import './Movies.scss';
import { getMovieById } from '../../services/titles/titles';
import Header from '../Header/Header';
import { BrowserRouter, Link } from 'react-router-dom';

function Movies(props) {

  const [movies, setMovies] = useState({
    total_results: '',
    results: []
  });
  
  useEffect(() => {
    if (props.match.params.id) {
        getMovieById(props.match.params.id)
        .then(data => {
            setMovies(data)            
        })
    }
}, [props.match.params.id]);

  return (
    <BrowserRouter>
      <div className="Movies">
        <Header/> 
        <h1>Total de résultat: {movies.total_results}</h1>
        <ul>
        { movies.results.map((movie) =>
            <Link to={{
                pathname: "/details",
                state: { movie: movie }
              }}
            >{ movie.title }</Link>
        )}
        </ul>
      </div>
    </BrowserRouter>
  )
}

export default Movies;
