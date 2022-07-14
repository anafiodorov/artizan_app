import React from 'react';
import classes from './Footer.module.css';
import generalStyles from '../../styles/general.module.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={generalStyles['background-color']}>
      <div
        className={`${classes.container} ${classes.grid} ${classes['grid--footer']}`}
      >
        <div className={classes['address-col']}>
          <div className={classes.contact}>Contactează-ne</div>
          <div className={classes.phone}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              class='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              stroke-width='2'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
              />
            </svg>
          </div>
          <div className={classes['phone-nr']}>+40721749559</div>
          <div className={classes.email}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              class='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              stroke-width='2'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
              />
            </svg>
          </div>
          <div>
            <a
              className={classes['footer-link']}
              href='mailto:ana.fiodorov93@gmail.com'
            >
              artizan@gmail.com
            </a>
          </div>
        </div>
        <p className={classes.copyright}>
          Copyright by Artizan &copy; {year} , Inc. All rights reverved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
