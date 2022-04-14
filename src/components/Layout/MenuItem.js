import classes from './MenuItem.module.css';
import React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = (props) => {
  return (
    <a className={classes.item} href='#'>
      <div>
        <Link to={`/products/${props.name}`}>{props.name}</Link>
      </div>
    </a>
  );
};

export default MenuItem;
