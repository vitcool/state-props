import React from 'react';

import styles from './index.module.scss';
import SwitchRow from '../SwitchRow';

const EatNowForm = () => {
  return (
    <div className={styles.formWrapper}>
      <div className={styles.formWrapperContent}>
        <h4 className={styles.header}>
          Eat Now Features
          <span role="img" aria-label="plate">
            🍽️
          </span>
        </h4>
        <p className={styles.questionText}>
          Do you want diners to be able to request tables?
        </p>
        <div className={styles.switchRowWrapper}>
          <SwitchRow />
        </div>
        <p className={styles.bottomText}>
          This setting determines whether or not diners can request to ‘Eat Now’
          at your restaurant.
        </p>
      </div>
    </div>
  );
};

export default EatNowForm;
