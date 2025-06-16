import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const initialState = {
    cart: [],
    total: 0,
  };

  function CartReducer(state, action) {
    console.log(state, action);

    switch (action.type) {
      case "ADD_ITEM":
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };

      case "UPDATE_QUANTITY":
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: action.payload.quantity }
              : item
          ),
        };

      case "REMOVE_FROM_CART":
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload), // Fixed payload usage
        };

      default:
        return state;
    }
  }

  const [cartState, cartDispatch] = useReducer(CartReducer, initialState);

  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
