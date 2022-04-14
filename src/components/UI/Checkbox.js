import React from 'react';
import classes from './Checkbox.module.css';

const Checkbox = ({ label, value, onChange }) => {
  return (
    <div className={classes.main}>
      <input type='checkbox' checked={value} onChange={onChange} />
      <label className={classes['input-text']}>{label}</label>
    </div>
  );
};

export default Checkbox;
