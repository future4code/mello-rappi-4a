import React, { useReducer, useContext } from "react";

import Router from "./components/Router";
import GlobalStyle from "./styles/globals";
 
import cart, { initialState } from "./reducer/cart";
import CartContext from "./context/cart";

function App() {
  const [cartState, cartDispatch] = useReducer(cart, initialState);

  return (
    <CartContext.Provider
      value={{ products: cartState, dispatch: cartDispatch }}
    >
      <div>
        <GlobalStyle />
        <Router />
      </div>
    </CartContext.Provider>
  );
}

export default App;
