import React from 'react';
import classes from './CartItem.module.css';
import img from '../../img/dress.jpeg';

const CartItem = (props) => {
  let itemOrItems;
  if (props.amount > 1) {
    itemOrItems = 'items';
  } else {
    itemOrItems = 'item';
  }

  let hasSize;

  if (props.size === undefined) {
    hasSize = false;
  } else {
    hasSize = true;
  }

  return (
    <div>
      <div className={classes['img-title']}>
        <img
          src={props.image}
          alt='Item image'
          className={classes['item-img']}
        />
        <div>
          <div>{`${props.name} - ${props.amount} ${itemOrItems}`}</div>
          {hasSize && <div>{`size - ${props.size}`}</div>}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
