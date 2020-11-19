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
      
    </div>
  );
}

export default Header;
