import classes from './Size.module.css';
import React, { Fragment, useState } from 'react';

const Size = () => {
  const [isChecked, setChecked] = useState({
    S32: false,
    S34: false,
    S36: false,
    S38: false,
    S40: false,
    S42: false,
    XS: false,
    S: false,
    M: false,
    L: false,
    XL: false,
    XXL: false,
  });

  console.log(isChecked);

  const handleChange = (evt) => {
    setChecked({
      ...isChecked,
      [evt.target.name]: evt.target.checked,
    });
  };
  return (
    <Fragment>
      <div className={classes.grid}>
        <input
          name='S32'
          type='checkbox'
          checked={isChecked.S32}
          onChange={handleChange}
        />
        <label className={classes['input-text']}>32</label>
      </div>
      <div className={classes.grid}>
        <input
          name='S34'
          type='checkbox'
          checked={isChecked.S34}
          onChange={handleChange}
        />
        <label className={classes['input-text']}>34</label>
      </div>
      <div className={classes.grid}>
        <input
          name='S36'
          type='checkbox'
          checked={isChecked.S36}
          onChange={handleChange}
        />
        <label className={classes['input-text']}>36</label>
      </div>
      <div className={classes.grid}>
        <input
          name='S38'
          type='checkbox'
          checked={isChecked.S38}
          onChange={handleChange}
        />
        <label className={classes['input-text']}>38</label>
      </div>
      <div className={classes.grid}>
        <input
          name='S40'
          type='checkbox'
          checked={isChecked.S40}
          onChange={handleChange}
        />
        <label className={classes['input-text']}>40</label>
      </div>
      <div className={classes.grid}>
        <input
          name='S42'
          type='checkbox'
          checked={isChecked.S42}
          onChange={handleChange}
        />
        <label className={classes['input-text']}>42</label>
      </div>
      <div className={classes.grid}>
        <input
          name='XS'
          type='checkbox'
          checked={isChecked.XS}
          onChange={handleChange}
        />
        <label className={classes['input-text']}>XS</label>
      </div>
      <div className={classes.grid}>
        <input
          name='S'
          type='checkbox'
          checked={isChecked.S}
          onChange={handleChange}
        />
        <label className={classes['input-text']}>S</label>
      </div>
      <div className={classes.grid}>
        <input
          name='M'
          type='checkbox'
          checked={isChecked.M}
          onChange={handleChange}
        />
        <label className={classes['input-text']}>M</label>
      </div>
      <div className={classes.grid}>
        <input
          name='L'
          type='checkbox'
          checked={isChecked.L}
          onChange={handleChange}
        />
        <label className={classes['input-text']}>L</label>
      </div>
      <div className={classes.grid}>
        <input
          name='XL'
          type='checkbox'
          checked={isChecked.XL}
          onChange={handleChange}
        />
        <label className={classes['input-text']}>XL</label>
      </div>
      <div className={classes.grid}>
        <input
          name='XXL'
          type='checkbox'
          checked={isChecked.XXL}
          onChange={handleChange}
        />
        <label className={classes['input-text']}>XXL</label>
      </div>
    </Fragment>
  );
};

export default Size;
