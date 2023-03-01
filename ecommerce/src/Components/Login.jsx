import React from "react";
import "../styles/login.css";
import Navbar from "./NavBar";
import { useState } from "react";
import Axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function Login() {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const mostrarError = () => {
    Swal.fire({ icon: "error", title: "Oops...", text: "Algo salio mal!" });
  };
  const mostrarAlert = () => {
    Swal.fire({
      icon: "success",
      title: "Bienvenido",
      timer: 3000,
    });
  };

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:3001/auth/login";
      const { data: res } = await Axios.post(url, data);
      localStorage.setItem("token", res.data);
      mostrarAlert();
      window.location = "/";
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        mostrarError();
      }
    }
  };
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
        <div className="hidden sm:block">
          <img
            className="w-auto h-full object-cover"
            src="https://images-platform.99static.com/0Blxe1dHnToAoWNiWPz6oR26paM=/500x500/top/smart/99designs-contests-attachments/12/12198/attachment_12198354"
            alt=""
          />
        </div>

        <div className="bg-black-800 flex flex-col justify-center">
          <form
            className="max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8"
            onSubmit={handleSubmit}
          >
            <h2 className="text-4xl dark:text-white font-bold text-center">
              Login
            </h2>
            <div className="flex flex-col text-gray-400 py-2">
              <label>Email</label>
              <input
                className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="email"
                onChange={handleChange}
                name="email"
                value={data.email}
              />
            </div>
            <div className="flex flex-col text-gray-400 py-2">
              <label>Password</label>
              <input
                className="p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="password"
                onChange={handleChange}
                name="password"
                value={data.password}
              />
            </div>
            <div className="flex justify-between text-gray-400 py-2">
              <p className="flex items-center">
                <input className="mr-2" type="checkbox" /> Recordarme
              </p>
              <p>Olvidaste tu password?</p>
            </div>
            <button className="w-full my-5 py-2 bg-orange-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg">
              Entrar
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
