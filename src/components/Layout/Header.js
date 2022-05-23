import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.css';
import Menu from './Menu';
import { useSelector, useDispatch } from 'react-redux';
import { categoriesActions } from '../../store/categories';
import { brandsActions } from '../../store/brands';
import Cart from '../Cart/Cart';
import generalStyles from '../../styles/general.module.css';

const Header = (props) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  const brands = useSelector((state) => state.brands.brands);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      const fetchedCategories = await fetch('http://localhost:3001/categories');
      const categories = await fetchedCategories.json();

      console.log(categories);

      const fetchedBrands = await fetch('http://localhost:3001/brands');
      const brands = await fetchedBrands.json();

      console.log(brands);

      if (isMounted) {
        dispatch(categoriesActions.addCategories(categories));
        dispatch(brandsActions.addBrands(brands));
      }
    };

    fetchData();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <Fragment>
      <div className={`${classes.main} ${generalStyles['background-color']}`}>
        <Link to='/' className={classes.title}>
          Artizan
        </Link>
        <nav className={classes['main-nav']}>
          <ul className={classes['main-nav-list']}>
            <li>
              <Link className={classes['main-nav-link']} to='/'>
                Acasa
              </Link>
            </li>
            <li>
              <Link className={classes['main-nav-link']} to='/products'>
                Produse
              </Link>
              <div className={classes['main-nav-submenu']}>
                <Menu
                  items={categories.map((el) => {
                    return {
                      id: el.id,
                      name: el.name,
                      type: 'category',
                    };
                  })}
                />
              </div>
            </li>
            <li>
              <Link className={classes['main-nav-link']} to='/products'>
                Branduri
              </Link>
              <div className={classes['main-nav-submenu']}>
                <Menu
                  items={brands.map((el) => {
                    return {
                      id: el.id,
                      name: el.name,
                      alias: el.alias,
                      type: 'brand',
                    };
                  })}
                />
              </div>
            </li>
            <li>
              <Link className={classes['main-nav-link']} to='/delivery'>
                Livrari
              </Link>
            </li>
          </ul>
        </nav>
        <div className={classes['serch-cart-totalAmount']}>
          <Link className={classes['link-search']} to='/view-cart'>
            <Cart />
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
