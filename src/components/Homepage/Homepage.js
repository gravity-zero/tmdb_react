import { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { getMoviesByName } from '../../services/titles/titles';

import './Homepage.scss';
import Card from '../Card/Card';


function Homepage(props) {


  const [object, setObject] = useState({
    total_results: '',
    results: []
  });

  useEffect(()=>{
    if(props.movies !== undefined){
    setObject(props.movies);
  }
  },[ props.movies ])

  return (
    <div className="Homepage">
      <div className="Cards">
          { object.results.map((movie) =>
              <Card movie={movie} key={movie.id}/> 
          )}
      </div>
    </div>
  )
}

export default Homepage;