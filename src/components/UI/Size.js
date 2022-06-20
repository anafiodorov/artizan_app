import classes from './Size.module.css';
import React, { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sizeActions } from '../../store/size';

const Size = () => {
  const dispatch = useDispatch();
  const sizesFilter = useSelector((state) => state.size.size);

  const handleChange = (evt) => {
    dispatch(
      sizeActions.addSize({
        name: evt.target.name,
        value: evt.target.checked,
      })
    );
  };
  return (
    <Fragment>
      <div className={classes.grid}>
        <input
          name='S32'
          type='checkbox'
          checked={sizesFilter.S32}
          onChange={handleChange}
        />
        <label className={classes['input-text']}>32</label>
      </div>
      <div className={classes.grid}>
        <input
          name='S34'
          type='checkbox'
          checked={sizesFilter.S34}
          onChange={handleChange}
        />
        <label className={classes['input-text']}>34</label>
      </div>
      <div className={classes.grid}>
        <input
          name='S36'
          type='checkbox'
          checked={sizesFilter.S36}
          onChange={handleChange}
        />
        <label className={classes['input-text']}>36</label>
      </div>
      <div className={classes.grid}>
        <input
          name='S38'
          type='checkbox'
          checked={sizesFilter.S38}
          onChange={handleChange}
        />
        <label className={classes['input-text']}>38</label>
      </div>
      <div className={classes.grid}>
        <input
          name='S40'
          type='checkbox'
          checked={sizesFilter.S40}
          onChange={handleChange}
        />
        <label className={classes['input-text']}>40</label>
      </div>
      <div className={classes.grid}>
        <input
          name='S42'
          type='checkbox'
          checked={sizesFilter.S42}
          onChange={handleChange}
        />
        <label className={classes['input-text']}>42</label>
      </div>
      <div className={classes.grid}>
        <input
          name='XS'
          type='checkbox'
          checked={sizesFilter.XS}
          onChange={handleChange}
        />
        <label className={classes['input-text']}>XS</label>
      </div>
      <div className={classes.grid}>
        <input
          name='S'
          type='checkbox'
          checked={sizesFilter.S}
          onChange={handleChange}
        />
        <label className={classes['input-text']}>S</label>
      </div>
      <div className={classes.grid}>
        <input
          name='M'
          type='checkbox'
          checked={sizesFilter.M}
          onChange={handleChange}
        />
        <label className={classes['input-text']}>M</label>
      </div>
      <div className={classes.grid}>
        <input
          name='L'
          type='checkbox'
          checked={sizesFilter.L}
          onChange={handleChange}
        />
        <label className={classes['input-text']}>L</label>
      </div>
      <div className={classes.grid}>
        <input
          name='XL'
          type='checkbox'
          checked={sizesFilter.XL}
          onChange={handleChange}
        />
        <label className={classes['input-text']}>XL</label>
      </div>
      <div className={classes.grid}>
        <input
          name='XXL'
          type='checkbox'
          checked={sizesFilter.XXL}
          onChange={handleChange}
        />
        <label className={classes['input-text']}>XXL</label>
      </div>
    </Fragment>
  );
};

export default Size;
