import "../styles/navbar.css";
import { NavLink } from "react-router-dom";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ size, setShow }) => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <>
      <header>
        <h1>Guitar Shop</h1>
        <nav ref={navRef}>
          <NavLink to="/cart">
            <button
              className="bg-orange-600 hover:bg-black-700 text-white font-bold py-2 px-4 rounded"
              id="boton"
            >
              Carrito
            </button>
          </NavLink>
          <NavLink to="/login">
            <button
              className="bg-orange-600 hover:bg-black-700 text-white font-bold py-2 px-4 rounded"
              id="boton"
            >
              Login
            </button>
          </NavLink>
          <NavLink to="/products">
            <button
              className="bg-orange-600 hover:bg-black-700 text-white font-bold py-2 px-4 rounded"
              id="boton"
            >
              Comprar
            </button>
          </NavLink>
          <NavLink to="/">
            <button
              className="bg-orange-600 hover:bg-black-700 text-white font-bold py-2 px-4 rounded"
              id="boton"
            >
              Home
            </button>
          </NavLink>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
          <NavLink to="/register">
            <button
              className="bg-orange-600 hover:bg-black-700 text-white font-bold py-2 px-4 rounded"
              id="boton"
            >
              Registrarse
            </button>
          </NavLink>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    </>
  );
};

export default Navbar;
