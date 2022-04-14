import React from 'react';
import classes from './Arrow.module.css';
const Arrow = (props) => {
  return (
    <svg
      onClick={props.onClick}
      xmlns='http://www.w3.org/2000/svg'
      className={classes.icon}
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M19 9l-7 7-7-7'
      />
    </svg>
  );
};

export default Arrow;
