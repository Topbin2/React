import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isValid: false,
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    changeValid(state) {
      state.isValid = !state.isValid;
    }
  }
})

export const { changeValid } = uiSlice.actions;
export default uiSlice.reducer;