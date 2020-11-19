import { Link } from 'react-router-dom';

import './Footer.scss';

function Footer() {

  return (
    <div className="Footer">
        <Link to="/">
            Copyright © 2020. All Rights Reserved
        </Link>
    </div>
  );
}

export default Footer;
