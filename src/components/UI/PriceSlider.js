import React from 'react';
import classes from './PriceSlider.module.css';
import Slider from '@material-ui/core/Slider';
import { useDispatch } from 'react-redux';
import { priceActions } from '../../store/priceSlider';

const PriceSlider = () => {
  const dispatch = useDispatch();

  const valuetext = (value) => {
    dispatch(priceActions.addPrice(value));
    console.log(value);
  };

  return (
    <div className={classes['slider-div']}>
      <Slider
        defaultValue={1000}
        getAriaValueText={valuetext}
        aria-labelledby='discrete-slider-always'
        step={10}
        valueLabelDisplay='on'
        min={0}
        max={1000}
        style={{ color: 'black' }}
      />
    </div>
  );
};

export default PriceSlider;
