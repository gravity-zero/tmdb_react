import { Link } from 'react-router-dom';

import './Header.scss';

function Header(props) {

  return (
    <div className="Header">
        <Link to="/">
            <div className="Header-logo"></div>
        </Link>
        <form onSubmit={props.handleSubmit}>
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

export default Header;
