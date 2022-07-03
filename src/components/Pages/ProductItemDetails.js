import React, { useState, useEffect } from 'react';
import Header from '../Layout/Header';
import dress from '../../img/dress.jpeg';
import dress1 from '../../img/dress1.jpeg';
import dress3 from '../../img/dress3.jpeg';
import dress4 from '../../img/dress4.jpeg';
import classes from './ProductItemDetails.module.css';
import Footer from '../Layout/Footer';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart';
import { productsActions } from '../../store/products';
import { ref, getDownloadURL } from 'firebase/storage';
import storage from '../../firebaseConfig';

const ProductItemDetails = () => {
  const [urlProduct, setUrlProduct] = useState('');
  const dispatch = useDispatch();
  const [size, setSize] = useState('');
  const [sizeIsClicked, setSizeIsClicked] = useState({
    34: false,
    36: false,
    38: false,
    40: false,
  });

  console.log(size);

  const { search } = useLocation();

  const productId = new URLSearchParams(search).get('productId');
  const productUrlRef = ref(storage, productId + '.jpeg');
  const products = useSelector((state) => state.products.products);

  console.log(products);

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
    console.log('Effect');
    const fetchData = async () => {
      let url = `${process.env.REACT_APP_SERVER_URL}/products`;
      const items = await fetch(url);
      const products = await items.json();
      dispatch(productsActions.addProducts(products));
    };
    if (products.length == 0) {
      console.log('IF');

      fetchData();
    }
    getPicturesFirebase(productUrlRef, setUrlProduct);
  }, []);

  console.log(products);

  const item = products.find((item) => {
    return item.id == productId;
  });

  const handleChange = (event) => {
    setSize(event.target.value);

    setSizeIsClicked({
      [event.target.value]: true,
    });
  };

  const onClick = () => {
    dispatch(
      cartActions.addToCart({
        id: item.id,
        name: item.name,
        amount: 1,
        price: item.price,
        size: size,
        urlProduct: urlProduct,
      })
    );
  };

  console.log(size);
  return (
    <div>
      <Header />
      <div className={classes.grid}>
        <div className={classes['left-images']}>
          <img
            className={classes['img-multiple']}
            src={dress1}
            alt='Photo of dress'
          />
          <img
            className={classes['img-multiple']}
            src={dress}
            alt='Photo of dress'
          />
          <img
            className={classes['img-multiple']}
            src={dress3}
            alt='Photo of dress'
          />
          <img
            className={classes['img-multiple']}
            src={dress4}
            alt='Photo of dress'
          />
          <img
            className={classes['img-multiple']}
            src={dress1}
            alt='Photo of dress'
          />
        </div>
        <div className={classes['central-div']}>
          <img
            className={classes['central-img']}
            src={dress}
            alt='Photo of dress'
          />
        </div>
        <div className={classes['right-div']}>
          <div className={classes.title}>
            {
              products.find((item) => {
                return item.id == productId;
              })?.name
            }
          </div>
          <div className={classes.price}>{`${
            products.find((item) => {
              return item.id == productId;
            })?.price
          } RON`}</div>
          <div className={classes.description}>
            HALTER-NECK CUT-OUT MIDI DRESS WITH GOLD-TONED RING AT WAIST.
          </div>
          <p className={classes.details}>Details</p>
          <ul className={classes['details-list']}>
            <li>Green raw silk (100% silk)</li>
            <li>Lined bodice (100% silk), unlined skirt</li>
            <li>Halter-neck tie fastening</li>
            <li>Open back</li>
            <li>Leg-barring slits (front and back )</li>
            <li>Mid-calf length</li>
            <li>Fits true to size, take your normal size</li>
          </ul>
          <div className={classes['size-div']}>SIZE</div>
          <ul className={classes.sizes}>
            {products
              .find((item) => {
                return item.id == productId;
              })
              ?.sizes.map((s) => {
                return (
                  <li
                    className={
                      sizeIsClicked[s]
                        ? `${classes.size} ${classes['size-checked']}`
                        : classes.size
                    }
                    value={`${s}`}
                    onClick={handleChange}
                  >
                    {s}
                  </li>
                );
              })}

            {/* <li
              className={
                sizeIsClicked[36]
                  ? `${classes.size} ${classes['size-checked']}`
                  : classes.size
              }
              value='36'
              onClick={handleChange}
            >
              36
            </li>
            <li
              className={
                sizeIsClicked[38]
                  ? `${classes.size} ${classes['size-checked']}`
                  : classes.size
              }
              value='38'
              onClick={handleChange}
            >
              38
            </li>
            <li
              className={
                sizeIsClicked[40]
                  ? `${classes.size} ${classes['size-checked']}`
                  : classes.size
              }
              value='40'
              onClick={handleChange}
            >
              40
            </li> */}
          </ul>
          <button
            onClick={onClick}
            className={
              size === ''
                ? `${classes.button} ${classes['no-drop']}`
                : classes.button
            }
          >
            Add To Cart
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductItemDetails;
