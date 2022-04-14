import * as React from 'react';
import classes from './Size.module.css';
import Checkbox from './Checkbox';

const sizes = [32, 34, 36, 38, 40, 42, 'XS', 'S', 'M', 'L', 'XL', 'XXL'];
const Size = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div className={classes.main}>
      {sizes.map((el) => {
        return <Checkbox label={el} value={checked} onChange={handleChange} />;
      })}
    </div>
  );
};

export default Size;
