import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUp from './components/Pages/SignUp';
import Home from '../src/components/Pages/Home';
import Delivery from './components/Pages/Delivery';
import Login from '../src/components/Pages/Login';
import Products from './components/Pages/Products';
import ViewCart from './components/Pages/ViewCart';
import Checkout from './components/Pages/Checkout';
import ProductItemDetails from './components/Pages/ProductItemDetails';
import Test from './components/UI/Test';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/delivery' element={<Delivery />} />
      <Route path='/signUp' element={<SignUp />} />
      <Route path='/login' element={<Login />} />
      <Route path='/products' element={<Products />} />
      <Route path='/product-item-details' element={<ProductItemDetails />} />
      <Route path='/view-cart' element={<ViewCart />} />
      <Route path='/checkout' element={<Checkout />} />
      <Route path='/test' element={<Test />} />
    </Routes>
  );
}

export default App;
