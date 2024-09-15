import React, { useContext } from "react";
import { CartContext } from "../features/ContextProvider";

const CartProduct = ({ product }) => {
  const { cart, dispatch } = useContext(CartContext);

  const Increase = (id) => {
    const Index = cart.findIndex((p) => p.id === id);
    if (cart[Index].quantity < 100) {
      dispatch({ type: "Increase", id });
    }
  };
  const Decrease = (id) => {
    const Index = cart.findIndex((p) => p.id === id);
    if (cart[Index].quantity > 1) {
      dispatch({ type: "Decrease", id });
    }
  };

  return (
    <div className="d-flex border mb-4">
      <img src={product.thumbnail} className="h-24 w-24" />
      <div className="detail ms-4">
        <h4>{product.title}</h4>
        <p>{product.description} </p>
        <h4>${product.price}</h4>{" "}
        <div className="buttons">
          <button
            className="rounded-circle px-2"
            onClick={() => Decrease(product.id)}
          >
            <b>-</b>
          </button>
          <button className="rounded">{product.quantity}</button>
          <button
            className="rounded-circle px-2"
            onClick={() => Increase(product.id)}
          >
            <b>+</b>
          </button>
          <button
            className="btn btn-sm btn-danger"
            onClick={() => dispatch({ type: "Remove", id: product.id })}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
