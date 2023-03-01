import "./App.css";

import "./styles/amazon.css";
import Footer from "./Pages/Footer/Footer.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Faq from "./Components/Faq";
import Home from "./Components/Home";
import Login from "./Components/Login";
import CreditCardForm from "./Components/CreditCardForm";
import Search from "./Components/Search";
import FormPostGuitar from "./Components/FormPostGuitar";
import { Register } from "./Components/Register";
import ListProdTest from "./Components/listProdTest";
import ShoppingCart from "./Components/ShoppingCart";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ListProdTest />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/login" element={<Login />} />
          <Route path="/compra" element={<CreditCardForm />} />
          <Route path="/dashboard" element={<FormPostGuitar />} />
          <Route path="/Search/:filter" element={<Search />} />
          <Route path="/register" element={<Register />} />
          <Route path="/test" element={<ListProdTest />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
