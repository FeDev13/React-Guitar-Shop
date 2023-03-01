import React from "react";
import list from "../data";
import "../styles/slideshow.css";
import { NavLink } from "react-router-dom";

const Slideshow = () => {
  return (
    <>
      <div className="cards1">
        <div className="row">
          <div className="col">
            <h4 className="title" color="black">
              Los mas pedidos
            </h4>
            <NavLink to="/faq">
              <button className="faq"> FAQ</button>
            </NavLink>
          </div>
        </div>
        {list.map((values) => {
          // filtra por propiedad rating del producto y lo verifica con if
          const { id, title, price, image, rating } = values;
          if (rating >= 5) {
            return (
              <>
                <div className="card" key={id}>
                  <div className="card-header">
                    <img src={image} alt={title} />
                  </div>
                  <div className="card-body">
                    <h2 className="titleProduct">{title}</h2>
                    <span className="price">${price}</span>
                  </div>
                </div>
              </>
            );
          }
        })}
      </div>
    </>
  );
};

export default Slideshow;
