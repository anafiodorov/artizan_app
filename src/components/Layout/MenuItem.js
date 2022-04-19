import classes from './MenuItem.module.css';
import React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = (props) => {
  return (
    <div className={classes.item}>
      <Link className={classes.link} to={`/products/${props.name}`}>
        {props.name}
      </Link>
    </div>
  );
};

export default MenuItem;
