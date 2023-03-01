import React from "react";
import { useContext } from "react";
import { CartContext } from "../Contexts/Context";
import Navbar from "./NavBar";
import shoppingcart from "../styles/shoppingcart.css";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const ShoppingCart = () => {
  const Globalstate = useContext(CartContext);
  const state = Globalstate.state;
  const dispatch = Globalstate.dispatch;

  const total = state.reduce((total, producto) => {
    return total + producto.precio * producto.quantity;
  }, 0);
  return (
    <>
      <Navbar />
      <div className="carrito">
        {state.map((producto, index) => {
          return (
            <div className="carro" key={index}>
              <img src={producto.imagen} alt="" />
              <p>{producto.nombre}</p>
              <p> $ {producto.quantity * producto.precio}</p>
              <div className="quantity">
                <button
                  onClick={() => dispatch({ type: "SUMA", payload: producto })}
                >
                  <AddIcon></AddIcon>
                </button>
                <p>{producto.quantity}</p>
                <button
                  onClick={() => {
                    if (producto.quantity > 1) {
                      dispatch({ type: "RESTA", payload: producto });
                    } else {
                      dispatch({ type: "QUITAR", payload: producto });
                    }
                  }}
                >
                  <RemoveIcon></RemoveIcon>
                </button>
              </div>
              <Button
                variant="contained"
                color="error"
                onClick={() => dispatch({ type: "QUITAR", payload: producto })}
              >
                Quitar
              </Button>
            </div>
          );
        })}
        {state.length > 0 && (
          <div className="total">
            <h2>Total $ {total}</h2>
            <NavLink to="/compra">
              <button className="comprar">Finalizar compra</button>
            </NavLink>
          </div>
        )}
      </div>
    </>
  );
};

export default ShoppingCart;
