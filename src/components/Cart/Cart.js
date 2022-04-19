import React, { Fragment } from 'react';
import classes from './Cart.module.css';
import CartDetails from './CartDetails';

const Cart = () => {
  return (
    <Fragment>
      <div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className={classes.cart}
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          stroke-width='2'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
          />
        </svg>
        <div className={classes['main-nav-cart-details']}>
          <CartDetails />
        </div>
      </div>
      <div className={classes.circle}>10</div>
    </Fragment>
  );
};

export default Cart;
