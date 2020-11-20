import React, { useState, useEffect } from 'react';
import './Details.scss';
import { getMovieById } from '../../services/titles/titles';
import i from '../../assets/noimage.jpg';


function Details(props) {

    const [movie, setMovie] = useState({});

    
    useEffect(() => {
        getMovieById(props.match.params.id, props.lang)
        .then(data => {
            setMovie(data)
        })
    },[props.match.params.id, props.lang])

    let img = i;
    if (null !== movie.poster_path) {
        img = 'https://image.tmdb.org/t/p/original/'+movie.poster_path;
    }
  return (
    <div className="Detail">
      <div className="Detail-body">
        <div className="col-2 img">
          <img src={img} alt=""></img>
        </div>
        <div className="col-2 infos">
          <h1>{movie.title}</h1>
          <p><strong>Description :</strong> {movie.overview}</p>
        </div>

      </div>
    </div>
  )
}

export default Details;
