import './Searchbar.scss';
import { useEffect } from 'react';
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
    console.log(props.value)
    if(props.value != "") {
      getMoviesByName(props.value)
          .then(data => {
              props.setMovies(data)
              if(!match.isExact) {
                history.push("/")
              }
          })
    }
  }

  console.log(props.value)
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
      </div>
    </form>
    </div>
  );
}

export default Searchbar; 
 