import React from 'react';
import classes from './SizeCheckbox.module.css';

const SizeCheckboxItem = (props) => {
  return (
    <div className={classes.grid}>
      <input
        name={props.name}
        type='checkbox'
        checked={props.checked}
        onChange={props.onChange}
      />
      <label className={classes['input-text']}>{props.name}</label>
    </div>
  );
};

export default SizeCheckboxItem;
