import React, { useState } from "react";
import TopBar from "../../includes/TopBar.tsx";
import Header from "../../includes/Header.tsx";
import Spotlight from "./_components/Spotlight.tsx";
import Footer from "../../includes/Footer.tsx";
import Categories from "./_components/Categories.tsx";
import ProductsHome from "./_components/ProductsHome.tsx";
import allProucts from "../../helpers/products.json";
import Services from "./_components/Services.tsx";

interface Product {
  id: number;
  name: string;
  price: string;
  rating: number;
  category: string[];
  image: string;
  "new-label"?: string;
  colors?: string[];
  "discount-label"?: string;
  "offer-price"?: string;
}

interface HomeProps {
  productItems: Product[];
}

const Home: React.FC<HomeProps> = ({ productItems }) => {
  const { products, categories } = allProucts;

  const [filterProducts, setFilterProducts] = useState(products);

  const handleCategoryChange = (singleCat) => {
    setFilterProducts(
      products.filter((productCategory) =>
        productCategory.category.includes(singleCat)
      )
    );
  };

  return (
    <>
      <TopBar />
      <Header />
      <Spotlight />
      <Categories
        categoryItems={categories}
        handleCategoryChange={handleCategoryChange}
      />
      <ProductsHome productItems={filterProducts} />
      <Services />
      <Footer />
    </>
  );
};

export default Home;
