import React, { useState, useEffect } from 'react';
import './Details.scss';
import { getMovieById } from '../../services/titles/titles';
import i from '../../assets/noimage.jpg';
import { FaRegPlayCircle } from 'react-icons/fa';
import StarRatingComponent from 'react-star-rating-component';



function Details(props) {

    const [movie, setMovie] = useState({});
    const rate = movie.vote_average / 2;

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
            <div className="content">
                <h1>{movie.original_title}</h1>
                <div className="website">
                    <h4>Avis: </h4>
                        <StarRatingComponent 
                        name="rate" 
                        starCount={5}
                        value={rate}
                    />
                </div>
                <p><strong>Description :</strong> {movie.overview}</p>
                <a href={movie.homepage} >
                    <button type="button" className="large-button-website">Voir le site du film <FaRegPlayCircle /></button>
                </a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Details;
