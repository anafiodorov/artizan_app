import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './Home.module.css';
import Description from '../Layout/Description';
import Footer from '../Layout/Footer';
import Header from '../Layout/Header';
import { productsActions } from '../../store/products';
import { brandsActions } from '../../store/brands';

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const brands = useSelector((state) => state.brands.brands);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      const responseProducts = await fetch('http://localhost:3001/products');
      const products = await responseProducts.json();

      const responseBrands = await fetch('http://localhost:3001/brands');
      const brands = await responseBrands.json();

      if (isMounted) {
        dispatch(productsActions.addProducts(products));
        dispatch(brandsActions.addBrands(brands));
      }
    };

    fetchData();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className={classes.main}>
      <Header products={products} brands={brands} />
      <Description />
      <Footer />
    </div>
  );
};

export default Home;
