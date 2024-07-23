import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearcart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearcart());
  };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 rounded-lg bg-black text-white"
          onClick={handleClearCart}
        >
          Clear Card
        </button>
        {cartItems.length === 0 && <h1>Please add some carts!</h1>}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
