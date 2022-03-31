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
          La o comandă de peste 800 RON livrarea prin Bucuresti este GRATUITĂ.
          La o comandă sub 800 RON, taxa de livrare prin Bucuresti este de 50
          RON. Tarife în restul localităților din Romania: la o comandă de peste
          1000 RON, livrarea este GRATUITĂ. la o comandă sub 1000 RON, taxa de
          livrare este de 90 MDL. Durata livrare: până la 3 zile lucrătoare.
        </p>
      </div>
    </div>
  );
};

export default DeliveryDescription;
