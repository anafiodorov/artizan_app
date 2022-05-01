import { createSlice } from '@reduxjs/toolkit';

const initialBrandsState = { brands: [] };

const brandsSlice = createSlice({
  name: 'brands',
  initialState: initialBrandsState,
  reducers: {
    addBrands(state, action) {
      state.brands = action.payload.map((item) => ({
        key: item.id,
        id: item.id,
        name: item.name,
        alias: item.alias,
      }));
    },
  },
});

export const brandsActions = brandsSlice.actions;
export default brandsSlice.reducer;
