import { createSlice } from '@reduxjs/toolkit';

const initialCategoriesState = { categories: [] };

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: initialCategoriesState,
  reducers: {
    addCategories(state, action) {
      state.categories = action.payload.map((item) => ({
        key: item.id,
        id: item.id,
        name: item.name,
      }));
    },
  },
});

export const categoriesActions = categoriesSlice.actions;
export default categoriesSlice.reducer;
