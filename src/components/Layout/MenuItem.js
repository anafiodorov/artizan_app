import classes from './MenuItem.module.css';
import React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = (props) => {
  let name = '';

  console.log('Filter ' + props.filter);
  if (props.filter == 'brand') {
    name = props.alias;
  } else {
    name = props.name;
  }
  console.log(name);
  return (
    <div className={classes.item}>
      <Link className={classes.link} to={`/products?${props.filter}=${name}`}>
        {props.name}
      </Link>
    </div>
  );
};

export default MenuItem;
