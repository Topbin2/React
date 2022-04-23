import { configureStore } from "@reduxjs/toolkit";
import productReducer from './productSlice';
import uiReducer from './uiSlice';

const store = configureStore({
  reducer: { product: productReducer, ui: uiReducer }
})

export default store;