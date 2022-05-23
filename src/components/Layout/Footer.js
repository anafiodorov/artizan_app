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
          <div className={classes['footer-heading']}>Contacteaza-ne</div>
          <address className={classes['contacts']}>
            <div className={classes['address']}>+40721749559</div>
            <div>
              <div
                className={classes['footer-link']}
                href='mailto:hello@omnifood.com'
              >
                hello@artizan.com
              </div>
            </div>
          </address>
        </div>
        <nav className={classes['nav-col']}>
          <div className={classes['footer-heading']}>Cont</div>
          <ul className={classes['footer-nav']}>
            <li>
              <div className={classes['footer-link']} href='#'>
                Creaza cont
              </div>
            </li>
            <li>
              <div className={classes['footer-link']} href='#'>
                Sign in
              </div>
            </li>
          </ul>
        </nav>
        <nav className={classes['nav-col']}>
          <div className={classes['footer-heading']}>Companie</div>
          <ul className={classes['footer-nav']}>
            <li>
              <div className={classes['footer-link']} href='#'>
                Despre Artizan
              </div>
            </li>
            <li>
              <div className={classes['footer-link']} href='#'>
                Pentru Colaborari
              </div>
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
