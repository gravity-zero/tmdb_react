import './Movies.css';

function Homepage(props) {
  const filter = "";

  import {
    getMoviesByName
  } from '../../services/titles/titles';

  const [movies, setMovies] = useState({
    total_results: '',
    results: ''
  });

  return (
    <div className="Movies">
        <h1>Hello world</h1>
        <ul>
        {this.state.shop.map((item) =>
            <Item key={item.id} item={item}/>
        )}
        </ul>
    </div>
  )
}

export default Homepage;
