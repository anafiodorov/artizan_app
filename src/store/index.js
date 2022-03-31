import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './products';
import brandsReducer from './brands';
import authReducer from './auth';

const store = configureStore({
  reducer: {
    products: productsReducer,
    auth: authReducer,
    brands: brandsReducer,
  },
});

export default store;
