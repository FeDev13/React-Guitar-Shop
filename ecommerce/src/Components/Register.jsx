import { useState } from "react";
import Axios from "axios";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const Register = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const mostrarError = () => {
    Swal.fire({ icon: "error", title: "Oops...", text: "Algo salio mal!" });
  };
  const mostrarAlert = () => {
    Swal.fire({
      icon: "success",
      title: "Usuario registrado con exito",
      text: "Bienvenido!",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:3001/users/user";
      const { data: res } = await Axios.post(url, data);
      navigate("/login");
      mostrarAlert();
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
      <NavBar />
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden ">
        <div className="w-full p-6 m-auto  lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-black-700 uppercase">
            Registrarse
          </h1>
          <form
            className="mt-6"
            onSubmit={handleSubmit}
            method="POST"
            encType="multipart/form-data"
          >
            <div className="mb-2">
              <label>
                <span className="text-gray-700">nombre</span>
                <input
                  onChange={handleChange}
                  id="nombre"
                  value={data.firstName}
                  type="text"
                  name="firstName"
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
                <span className="text-gray-700">apellido</span>
                <input
                  onChange={handleChange}
                  id="apellido"
                  value={data.lastName}
                  type="text"
                  name="lastName"
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
                <span className="text-gray-700">email</span>
                <input
                  onChange={handleChange}
                  id="email"
                  value={data.email}
                  type="email"
                  name="email"
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
                <span className="text-gray-700">password</span>
                <input
                  onChange={handleChange}
                  id="password"
                  value={data.password}
                  type="password"
                  name="password"
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
                Registrarse
              </button>
            </div>
            <div></div>
          </form>
        </div>
      </div>
    </>
  );
};
