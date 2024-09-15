import React, { useContext } from "react";
import { CartContext } from "../features/ContextProvider";
import CartProduct from "../components/CartProduct";
import { totalItem, totalPrice } from "../features/CartReducer";

const Cart = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className="container mt-3 ">
      <div className="row">
        <div className="col-8">
          {cart.map((p) => (
            <CartProduct product={p} />
          ))}
        </div>
        <div className="col-4 ">
          <div className="bg-secondary p-2 text-white">
            <h5>Total Items:{totalItem(cart)}</h5>
            <h5>Total Price:${totalPrice(cart)}</h5>
            <button className="btn btn-success">CheckOut</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
