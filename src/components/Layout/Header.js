import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.css';
import artisan from '../../img/artisan.jpeg';
import Button from '../UI/Button';
import Menu from './Menu';
import { useSelector, useDispatch } from 'react-redux';
import { productsActions } from '../../store/products';
import { brandsActions } from '../../store/brands';

const Header = (props) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const brands = useSelector((state) => state.brands.brands);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      const responseProducts = await fetch('http://localhost:3001/categories');
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
      <a href='#'>
        <img src={artisan} alt='Artizan logo' className={classes.img} />
      </a>
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
            <a className={classes['main-nav-link']} href='#'>
              Produse
            </a>
            <div className={classes['main-nav-submenu']}>
              <Menu items={products} />
            </div>
          </li>
          <li>
            <a className={classes['main-nav-link']} href='#'>
              Branduri
            </a>
            <div className={classes['main-nav-submenu']}>
              <Menu items={brands} />
            </div>
          </li>
          <li>
            <Link className={classes['main-nav-link']} to='/delivery'>
              Livrari
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <Link to='/login'>
          <Button>Login</Button>
        </Link>
      </div>
      <div className={classes.align}>
        <Link to='/signUp'>
          <Button>SignIn</Button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
