import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className="nav_box">
        <h1 color="white">Guitar Shop</h1>

        <button className="btn">login</button>
        <NavLink to="/products">
          <button className="btn">Productos</button>
        </NavLink>
        <button className="btn">Registrarse</button>
      </div>
    </nav>
  );
};

export default Nav;
