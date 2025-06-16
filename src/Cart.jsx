import React from "react";
import { useCart } from "./CartContext";
import './App.css'

export default function Cart() {
  const { cartState, cartDispatch } = useCart();

  function updatequantity(itemid, quantity) {
    if (quantity > 0) {
      cartDispatch({
        type: "UPDATE_QUANTITY",
        payload: { id: itemid, quantity },
      });
    }
  }

  function removefromcart(itemid) {
    cartDispatch({ type: "REMOVE_FROM_CART", payload: itemid });
  }

  function addToCart(item) {
    const existingitem = cartState.cart.find(
      (cartitem) => cartitem.id === item.id
    );
    if (existingitem) {
      cartDispatch({
        type: "UPDATE_QUANTITY",
        payload: { id: item.id, quantity: existingitem.quantity + 1 },
      });
    } else {
      cartDispatch({ type: "ADD_ITEM", payload: { ...item, quantity: 1 } });
    }
  }

  const products = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" },
  ];

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartState.cart.map((item) => (
          <li key={item.id}>
            {item.name} = {item.quantity}
            <button onClick={() => updatequantity(item.id, item.quantity + 1)}>
              +
            </button>
            <button onClick={() => updatequantity(item.id, item.quantity - 1)}>
              -
            </button>
            <button onClick={() => removefromcart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name}{" "}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
