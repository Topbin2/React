import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";

import uiSlice from "./ui-slice";
import cartSlice from "./cart-slice";

const store = configureStore(
  {
    reducer: { ui: uiSlice.reducer, cart: cartSlice.reducer },
  },
  composeWithDevTools()
);

export default store;
