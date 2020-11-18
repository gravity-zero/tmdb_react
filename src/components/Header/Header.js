import { Link } from 'react-router-dom';

import './Header.scss';

function Header() {

  return (
    <div className="Header">
        <Link to="/">
            <div className="Header-logo"></div>
        </Link>
        <input
            name="title"
            type="text"
            // value={movie.title}
            // onChange={handleChange}
            placeholder="Recherche... Avengers, La r.."
        />
    </div>
  );
}

export default Header;
