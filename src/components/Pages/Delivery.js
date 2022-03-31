import React from 'react';
import Header from '../Layout/Header';
import classes from './Delivery.module.css';
import { useSelector } from 'react-redux';
import DeliveryDescription from './Delivery/DeliveryDescription';
import Footer from '../Layout/Footer';

const Delivery = () => {
  const products = useSelector((state) => state.products.products);
  const brands = useSelector((state) => state.brands.brands);
  return (
    <div className={classes.top}>
      <Header products={products} brands={brands} />
      <DeliveryDescription />
      <Footer />
    </div>
  );
};

export default Delivery;
