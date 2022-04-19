import React from 'react';
import classes from './Footer.module.css';
import generalStyles from '../../styles/general.module.css';
const Footer = () => {
  return (
    <footer className={generalStyles['background-color']}>
      <div
        className={`${classes.container} ${classes.grid} ${classes['grid--footer']}`}
      >
        <div className={classes['address-col']}>
          <p className={classes['footer-heading']}>Contacteaza-ne</p>
          <address className={classes['contacts']}>
            <p className={classes['address']}>+40721749559</p>
            <p>
              <a
                className={classes['footer-link']}
                href='mailto:hello@omnifood.com'
              >
                hello@artizan.com
              </a>
            </p>
          </address>
        </div>
        <nav className={classes['nav-col']}>
          <p className={classes['footer-heading']}>Cont</p>
          <ul className={classes['footer-nav']}>
            <li>
              <a className={classes['footer-link']} href='#'>
                Creaza cont
              </a>
            </li>
            <li>
              <a className={classes['footer-link']} href='#'>
                Sign in
              </a>
            </li>
          </ul>
        </nav>
        <nav className={classes['nav-col']}>
          <p className={classes['footer-heading']}>Companie</p>
          <ul className={classes['footer-nav']}>
            <li>
              <a className={classes['footer-link']} href='#'>
                Despre Artizan
              </a>
            </li>
            <li>
              <a className={classes['footer-link']} href='#'>
                Pentru Colaborari
              </a>
            </li>
          </ul>
        </nav>
        <div className={classes.copyrightparent}>
          <p className={classes.copyright}>
            Copyright &copy; 2027 by Artizan, Inc. All rights reverved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
