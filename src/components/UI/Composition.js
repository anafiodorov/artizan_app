import * as React from 'react';
import classes from './Size.module.css';
import Checkbox from './Checkbox';

const compositions = [
  '100% bumbac',

  '100% lână',

  '100% poliamidă',

  '100% poliester',

  '50% lână, 50% poliamidă',

  '60% modal, 20% lână, 20% poliamidă',

  '80% lână, 20% poliamidă',
];
const Composition = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div className={classes.main}>
      {compositions.map((el) => {
        return (
          <Checkbox
            key={el}
            label={el}
            value={checked}
            onChange={handleChange}
          />
        );
      })}
    </div>
  );
};

export default Composition;
