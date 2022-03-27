import React from 'react';
import classes from './MenuItem.module.css';

const MenuItem = (props) => {
  return (
    <a className={classes.item} href='#'>
      <div>
        <h3>{props.name}</h3>
      </div>
    </a>
  );
};

export default MenuItem;
