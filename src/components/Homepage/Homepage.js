import { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { getMoviesByName } from '../../services/titles/titles';

import './Homepage.scss';
import Header from '../Header/Header';
import Card from '../Card/Card';
import { BrowserRouter} from 'react-router-dom';


function Homepage(props) {


  const [object, setObject] = useState({
    total_results: '',
    results: []
  });

  useEffect(()=>{
    if(props.movies !== undefined){
    setObject(props.movies);
  }
  }, 
  [ props.movies ]
  )

  return (
    <div className="Homepage">
      <Header/> 
          <h1>Total de résultat: {object.results.length}</h1>
      <div className="Cards">
          { object.results.map((movie) =>
              <Card movie={movie} key={movie.id}/> 
          )}
      </div>
    </div>
  )
}

export default Homepage;