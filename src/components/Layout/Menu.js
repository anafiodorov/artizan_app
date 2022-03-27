import React from 'react';
import classes from './Menu.module.css';
import MenuItem from './MenuItem';

const Menu = (props) => {
  const itemsList = props.items.map((item) => (
    <MenuItem key={item.id} name={item.name} />
  ));

  return (
    <div>
      <div className={classes.menu}>{itemsList}</div>
    </div>
  );
};

export default Menu;
