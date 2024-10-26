import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../screens/home/Home.tsx";
import Contact from "../screens/home/_components/Contact.tsx";
import About from "../screens/home/_components/About.tsx";
import Auth from "../screens/home/_components/Auth.tsx";
import ProductsList from "../screens/home/_components/ProductsList.tsx";
import ProductDetails from "../screens/home/_components/ProductDetails.tsx";
import axios from "axios";

const AppRoute = () => {
  const [products, setPrdoucts] = useState([]);
  useEffect(() => {
    axios
      .get("/products/")
      .then((response) => {
        setPrdoucts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/product/:id"
        element={<ProductDetails products={products} />}
      />
      <Route path="/products" element={<ProductsList />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/signup" element={<Auth />} />
    </Routes>
  );
};

export default AppRoute;
