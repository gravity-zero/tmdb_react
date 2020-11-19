import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import './Homepage.scss';

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
  
  console.log("object", object)


  return (
    <div className="Homepage"> 
      <div className="Movies_test">
          <h1>Total de résultat: {object.results.length}</h1>
          <ul>
          { object.results.map((movie) =>
              <li value={movie.id}>{movie.title}</li>
          )}
          </ul>
      </div>
    </div>
  )
}

export default Homepage;