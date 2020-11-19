import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './Header.scss';

function Header(props) {

  return (
    <div className="Header">
        <Link to="/">
            <div className="Header-logo"></div>
        </Link>
      <div className="Header-input">
        <form onSubmit={props.handleSubmit}>
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
        </form>
      </div>
    </div>
  );
}

export default Header;
