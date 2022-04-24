import React from 'react';
import dress from '../../img/dress.jpeg';
import classes from './ProductItem.module.css';

const ProductItem = (props) => {
  return (
    <div>
      <figure className={classes['gallery-item']}>
        <img src={dress} alt='Photo of beautifully arranged food' />
        <div className={classes['gallery-title']}>{props.name}</div>
        <div className={classes['gallery-price']}>{props.price + ' RON'}</div>
        <button onClick={props.onAdd}>Add to card</button>
      </figure>
    </div>
  );
};

export default ProductItem;
