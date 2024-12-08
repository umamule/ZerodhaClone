import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary border-bottom">
    <div className="container">
      <div className="nav-responsive row between">
        <div className="col-5">
          <Link to="/">
            <img src="media/images/logo.svg" alt="Logo" style={{ width: "25%" }} />
          </Link>
        </div>
        <div className="col-7" role="navigation" aria-label="Main navigation">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="hide-on-small">
              <Link class="nav-link active" aria-current="page" to="/signup">SignUp</Link>
            </li>
            <li className="hide-on-small">
              <Link class="nav-link active" aria-current="page" to="/about">About</Link>
            </li>
            <li className="hide-on-small">
              <Link class="nav-link active" aria-current="page" to="/products">Product</Link>
            </li>
            <li className="hide-on-small">
              <Link class="nav-link active" aria-current="page" to="/pricing">Pricing</Link>
            </li>
            <li className="hide-on-small">
              <Link class="nav-link active" aria-current="spport" to="/support">Support</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  
  );
}

export default Navbar;
