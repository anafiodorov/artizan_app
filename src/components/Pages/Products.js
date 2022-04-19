import React, { Fragment, useEffect, useState } from 'react';
import classes from './Products.module.css';
import { useParams } from 'react-router-dom';
import ProductItem from './ProductItem';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import PriceSlider from '../UI/PriceSlider';
import ColorPicker from '../UI/ColorPicker';
import Size from '../UI/Size';
import Arrow from '../UI/Arrow';
import Composition from '../UI/Composition';
import generalStyles from '../../styles/general.module.css';

const Products = () => {
  let { category } = useParams();
  console.log(category);
  const [items, setItems] = useState([]);
  const [isCollapsedPrice, setIsCollapsedPrice] = useState(true);
  const [isCollapsedColor, setIsCollapsedColor] = useState(true);
  const [isCollapsedSize, setIsCollapsedSize] = useState(true);
  const [isCollapsedComposition, setIsCollapsedComposition] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      const items = await fetch(
        `http://localhost:3001/products?category=${category}`
      );
      const products = await items.json();

      if (isMounted) {
        setItems(products);
      }
    };

    fetchData();
    return () => {
      isMounted = false;
    };
  }, [category]);

  const collapsePriceHandler = () => {
    setIsCollapsedPrice(!isCollapsedPrice);
  };
  const collapseColorHandler = () => {
    setIsCollapsedColor(!isCollapsedColor);
  };
  const collapseSizeHandler = () => {
    setIsCollapsedSize(!isCollapsedSize);
  };
  const collapseCompositionHandler = () => {
    setIsCollapsedComposition(!isCollapsedComposition);
  };
  return (
    <Fragment>
      <Header />
      <div
        className={`${classes.gallery} ${generalStyles['background-color']}`}
      >
        <aside>
          <div></div>
          <form action=''>
            <div className={classes.collapsible}>
              <div className={classes['title']}>Pret</div>
              <Arrow onClick={collapsePriceHandler} />
            </div>
            {isCollapsedPrice && <PriceSlider />}
            <div className={classes.collapsible}>
              <div>Culoare</div>
              <Arrow onClick={collapseColorHandler} />
            </div>
            {isCollapsedColor && <ColorPicker />}
            <div className={classes.collapsible}>
              <div>Marime</div>
              <Arrow onClick={collapseSizeHandler} />
            </div>
            {isCollapsedSize && <Size />}
            <div className={classes.collapsible}>
              <div>Compozitie</div>
              <Arrow onClick={collapseCompositionHandler} />
            </div>
            {isCollapsedComposition && <Composition />}
          </form>
        </aside>
        <div className={classes.products}>
          {items.map((item) => (
            <ProductItem key={item.id} name={item.name} price={item.price} />
          ))}
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Products;
