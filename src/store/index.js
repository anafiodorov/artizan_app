import { configureStore, createReducer } from '@reduxjs/toolkit';
import categoriesReducer from './categories';
import brandsReducer from './brands';
import authReducer from './auth';
import cartReducer from './cart';

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    auth: authReducer,
    brands: brandsReducer,
    cart: cartReducer,
  },
});

export default store;
