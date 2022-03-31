import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUp from './components/Pages/SignUp';
import Home from '../src/components/Pages/Home';
import Delivery from './components/Pages/Delivery';
import Login from '../src/components/Pages/Login';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/delivery' element={<Delivery />} />
      <Route path='/signUp' element={<SignUp />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  );
}

export default App;
