import React from "react";
import {Link} from "react-router-dom";

function NavBar(props) {
  return (
    <ul className="nav">
      <Link className="nav-link active" aria-current="page" to="/">
        <li className="nav-item">
          Main
        </li>
      </Link>
      <Link className="nav-link active" aria-current="page" to="/login">
        <li className="nav-item">
          Login
        </li>
      </Link>
      <Link className="nav-link" to="/users">
        <li className="nav-item">
          Users
        </li>
      </Link>
    </ul>
  );
}

export default NavBar;
