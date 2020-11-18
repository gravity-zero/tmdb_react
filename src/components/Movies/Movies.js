import React, { useState, useEffect } from 'react';
import './Movies.css';
import { getMoviesByName } from '../../services/titles/titles';

function Homepage(props) {
  const name = "spider";

  const [movies, setMovies] = useState({
    total_results: '',
    results: ''
  });

  useEffect(() => {
    if (name) {
        getMoviesByName(name).then(data => setMovies(data));
        console.log(name)
    }
  }, [name]);
  
  return (
    <div className="Movies">
        <h1>Hello world</h1>
        <ul>
        </ul>
    </div>
  )
}

export default Homepage;
