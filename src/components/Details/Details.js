import React, { useState, useEffect } from 'react';
import './Details.css';
import { getMovieById } from '../../services/titles/titles';


function Details(props) {

    const [movie, setMovie] = useState({});
    //props.match.params.id
    //recup id et call API
    const ImgUrl = "https://image.tmdb.org/t/p/original";

    useEffect(() => {
        getMovieById(props.match.params.id)
        .then(data => {
            setMovie(data)
          })
    },[props.match.params.id])

console.log(movie)
  return (
    <div className="Details">
        <div>
            <div className="Details-body">
            <img className ="Details-gauche" src={ImgUrl + movie.backdrop_path}></img>
            <div className="Details-droite">
                <h1>{movie.title}</h1>
                <p>{movie.overview}</p>
            </div>
            </div>

            <footer className="Details-footer">
              FOOTER
            </footer>
        </div>

    </div>
  )
}

export default Details;
