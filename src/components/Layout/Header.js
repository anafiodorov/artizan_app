import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.css';
import artisan from '../../img/artisan.jpeg';
import Button from '../UI/Button';
import Menu from './Menu';

const Header = (props) => {
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
              <Menu items={props.products} />
            </div>
          </li>
          <li>
            <a className={classes['main-nav-link']} href='#'>
              Branduri
            </a>
            <div className={classes['main-nav-submenu']}>
              <Menu items={props.brands} />
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
