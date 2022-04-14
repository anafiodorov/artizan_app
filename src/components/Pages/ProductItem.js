import React from 'react';
import dishes1 from '../../img/dishes6.jpeg';
import classes from './ProductItem.module.css';

const ProductItem = (props) => {
  return (
    <div>
      <figure className={classes['gallery-item']}>
        <img src={dishes1} alt='Photo of beautifully arranged food' />
        <div className={classes['gallery-title']}>{props.name}</div>
        <div className={classes['gallery-price']}>{props.price + ' RON'}</div>
        <button>Add to card</button>
      </figure>
    </div>
  );
};

export default ProductItem;
