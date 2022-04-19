import React from 'react';
import classes from './CartDetails.module.css';
import img from '../../img/brushes.jpeg';
import Button from '../UI/Button';

const CartDetails = (props) => {
  return (
    <div>
      <div className={classes['cart-details']}>
        <div className={classes.amount}>Subtotal: 1500 RON</div>
        <div className={classes['img-title']}>
          <img src={img} alt='Item image' className={classes['item-img']} />
          <div>Rochie evazata - size 36</div>
        </div>
        <div className={classes['img-title']}>
          <img src={img} alt='Item image' className={classes['item-img']} />
          <div>Rochie evazata - size 36</div>
        </div>
        <div className={classes['img-title']}>
          <img src={img} alt='Item image' className={classes['item-img']} />
          <div>Rochie evazata - size 36</div>
        </div>
        <div className={classes['img-title']}>
          <img src={img} alt='Item image' className={classes['item-img']} />
          <div>Rochie evazata - size 36</div>
        </div>
        <div className={classes['img-title']}>
          <img src={img} alt='Item image' className={classes['item-img']} />
          <div>Rochie evazata - size 36</div>
        </div>
        <div className={classes['checkout-viewcart']}>
          <Button>CHECKOUT</Button>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
