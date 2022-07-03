import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import dress from '../../img/dress.jpeg';
import classes from './ProductItem.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart';
import { ref, getDownloadURL } from 'firebase/storage';
import storage from '../../firebaseConfig';

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const category = props.category;
  const productUrlRef = ref(storage, props.item.id + '.jpeg');
  const [urlProduct, setUrlProduct] = useState('');

  const getPicturesFirebase = (pictureRef, setUrl) => {
    getDownloadURL(pictureRef)
      .then((url) => {
        setUrl(url);
      })
      .catch((error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case 'storage/object-not-found':
            // File doesn't exist
            break;
          case 'storage/unauthorized':
            // User doesn't have permission to access the object
            break;
          case 'storage/canceled':
            // User canceled the upload
            break;
          // ...
          case 'storage/unknown':
            // Unknown error occurred, inspect the server response
            break;
        }
      });
  };

  useEffect(() => {
    getPicturesFirebase(productUrlRef, setUrlProduct);
  }, []);

  const cartItemAddHandler = (item) => {
    dispatch(
      cartActions.addToCart({
        id: item.id,
        name: item.name,
        amount: 1,
        price: item.price,
        urlProduct: urlProduct,
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
            <img src={urlProduct} alt='Photo of beautifully arranged food' />
            <div className={classes['gallery-title']}>{props.item.name}</div>
            <div className={classes['gallery-price']}>
              {props.item.price + ' RON'}
            </div>
            <button>Add to cart</button>
          </figure>
        </Link>
      ) : (
        <figure className={classes['gallery-item']}>
          <img src={urlProduct} alt='Photo of beautifully arranged food' />
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
