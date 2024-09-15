import React, { useContext } from "react";
import { CartContext } from "../features/ContextProvider";
import "./Product.css";

const Product = ({ product }) => {
  const { dispatch } = useContext(CartContext);
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img
          className="card-img-top h-72"
          height={"100px"}
          src={product.thumbnail}
          alt={product.title}
        />
        <div className="card-body">
          <h4
            className="card-title"
            style={{ fontWeight: "bold", textTransform: "uppercase" }}
          >
            {product.title}
          </h4>
          <p className="card-description">{product.description}</p>
          <h5>${product.price}</h5>
          <button
            className="btn btn-success d-flex justify-content-center"
            onClick={() => dispatch({ type: "Add", product: product })}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
