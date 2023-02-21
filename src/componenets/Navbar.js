import React from "react";
import Marque from "./Marque";
import { Link } from "react-router-dom";

const Navbar = ({cartItem}) => {

  return (
    <div id="nav">
      <div className="soft">
        <div className="shop">
          <h2>
            <span>BLUE</span>SHOP
          </h2>
        </div>

        <div className="link">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="About">About</Link>
            </li>
            <li>
              <Link to="Products">Products</Link>
            </li>
            <li>
              <Link to="Cart">🛒Cart ({cartItem.length})</Link>
            </li>
            <button>LOG IN</button>

            <li>
              <Link to="Products">Sign Up</Link>
            </li>
          </ul>
        </div>
      </div>
      <Marque />
    </div>
  );
};

export default Navbar;
