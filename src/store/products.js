import { createSlice } from '@reduxjs/toolkit';

const initialProductsState = { products: [] };

const productsSlice = createSlice({
  name: 'products',
  initialState: initialProductsState,
  reducers: {
    addProducts(state, action) {
      state.products = action.payload.map((item) => ({
        key: item.id,
        id: item.id,
        name: item.name,
      }));
    },
  },
});

export const productsActions = productsSlice.actions;
export default productsSlice.reducer;
