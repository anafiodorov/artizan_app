import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sizeActions } from '../../../store/size';
import SizeCheckboxItem from './SizeCheckboxItem';

const Size = () => {
  const dispatch = useDispatch();
  const sizesFilter = useSelector((state) => state.size.size);
  const [sizeFromDb, setSizeFromDb] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let url = `${process.env.REACT_APP_SERVER_URL}/size`;
      const sizeFromDb = await fetch(url);
      const sizeDb = await sizeFromDb.json();
      setSizeFromDb(sizeDb);
      console.log('sizes' + JSON.stringify(sizeDb));
    };
    fetchData();
  }, []);

  const handleChange = (evt) => {
    dispatch(
      sizeActions.addSize({
        name: evt.target.name,
        value: evt.target.checked,
      })
    );
  };
  const sizesFromDB = sizeFromDb.map((size) => (
    <SizeCheckboxItem
      name={size.name}
      checked={sizesFilter[size.name]}
      onChange={handleChange}
    />
  ));
  return <Fragment>{sizesFromDB}</Fragment>;
};

export default Size;
