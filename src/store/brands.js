import { createSlice } from '@reduxjs/toolkit';

const initialBrandsState = { brands: [] };

const brandsSlice = createSlice({
  name: 'brands',
  initialState: initialBrandsState,
  reducers: {
    addBrands(state, action) {
      state.brands = action.payload.map((item) => ({
        key: item.brand_id,
        id: item.brand_id,
        name: item.brand_name,
      }));
    },
  },
});

export const brandsActions = brandsSlice.actions;
export default brandsSlice.reducer;
