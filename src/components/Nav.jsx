import React from "react";

const Nav = () => {
  return (
    <div>
      <nav className="container">
        <div className="logo">
          <img src="/images/brand_logo.png" alt="Nike Logo" />
        </div>

        <ul>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>

        <button>Login</button>
      </nav>
    </div>
  );
};

export default Nav;
