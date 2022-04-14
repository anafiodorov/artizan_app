import React from 'react';
import classes from './ColorPicker.module.css';

const ColorPicker = () => {
  return (
    <div className={classes.main}>
      <div className={`${classes.circle} ${classes['color-red']}`}></div>
      <div className={`${classes.circle} ${classes['color-green']}`}></div>
      <div className={`${classes.circle} ${classes['color-white']}`}></div>
      <div className={`${classes.circle} ${classes['color-black']}`}></div>
      <div className={`${classes.circle} ${classes['color-blue']}`}></div>
      <div className={`${classes.circle} ${classes['color-yellow']}`}></div>
      <div className={`${classes.circle} ${classes['color-pink']}`}></div>
      <div className={`${classes.circle} ${classes['color-orange']}`}></div>
      <div className={`${classes.circle} ${classes['color-brown']}`}></div>
      <div className={`${classes.circle} ${classes['color-violet']}`}></div>
      <div className={`${classes.circle} ${classes['color-grey']}`}></div>
      <div className={`${classes.circle} ${classes['color-turquoise']}`}></div>
    </div>
  );
};

export default ColorPicker;
