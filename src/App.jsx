import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpForm from "./components/SignUpForm";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Cart from "./Pages/Cart";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />}></Route>
          <Route path="/SignUpForm" element={<SignUpForm />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="*" element={"Page Not Found"}></Route>
          <Route path="/Navbar" element={<Navbar />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
