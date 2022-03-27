import React, { useState } from 'react';
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
      <div className={classes.title}>Artizan</div>
      <nav className={classes['main-nav']}>
        <ul className={classes['main-nav-list']}>
          <li>
            <a className={classes['main-nav-link']} href='#'>
              Acasa
            </a>
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
            <a className={classes['main-nav-link']} href='#'>
              Livrari
            </a>
          </li>
          <li>
            <a className={classes['main-nav-link']} href='#'>
              Reduceri
            </a>
          </li>
        </ul>
      </nav>
      <div>
        <Button>Login</Button>
      </div>
      <div className={classes.align}>
        <Button>SignIn</Button>
      </div>
    </div>
  );
};

export default Header;
