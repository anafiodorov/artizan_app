import React from 'react';
import classes from './DeliveryDescription.module.css';

const DeliveryDescription = () => {
  return (
    <div className={classes['delivery-description']}>
      <div className={classes['delivery-description-text-box']}>
        <h1 className={classes['delivery-heading-primary']}>
          Tarife și termeni de livrare in Romania:
        </h1>
        <br />
        <p className={classes['main-description']}>
          La o comandă de peste 300 RON livrarea prin București este GRATUITĂ.
          La o comandă sub 300 RON, taxa de livrare prin București este de 20
          RON. Tarifele în restul localităților din România: la o comandă de
          peste 500 RON, livrarea este GRATUITĂ. la o comandă sub 500 RON, taxa
          de livrare este de 30 RON. Durata livrare: până la 3 zile lucrătoare.
        </p>
      </div>
    </div>
  );
};

export default DeliveryDescription;
