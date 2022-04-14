import React from 'react';
import Header from '../Layout/Header';
import classes from './Delivery.module.css';
import DeliveryDescription from './Delivery/DeliveryDescription';
import Footer from '../Layout/Footer';

const Delivery = () => {
  return (
    <div className={classes.top}>
      <Header />
      <DeliveryDescription />
      <Footer />
    </div>
  );
};

export default Delivery;
