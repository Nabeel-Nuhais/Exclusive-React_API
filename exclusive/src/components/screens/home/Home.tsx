import React, { useState } from "react";
import TopBar from "../../includes/TopBar.tsx";
import Header from "../../includes/Header.tsx";
import Spotlight from "./_components/Spotlight.tsx";
import Footer from "../../includes/Footer.tsx";
import Categories from "./_components/Categories.tsx";
import ProductsHome from "./_components/ProductsHome.tsx";
import Services from "./_components/Services.tsx";
import "../../../App.css"

const Home: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <>
      <TopBar />
      <Header />
      <Spotlight />
      <Categories setSelectedCategory={setSelectedCategory} />
      <ProductsHome selectedCategory={selectedCategory} /> 
      <Services />
      <Footer />
    </>
  );
};

export default Home;