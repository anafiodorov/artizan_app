import React, { Fragment } from 'react';
import Footer from '../Layout/Footer';
import Header from '../Layout/Header';
import { useSelector } from 'react-redux';
import CartProductItem from './CartProductItem';
import classes from './ViewCart.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart';

const ViewCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const hasItems = cartItems.length > 0;
  const removeItemHandler = (item) => {
    dispatch(
      cartActions.removeItem({
        id: item.id,
        name: item.name,
        amount: 1,
        price: item.price,
        urlProduct: item.urlProduct,
        size: item.size,
      })
    );
  };
  const addItemHandler = (item) => {
    dispatch(
      cartActions.addToCart({
        id: item.id,
        name: item.name,
        amount: 1,
        urlProduct: item.urlProduct,
        price: item.price,
        size: item.size,
      })
    );
  };
  return (
    <div>
      <Header />
      <div className={classes.grid}>
        <div>
          <div>
            {cartItems.map((item) => (
              <div className={classes['product-item']}>
                <div className={classes.remove}>
                  <button
                    onClick={removeItemHandler.bind(null, item)}
                    className={`${classes.btn} ${classes['btn--up']}`}
                  >
                    <div>-</div>
                  </button>
                  <button
                    onClick={addItemHandler.bind(null, item)}
                    className={`${classes.btn}`}
                  >
                    <div>+</div>
                  </button>
                </div>

                <div>
                  <CartProductItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    image={item.urlProduct}
                    size={item.size}
                  />
                </div>
              </div>
            ))}
          </div>
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
