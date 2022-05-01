import React from 'react';
import classes from './Menu.module.css';
import MenuItem from './MenuItem';

const Menu = (props) => {
  const itemsList = props.items.map((item) => (
    <MenuItem
      key={item.id}
      name={item.name}
      filter={item.type}
      alias={item.alias}
    />
  ));

  return (
    <div>
      <div className={classes.menu}>{itemsList}</div>
    </div>
  );
};

export default Menu;
