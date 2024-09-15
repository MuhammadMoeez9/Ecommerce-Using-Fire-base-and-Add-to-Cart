import React, { useState } from "react";
import Data from "../Pages/Data.json";
import Product from "./Product";
const Home = () => {
  const [products, setProducts] = useState(Data.products);

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {products.map((p) => (
          <Product product={p} />
        ))}
      </div>
    </div>
  );
};

export default Home;
