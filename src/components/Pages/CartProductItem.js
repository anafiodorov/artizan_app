import React from 'react';
import classes from './CartProductItem.module.css';

const CartProductItem = (props) => {
  return (
    <div>
      <div className={classes['img-title']}>
        <img
          src={props.image}
          alt='Item image'
          className={classes['item-img']}
        />
        <div>{`${props.name} - ${props.amount} items`}</div>
      </div>
    </div>
  );
};

export default CartProductItem;
