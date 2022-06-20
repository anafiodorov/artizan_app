import { createSlice } from '@reduxjs/toolkit';

const initialPriceState = { price: '' };

const priceSlice = createSlice({
  name: 'price',
  initialState: initialPriceState,
  reducers: {
    addPrice(state, action) {
      state.price = action.payload;
    },
  },
});

export const priceActions = priceSlice.actions;
export default priceSlice.reducer;
