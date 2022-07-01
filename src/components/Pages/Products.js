import React, { Fragment, useEffect, useState } from 'react';
import classes from './Products.module.css';
import { useLocation } from 'react-router-dom';
import ProductItem from './ProductItem';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import PriceSlider from '../UI/PriceSlider';
import Size from '../UI/Size';
import Arrow from '../UI/Arrow';
import Composition from '../UI/Composition';
import generalStyles from '../../styles/general.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { productsActions } from '../../store/products';

const Products = () => {
  const { search } = useLocation();
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.products.products);
  const price = useSelector((state) => state.price.price);
  const sizesFilter = useSelector((state) => state.size.size);

  console.log(productList);
  console.log(sizesFilter);

  const category = new URLSearchParams(search).get('category');
  const brand = new URLSearchParams(search).get('brand');

  const [isCollapsedPrice, setIsCollapsedPrice] = useState(true);
  const [isCollapsedSize, setIsCollapsedSize] = useState(true);
  const [isCollapsedComposition, setIsCollapsedComposition] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      let url = `${process.env.REACT_APP_SERVER_URL}/products`;
      console.log('Log: ' + `${process.env.REACT_APP_TEST}`);
      console.log(url);
      if (category) {
        url = url + `?category=${category}`;
      } else if (brand) {
        url = url + `?brand=${brand}`;
      }
      const products = await fetch(url);
      const items = await products.json();

      if (isMounted) {
        dispatch(productsActions.addProducts(items));
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
  const collapseSizeHandler = () => {
    setIsCollapsedSize(!isCollapsedSize);
  };
  const collapseCompositionHandler = () => {
    setIsCollapsedComposition(!isCollapsedComposition);
  };

  const filteredList = (
    Object.values(sizesFilter).every((el) => el === false)
      ? productList
      : productList.filter((item) => {
          const sizeCheck = (el) => {
            console.log(sizesFilter);
            console.log(el);
            return sizesFilter['S' + el] === true;
          };
          return item.sizes.some(sizeCheck);
        })
  )
    .filter((item) => item.price <= price)
    .map((item) => (
      <ProductItem key={item.id} item={item} category={category} />
    ));

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
              <div>Marime</div>
              <Arrow onClick={collapseSizeHandler} />
            </div>
            {isCollapsedSize && <Size />}
            {/* <div className={classes.collapsible}>
              <div>Compozitie</div>
              <Arrow onClick={collapseCompositionHandler} />
            </div>
            {isCollapsedComposition && <Composition />} */}
          </form>
        </aside>
        <div className={classes.products}>{filteredList}</div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Products;
