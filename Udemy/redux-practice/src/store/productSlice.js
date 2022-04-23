import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'Test',
  amount: 1,
  price: 6,
  totalPrice: 6,
  description: 'This is a first product - amazing!',
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    increment(state) {
      state.amount++;
      state.totalPrice += state.price;
    },
    decrement(state) {
      if(state.amount < 1) {
        return;
      }
      state.amount--;
      state.totalPrice -= state.price;
    }
  }
})

export const { increment, decrement } = productSlice.actions;
export default productSlice.reducer;