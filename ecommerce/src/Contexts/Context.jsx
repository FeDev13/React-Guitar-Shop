import { createContext, useReducer } from "react";

export const CartContext = createContext();
export const Context = (props) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return [...state, action.payload];

      case "SUMA":
        const tempstate1 = state.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
        return tempstate1;
      case "RESTA":
        const tempstate2 = state.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
        return tempstate2;
      case "QUITAR":
        const tempstate3 = state.filter(
          (item) => item.id !== action.payload.id
        );

        return tempstate3;

      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, []);
  const info = { state, dispatch };
  return (
    <CartContext.Provider value={info}>{props.children}</CartContext.Provider>
  );
};
