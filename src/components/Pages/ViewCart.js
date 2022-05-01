import React from 'react';
import Footer from '../Layout/Footer';
import Header from '../Layout/Header';
import { useSelector } from 'react-redux';
import CartProductItem from './CartProductItem';
import classes from './ViewCart.module.css';
import { Link } from 'react-router-dom';

const ViewCart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const hasItems = cartItems.length > 0;
  return (
    <div>
      <Header />
      <div className={classes.grid}>
        <div>
          {cartItems.map((item) => (
            <CartProductItem
              key={item.id}
              name={item.name}
              amount={item.amount}
            />
          ))}
        </div>
        <div className={classes['cart-totals']}>
          <div className={classes['cart-totals-fixed']}>
            <div className={classes.total}>Cart totals</div>
            <div>
              {hasItems
                ? `Subtotal: ${
                    cartTotalAmount - 15 - cartTotalAmount * 0.19
                  } RON`
                : `Subtotal: 0 RON`}
            </div>
            <div>{hasItems ? `Shipping : 15 RON` : `Shipping : 0 RON`}</div>
            <div>{`TVA(for Romania): ${cartTotalAmount * 0.19} RON`} </div>
            <div>{`Total : ${cartTotalAmount} RON`}</div>
          </div>
          <Link to='/checkout'>
            <button className={classes.button}>Proceed to checkout</button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ViewCart;
