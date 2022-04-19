import React from 'react';
import Header from '../Layout/Header';
import classes from './Delivery.module.css';
import DeliveryDescription from './Delivery/DeliveryDescription';
import Footer from '../Layout/Footer';
import generalStyles from '../../styles/general.module.css';

const Delivery = () => {
  return (
    <div className={generalStyles['background-color']}>
      <Header />
      <DeliveryDescription />
      <Footer />
    </div>
  );
};

export default Delivery;
