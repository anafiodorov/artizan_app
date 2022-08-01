import React from 'react';

const SizeCheckboxItem = () => {
  return (
    <div className={classes.grid}>
      <input
        name='S32'
        type='checkbox'
        checked={sizesFilter.S32}
        onChange={handleChange}
      />
      <label className={classes['input-text']}>32</label>
    </div>
  );
};

export default SizeCheckboxItem;
