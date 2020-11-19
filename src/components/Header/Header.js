import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './Header.scss';

function Header() {

  return (
    <div className="Header">
        <Link to="/">
            <div className="Header-logo"></div>
        </Link>
        <div className="Header-input"> 
          <input
              id='search'
              name="title"
              type="text"
              // value={movie.title}
              // onChange={handleChange}
              placeholder="Recherche.. Avenge.."
          />
          {/* faire une recherche si l'input n'est pas vide */}
          <label for="search" id="makesearch">
            <FontAwesomeIcon icon={faSearch} />
          </label> 
        </div>
    </div>
  );
}

export default Header;
