import React from 'react';

import styles from './NationBlessBonusInfo.module.scss';

function NationBlessBonusInfo(props) {
  const { blessBonus, blessPoints, selectedBlesses } = props;

  const usedBlessPoints =
    selectedBlesses?.reduce((total, bless) => {
      return (
        total +
        ["f", "a", "w", "e", "s", "d", "n", "g", "b"].reduce(
          (sum, path) => sum + (bless[path] || 0),
          0
        )
      );
    }, 0) || 0;

  return (
    <div className={styles.container}>
      <p>{blessBonus ? `Nation bless bonus: +${blessBonus}` : ""}</p>
      Total bless points:{" "}
      <span
        className={usedBlessPoints > blessPoints ? styles.exceeded : undefined}
      >
        {usedBlessPoints > 0
          ? `${usedBlessPoints} / ${blessPoints}`
          : `${blessPoints}`}
      </span>
    </div>
  );
}

export default NationBlessBonusInfo;
