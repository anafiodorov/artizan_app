import React, { Fragment } from 'react';
import classes from './Search.module.css';

const Search = () => {
  return (
    <Fragment>
      <div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className={classes.search}
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          stroke-width='2'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
          />
        </svg>
      </div>
    </Fragment>
  );
};

export default Search;
