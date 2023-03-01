import React from "react";
import Axios from "axios";
import { useState } from "react";

const FormPostGuitar = () => {
  const url = "http://localhost:3001/productos/guitarra/";
  const [info, setInfo] = useState({
    nombre: "",
    descripcion: "",
    cantidad: "",
    imagen: "",
  });

  function submit(e) {
    e.preventDefault();
    Axios.post(url, {
      nombre: info.nombre,
      descripcion: info.descripcion,
      cantidad: parseInt(info.cantidad),
      imagen: info.imagen,
    }).then((response) => {
      console.log(response);
    });
  }

  function handle(e) {
    const newInfo = { ...info };
    newInfo[e.target.id] = e.target.value;
    setInfo(newInfo);
    console.log(newInfo);
  }

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden ">
      <div className="w-full p-6 m-auto  lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-black-700 uppercase">
          Subir Producto
        </h1>
        <form
          className="mt-6"
          onSubmit={(e) => submit(e)}
          method="POST"
          encType="multipart/form-data"
        >
          <div className="mb-2">
            <label>
              <span className="text-gray-700">nombre</span>
              <input
                onChange={(e) => handle(e)}
                id="nombre"
                value={info.nombre}
                type="text"
                name="name"
                className="

            w-full
            text-white
            block px-16 py-2 mt-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                placeholder=""
              />
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span className="text-gray-700">cantidad</span>
              <input
                name="cantidad"
                onChange={(e) => handle(e)}
                id="cantidad"
                value={info.cantidad}
                type="number"
                className="
            block
            text-white
            w-full
            mt-2 px-16 py-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                placeholder=""
                required
              />
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span class="text-gray-700">descripcion</span>
              <textarea
                onChange={(e) => handle(e)}
                id="descripcion"
                value={info.descripcion}
                name="message"
                className="
            block
            w-full
            text-white
            mt-2 px-16 py-8
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                rows="5"
              ></textarea>
            </label>
          </div>
          <div className="mb-2">
            <label>
              <input
                name="imagen"
                onChange={(e) => handle(e)}
                id="imagen"
                value={info.imagen}
                type="file"
                className="
            block
            text-black
            w-full
            mt-2 px-16 py-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                placeholder=""
                required
              />
            </label>
          </div>
          <div class="mb-6">
            <button
              type="submit"
              className="
            h-10
            px-5
            text-indigo-100
            bg-orange-600
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
          "
            >
              Agregar
            </button>
          </div>
          <div></div>
        </form>
      </div>
    </div>
  );
};

export default FormPostGuitar;
