import React from 'react';
import { Link } from 'react-router-dom';
import dress from '../../img/dress.jpeg';
import classes from './ProductItem.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart';

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const category = props.category;

  const cartItemAddHandler = (item) => {
    dispatch(
      cartActions.addToCart({
        id: item.id,
        name: item.name,
        amount: 1,
        price: item.price,
      })
    );
    console.log(item);
  };
  return (
    <div>
      {props.item.sizes.length !== 0 ? (
        <Link
          className={classes.link}
          to={`/product-item-details?productId=${props.item.id}`}
        >
          <figure className={classes['gallery-item']}>
            <img src={dress} alt='Photo of beautifully arranged food' />
            <div className={classes['gallery-title']}>{props.item.name}</div>
            <div className={classes['gallery-price']}>
              {props.item.price + ' RON'}
            </div>
            <button>Add to cart</button>
          </figure>
        </Link>
      ) : (
        <figure className={classes['gallery-item']}>
          <img src={dress} alt='Photo of beautifully arranged food' />
          <div className={classes['gallery-title']}>{props.item.name}</div>
          <div className={classes['gallery-price']}>
            {props.item.price + ' RON'}
          </div>
          <button onClick={cartItemAddHandler.bind(null, props.item)}>
            Add to cart
          </button>
        </figure>
      )}
    </div>
  );
};

export default ProductItem;
