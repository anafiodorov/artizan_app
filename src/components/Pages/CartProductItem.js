import React from 'react';
import classes from './CartProductItem.module.css';
import img from '../../img/dress.jpeg';

const CartProductItem = (props) => {
  return (
    <div>
      <div className={classes['img-title']}>
        <img src={img} alt='Item image' className={classes['item-img']} />
        <div>{`${props.name} - ${props.amount} items`}</div>
      </div>
    </div>
  );
};

export default CartProductItem;
