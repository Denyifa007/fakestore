import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="soft">
      <div className="shop">
        <h2><span>BLUE</span>SHOP</h2>
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
            <Link to="Products">🛒Cart</Link>
          </li>
          <button>LOG IN</button>
        
          <li>
            <Link to="Products">Sign Up</Link>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
