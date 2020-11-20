import './Searchbar.scss';
import { useHistory, useRouteMatch } from 'react-router-dom'
import { getMoviesByName } from '../../services/titles/titles';


function Searchbar(props) {

  const history = useHistory();
  const match = useRouteMatch({
    path:"/",
    strict: true,
    sensitive: true
  });

  function handleSubmit(event) {
    event.preventDefault();
    if(props.value !== "") {
      getMoviesByName(props.value)
          .then(data => {
              props.setMovies(data)
              if(!match.isExact) {
                history.push("/")
              }
          })
    } else {
      props.setMovies({
        total_results: '',
        results: []
      })
    }
  }

  return (
    <div className="Searchbar">
        <form onSubmit={handleSubmit}>
      <div className="input">
        <label>
        <input 
        type="text" 
        id="title" 
        name="title" 
        placeholder="Recherche... Avengers, La r.."
        value={props.value}
        onChange={props.handleChange}
        />
        </label>
        <label>
        <select onChange={props.changeLang} value={props.lang} className="select-lang">
          <option value="fr" defaultValue>FR</option>
          <option value="en">EN</option>
        </select>
        </label>
      </div>
      </form>
    </div>
  );
}

export default Searchbar; 
 