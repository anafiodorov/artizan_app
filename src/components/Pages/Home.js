import React from 'react';
import classes from './Home.module.css';
import Description from '../Layout/Description';
import Footer from '../Layout/Footer';
import Header from '../Layout/Header';

const Home = () => {
  return (
    <div className={classes.main}>
      <Header />
      <Description />
      <Footer />
    </div>
  );
};

export default Home;
