import React, { useState } from 'react';

import styles from './index.module.scss';
import Switch from '../Switch';

const SwitchRow = () => {
  const [isDisabled, setIsDisabled] = useState(false);

  const handleToggle = () => {
    setIsDisabled(!isDisabled);
  };

  return (
    <div className={styles.switchRowWrapper}>
      <div className={styles.switchRowContent}>
        {isDisabled ? 'Disabled' : 'Enabled'}
        <Switch isDisabled={isDisabled} onToggle={handleToggle} />
      </div>
    </div>
  );
};

export default SwitchRow;
