import React, { Fragment, useEffect, useState } from 'react';
import classes from './Products.module.css';
import { useParams, useLocation } from 'react-router-dom';
import ProductItem from './ProductItem';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import PriceSlider from '../UI/PriceSlider';
import ColorPicker from '../UI/ColorPicker';
import Size from '../UI/Size';
import Arrow from '../UI/Arrow';
import Composition from '../UI/Composition';
import generalStyles from '../../styles/general.module.css';
import { cartActions } from '../../store/cart';
import { useDispatch } from 'react-redux';

const Products = () => {
  const dispatch = useDispatch();

  const { search } = useLocation();

  const category = new URLSearchParams(search).get('category');
  const brand = new URLSearchParams(search).get('brand');

  const [items, setItems] = useState([]);
  const [isCollapsedPrice, setIsCollapsedPrice] = useState(true);
  const [isCollapsedColor, setIsCollapsedColor] = useState(true);
  const [isCollapsedSize, setIsCollapsedSize] = useState(true);
  const [isCollapsedComposition, setIsCollapsedComposition] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      let url = 'http://localhost:3001/products';

      if (category) {
        url = url + `?category=${category}`;
      } else if (brand) {
        url = url + `?brand=${brand}`;
      }
      const items = await fetch(url);
      const products = await items.json();

      if (isMounted) {
        setItems(products);
      }
    };

    fetchData();
    return () => {
      isMounted = false;
    };
  }, [category, brand]);

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
  const cartItemAddHandler = (item) => {
    dispatch(
      cartActions.addToCart({
        id: item.id,
        name: item.name,
        amount: 1,
        price: item.price,
      })
    );
    console.log(item);
  };
  return (
    <Fragment>
      <Header />
      <div
        className={`${classes.gallery} ${generalStyles['background-color']}`}
      >
        <aside>
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
            <ProductItem
              key={item.id}
              name={item.name}
              price={item.price}
              onAdd={cartItemAddHandler.bind(null, item)}
            />
          ))}
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Products;
