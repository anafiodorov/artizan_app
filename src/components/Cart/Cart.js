import React, { useState, useEffect, useRef } from 'react';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartLength = useSelector((state) =>
    state.cart.cartItems.reduce((total, item) => item.amount + total, 0)
  );

  console.log(cartLength);
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const itemsCount = useSelector((state) => state.cart.itemsCount);
  const hasItems = cartItems.length > 0;
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const mounted = useRef(false);
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      setBtnIsHighlighted(true);
      const timer = setTimeout(() => {
        setBtnIsHighlighted(false);
      }, 300);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [cartLength]);
  // useEffect(() => {
  //   console.log('cart effect');
  //   if (cartItems.length === 0) {
  //     return;
  //   }
  //   setBtnIsHighlighted(true);
  //   const timer = setTimeout(() => {
  //     setBtnIsHighlighted(false);
  //   }, 300);
  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [cartItems.length]);

  // console.log(cartItems.length);

  const cartClasses = `${classes.cart} ${btnIsHighlighted ? classes.bump : ''}`;

  return (
    <div className={classes.main}>
      <div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className={cartClasses}
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth='2'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
          />
        </svg>
        <div className={classes['main-nav-cart-details']}>
          <div className={classes['cart-details']}>
            <div
              className={classes.amount}
            >{`Subtotal: ${cartTotalAmount} RON`}</div>
            <div>
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  name={item.name}
                  amount={item.amount}
                  image={item.urlProduct}
                  size={item.size}
                />
              ))}
            </div>
            {hasItems && (
              <div className={classes.checkout}>
                <Link to='/checkout'>
                  <button className={classes['button-checkout']}>
                    CHECKOUT
                  </button>
                </Link>
              </div>
            )}

            {hasItems && (
              <div className={classes.viewcart}>
                <Link to='/view-cart'>
                  <button className={classes['button-viewcart']}>
                    View Cart
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={classes.circle}>{itemsCount}</div>
    </div>
  );
};

export default Cart;
