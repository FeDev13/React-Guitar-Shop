import { useContext, useEffect } from "react";
import { useState } from "react";
import Navbar from "./NavBar";
import { CartContext } from "../Contexts/Context";
import Axios from "axios";
import Swal from "sweetalert2";

const ListProdTest = () => {
  const [data, setdata] = useState([]);

  const mostrarCompra = () => {
    Swal.fire({ icon: "warning", title: "Producto agregado" });
  };

  const fetchData = async () => {
    const response = await Axios.get(
      "http://localhost:3001/productos/guitarras"
    );
    setdata(response.data);
    console.log(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const Globalstate = useContext(CartContext);
  const dispatch = Globalstate.dispatch;
  console.log(Globalstate);

  return (
    <>
      <Navbar />
      <h1 className="  text-center my-4">Nuestro catalogo</h1>
      <div className="  grid lg:grid-cols-4 md:grid-cols-3 ml-20 sm:grid-cols-1 ">
        {data.map((item, index) => {
          item.quantity = 1;
          return (
            <div className=" mt-8 w-1/2 h-[90%]" key={index}>
              <img src={item.imagen} alt="" className=" w-full h-auto" />
              <p>{item.nombre}</p>
              <h3>$. {item.precio}</h3>
              <button
                className="bg-orange-600 text-white font-bold py-2 px-4 rounded"
                onClick={() => {
                  dispatch({ type: "ADD", payload: item });
                  mostrarCompra();
                }}
              >
                Agregar al carrito
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ListProdTest;
