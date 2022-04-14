import React, { useState } from 'react';
import classes from './PriceSlider.module.css';
import Slider from '@material-ui/core/Slider';

const PriceSlider = () => {
  const [sliderValue, setSliderValue] = useState('');

  const valuetext = (value) => {
    return setSliderValue(value);
  };

  return (
    <div className={classes['slider-div']}>
      <Slider
        defaultValue={0}
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
