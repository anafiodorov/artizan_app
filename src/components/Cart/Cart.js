import React, { Fragment } from 'react';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const itemsCount = useSelector((state) => state.cart.itemsCount);
  const hasItems = cartItems.length > 0;
  const cartItemsNumber = 0;

  // Another way of counting items
  // const itemCountV2 = cartItems
  //   .map((el) => {
  //     return el.amount;
  //   })
  //   .reduce(
  //     (previousValue, currentValue) => previousValue + currentValue,
  //     cartItemsNumber
  //   );

  console.log(cartItemsNumber);
  return (
    <Fragment>
      <div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className={classes.cart}
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
                <CartItem key={item.id} name={item.name} amount={item.amount} />
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
    </Fragment>
  );
};

export default Cart;
