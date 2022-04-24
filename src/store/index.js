import { configureStore, createReducer } from '@reduxjs/toolkit';
import productsReducer from './products';
import brandsReducer from './brands';
import authReducer from './auth';
import cartReducer from './cart';

const store = configureStore({
  reducer: {
    products: productsReducer,
    auth: authReducer,
    brands: brandsReducer,
    cart: cartReducer,
  },
});

export default store;
