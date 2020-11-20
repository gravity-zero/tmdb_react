import './Card.scss';
import i from '../../assets/noimage.jpg';
import { Link } from 'react-router-dom';

function Card(movie) {
    let img = i;
    if (null !== movie.movie.poster_path) {
        img = 'https://image.tmdb.org/t/p/w220_and_h330_face/'+movie.movie.poster_path;
    }
  return (
    <div className="Card">
      <Link to={`/details/${movie.movie.id}`} key={movie.movie.id} >
        <img className="Card-img" src={img} alt="" />
        
        <div className="Card-info">
            <span className="Card-year">{movie.movie.release_date}</span>
            <span className="Card-title">{movie.movie.original_title}</span>
        </div>
      </Link>
    </div>
  );
}

export default Card;
