import React from 'react';

import styles from './ScalePicker.module.scss';

function ScalePicker(props) {
    const {
        scaleValue,
        id,
        label,
        scalelimit,
        changeScale
    } = props;

    const clamp = (min, max, value) => Math.min(Math.max(value, min), max);
    const handleChange = (event) => {
      const level = parseInt(event.target.value, 10);

      changeScale(clamp(
        -2+scalelimit-(scalelimit>=0),
          2+scalelimit+(scalelimit<=0),
          level
      ));
    };

    const handleIncrease = (event) => {
      changeScale(clamp(
        -2+scalelimit-(scalelimit>=0), 
          2+scalelimit+(scalelimit<=0), 
          scaleValue + 1
      ));
    };

    const handleDecrease = (event) => {
      changeScale(clamp(
        -2+scalelimit-(scalelimit>=0), 
          2+scalelimit+(scalelimit<=0), 
          scaleValue - 1
      ));
    };

    return (

	      <div className={styles.picker_scale}>
	        <label className={styles.label_scale}
		             htmlFor={id}>
	          {label}
	        </label>
	        <input type="number" name={label} onChange={handleChange}
		             min={String(-2+scalelimit-(scalelimit>=0))} max={String(2+scalelimit+(scalelimit<=0))} value={scaleValue} id={id}
		             className={styles.input_scale} />
          <button
	          type="button"
            onClick={handleIncrease}
            className={styles.button}>
            +1
	        </button>
          <button
	          type="button"
            onClick={handleDecrease}
            className={styles.button}>
            -1
	        </button>
	      </div>
    );
}

export default ScalePicker;
