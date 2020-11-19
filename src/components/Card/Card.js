import './Card.scss';
import i from '../../assets/noimage.jpg';

function Card(movie) {
    console.log(movie);
    let img = i;
    if (null !== movie.movie.poster_path) {
        img = 'https://image.tmdb.org/t/p/w220_and_h330_face/'+movie.movie.poster_path;
    }
  return (
    <div className="Card">
        <img className="Card-img" src={img} alt="" />
        <div className="Card-info">
            <span className="Card-year">{movie.movie.release_date}</span>
            <span className="Card-title">{movie.movie.title}</span>
        </div>
    </div>
  );
}

export default Card;
