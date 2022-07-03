import React from 'react';
import oldMen from '../../img/oldMen.jpeg';
import classes from './Description.module.css';
import generalStyles from '../../styles/general.module.css';

const Description = () => {
  return (
    <section
      className={`${generalStyles['background-color']} ${classes['section-description']}`}
    >
      <div className={classes['description']}>
        <div className={classes['description-text-box']}>
          <h1 className={classes['heading-primary']}>
            Atrizan, un loc unde se adună creatorii de produse locale unice și
            autentice.
          </h1>
          <br />
          <p className={classes['main-description']}>
            Interesul pentru produse locale contribuie la încurajarea
            producătorilor locali, fiind expresia clară a recunoaşterii
            calităţii şi a modelelor de producţie responsabile şi sustenabile.
            Dezvoltarea consumului local poate genera un impact pozitiv în
            comunitate, prin crearea locurilor noi de munca, protejarea mediului
            înconjurător și prin păstrarea valorii în interiorul comunității.
          </p>
        </div>
        <div>
          <img
            src={oldMen}
            alt='Crafts image'
            className={classes['crafts-img']}
          />
        </div>
      </div>
    </section>
  );
};

export default Description;
