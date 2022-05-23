import classes from './Size.module.css';
import React, { Fragment, useState } from 'react';

const Composition = () => {
  const [isChecked, setChecked] = useState({
    bumbac: false,
    lana: false,
    poliamida: false,
    poliester: false,
    lana_poliamida: false,
    modal_lana_poliamida: false,
    lana_poliamida: false,
  });

  console.log(isChecked);

  const handleChange = (evt) => {
    setChecked({
      ...isChecked,
      [evt.target.name]: evt.target.checked,
    });
  };

  return (
    <Fragment>
      <div className={classes.grid}>
        <input
          name='bumbac'
          type='checkbox'
          checked={isChecked.bumbac}
          onChange={handleChange}
        />
        <label className={classes['input-text']}>100% bumbac</label>
      </div>
      <div className={classes.grid}>
        <input
          name='lana'
          type='checkbox'
          checked={isChecked.lana}
          onChange={handleChange}
        />
        <label className={classes['input-text']}>100% lână</label>
      </div>
      <div className={classes.grid}>
        <input
          name='poliamida'
          type='checkbox'
          checked={isChecked.poliamida}
          onChange={handleChange}
        />
        <label className={classes['input-text']}>100% poliamidă</label>
      </div>
      <div className={classes.grid}>
        <input
          name='poliester'
          type='checkbox'
          checked={isChecked.poliester}
          onChange={handleChange}
        />
        <label className={classes['input-text']}>100% poliester</label>
      </div>
      <div className={classes.grid}>
        <input
          name='lana_poliamida'
          type='checkbox'
          checked={isChecked.lana_poliamida}
          onChange={handleChange}
        />
        <label className={classes['input-text']}>50% lână, 50% poliamidă</label>
      </div>
      <div className={classes.grid}>
        <input
          name='modal_lana_poliamida'
          type='checkbox'
          checked={isChecked.modal_lana_poliamida}
          onChange={handleChange}
        />
        <label className={classes['input-text']}>
          60% modal, 20% lână, 20% poliamidă
        </label>
      </div>
      <div className={classes.grid}>
        <input
          name='lana_poliamida'
          type='checkbox'
          checked={isChecked.lana_poliamida}
          onChange={handleChange}
        />
        <label className={classes['input-text']}>80% lână, 20% poliamidă</label>
      </div>
    </Fragment>
  );
};

export default Composition;
