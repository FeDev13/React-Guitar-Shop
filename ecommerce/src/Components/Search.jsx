import React from "react";
import "../styles/search.css";
import list from "../data";
import { useState } from "react";

const Search = (item, handleClick) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <div className="templateContainer">
        <div className="searchInput_Container">
          <input
            className="input"
            id="searchInput"
            type="text"
            placeholder="Buscar"
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>
        <div className="template_Container">
          {list
            .filter((val) => {
              if (searchTerm === "") {
                return (
                  <>
                    <h3>No se han encontrado productos</h3>
                  </>
                );
              } else if (
                val.title.toLowerCase().includes(searchTerm.toLowerCase()) //poner .map antes del return
              ) {
                return (
                  <div className="template" key={val.id}>
                    <img src={val.image} alt="" />
                    <h3>{val.title}</h3>
                    <button className="detail">Detalles</button>
                  </div>
                );
              }
            })
            .map((val) => {
              if (searchTerm === "") {
                return <></>;
              } else {
                return (
                  <div className="template" key={val.id}>
                    <img src={val.image} alt="" />
                    <h3>{val.title}</h3>
                    <button className="detail">Detalles</button>
                  </div>
                );
              }
            })}
        </div>
      </div>
    </>
  );
};

export default Search;
