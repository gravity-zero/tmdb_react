import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import SearchBar from '../Searchbar/Searchbar';
import './Header.scss';

function Header(props) {

  return (
    <div className="Header">
        <Link to="/">
            <div className="Header-logo"></div>
        </Link>
      <div className="Header-input">
        <SearchBar value={props.value} 
          handleChange={props.handleChange}
          setMovies={props.setMovies}
        />
      </div>
    </div>
  );
}

export default Header;
