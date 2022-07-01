import React, { useState, useEffect } from 'react';
import { ref, getDownloadURL } from 'firebase/storage';
import storage from '../../firebaseConfig';

const Test = () => {
  const product1 = ref(storage, '1.jpeg');
  const product2 = ref(storage, '2.jpeg');
  const product3 = ref(storage, '3.jpeg');
  const product4 = ref(storage, '4.jpeg');
  const product5 = ref(storage, '5.jpeg');
  const product6 = ref(storage, '6.jpeg');
  const product7 = ref(storage, '7.jpeg');
  const product8 = ref(storage, '8.jpeg');
  const product9 = ref(storage, '9.jpeg');
  const product10 = ref(storage, '10.jpeg');
  const product11 = ref(storage, '11.jpeg');
  const product12 = ref(storage, '12.jpeg');
  const product13 = ref(storage, '13.jpeg');

  const [urlProduct1, setUrlProduct1] = useState('');
  const [urlProduct2, setUrlProduct2] = useState('');
  const [urlProduct3, setUrlProduct3] = useState('');
  const [urlProduct4, setUrlProduct4] = useState('');
  const [urlProduct5, setUrlProduct5] = useState('');
  const [urlProduct6, setUrlProduct6] = useState('');
  const [urlProduct7, setUrlProduct7] = useState('');
  const [urlProduct8, setUrlProduct8] = useState('');
  const [urlProduct9, setUrlProduct9] = useState('');
  const [urlProduct10, setUrlProduct10] = useState('');
  const [urlProduct11, setUrlProduct11] = useState('');
  const [urlProduct12, setUrlProduct12] = useState('');
  const [urlProduct13, setUrlProduct13] = useState('');

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
    getPicturesFirebase(product1, setUrlProduct1);
    getPicturesFirebase(product2, setUrlProduct2);
    getPicturesFirebase(product3, setUrlProduct3);
    getPicturesFirebase(product4, setUrlProduct4);
    getPicturesFirebase(product5, setUrlProduct5);
    getPicturesFirebase(product6, setUrlProduct6);
    getPicturesFirebase(product7, setUrlProduct7);
    getPicturesFirebase(product8, setUrlProduct8);
    getPicturesFirebase(product9, setUrlProduct9);
    getPicturesFirebase(product10, setUrlProduct10);
    getPicturesFirebase(product11, setUrlProduct11);
    getPicturesFirebase(product12, setUrlProduct12);
    getPicturesFirebase(product13, setUrlProduct13);
  }, []);

  return (
    <div>
      <p>hello</p>
      <img src={urlProduct1} alt='Item image' />
      <img src={urlProduct2} alt='Item image' />
      <img src={urlProduct3} alt='Item image' />
      <img src={urlProduct4} alt='Item image' />
      <img src={urlProduct5} alt='Item image' />
      <img src={urlProduct6} alt='Item image' />
      <img src={urlProduct7} alt='Item image' />
      <img src={urlProduct8} alt='Item image' />
      <img src={urlProduct9} alt='Item image' />
      <img src={urlProduct10} alt='Item image' />
      <img src={urlProduct11} alt='Item image' />
      <img src={urlProduct12} alt='Item image' />
      <img src={urlProduct13} alt='Item image' />
    </div>
  );
};

export default Test;
