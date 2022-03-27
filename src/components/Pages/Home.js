import React, { useEffect, useState } from 'react';
import classes from './Home.module.css';
import Description from '../Layout/Description';
import Footer from '../Layout/Footer';
import Header from '../Layout/Header';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      const responseProducts = await fetch('http://localhost:3001/products');
      const products = await responseProducts.json();

      const responseBrands = await fetch('http://localhost:3001/brands');
      const brands = await responseBrands.json();

      if (isMounted) {
        setProducts(
          products.map((item) => ({
            key: item.product_id,
            id: item.product_id,
            name: item.name,
          }))
        );
        setBrands(
          brands.map((item) => ({
            key: item.brand_id,
            id: item.brand_id,
            name: item.brand_name,
          }))
        );
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
