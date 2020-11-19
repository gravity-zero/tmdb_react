import React, { useState, useEffect } from 'react';
import './Details.scss';
import { getMovieById } from '../../services/titles/titles';
import i from '../../assets/noimage.jpg';


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

    let img = i;
    if (null !== movie.poster_path) {
        img = 'https://image.tmdb.org/t/p/original/'+movie.poster_path;
    }
  return (
    // <div className="Details">
    //     <div>
    //         <div className="Details-body">
    //           <img className ="Details-gauche" src={ImgUrl + movie.backdrop_path} alt=""></img>
    //           <div className="Details-droite">
    //               <h1>{movie.title}</h1>
    //               <p>{movie.overview}</p>
    //           </div>
    //         </div>
    //     </div>
    //     <div>
    // </div>
    // </div>
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
