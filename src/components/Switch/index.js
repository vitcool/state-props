/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.scss';

const Switch = ({ isDisabled, onToggle, id }) => {
  return (
    <div className={styles.wrapper}>
      <input
        checked={isDisabled}
        onChange={onToggle}
        className={styles.reactSwitchCheckbox}
        id={id}
        type="checkbox"
      />
      <label
        className={`${styles.reactSwitchLabel} ${
          isDisabled ? styles.isNotSelected : null
        }`}
        htmlFor={id}
      >
        <span className={styles.reactSwitchButton} />
      </label>
    </div>
  );
};

Switch.defaultProps = {
  isDisabled: false,
  onToggle: () => {},
  id: 'switch',
};

Switch.propTypes = {
  isDisabled: PropTypes.bool,
  onToggle: PropTypes.func,
  id: PropTypes.string,
};

export default Switch;
