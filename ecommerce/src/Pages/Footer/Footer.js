import React from "react";
import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons";
import { Icons } from "./Menus";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7 mt-4">
        <h1
          className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5"
        >
          Suscribite para recibir todas nuestras ofertas
        </h1>
        <div>
          <input
            type="text"
            placeholder="Ingresa tu email"
            className="text-gray-800
           sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
          />
          <button
            className="bg-orange-600  duration-300 px-5 py-2.5 font-[Antonio]
           rounded-md text-white md:w-auto w-full"
          >
            Suscribite al newsletter
          </button>
        </div>
      </div>
      <ItemsContainer />
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span>© 2022 Guitar Shop.</span>
        <span>Terminos y condiciones · Politica de privacidad</span>
        <SocialIcons Icons={Icons} />
      </div>
    </footer>
  );
};

export default Footer;
