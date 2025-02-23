import React, { useEffect } from 'react';
import NationBlessBonusInfo from './NationBlessBonusInfo';
import BlessEffectsWindow from './BlessEffectsWindow';
import BlessEffectsRows from './BlessEffectsRows';
import SelectedBlesses from './SelectedBlesses';

import {totalBlessPoints} from './blessPoints';

import {filterBlessEffects} from './filterBlessEffects';
import {getBlessEffects} from './getBlessEffects';

import styles from './BlessEffects.module.scss';

function BlessEffects(props) {
    const {
      showBlessList,
      closeBlessList,
      blessBonus,
      isBlessEffectsWindowOpen,
      f,a,w,e,s,d,n,g,b,
      scales,
      setSelectedBlesses,
      selectedBlesses,
      nationId
    } = props;
    const paths = {f,a,w,e,s,d,n,g,b};
    const blessPoints = totalBlessPoints(paths, blessBonus);
    const blessEffects = getBlessEffects();

  const handleBlessRemove = (index) => {
    setSelectedBlesses((prev) => {
      const newBlesses = [...prev];
      newBlesses.splice(index, 1);
      return newBlesses;
    });
  };

  const handleBlessSelect = (bless) => {
    setSelectedBlesses((prev) => {
      // If not multi-selectable, remove if already selected
      if (!bless.multi) {
        const isAlreadySelected = prev.some((b) => b.id === bless.id);
        if (isAlreadySelected) {
          return prev.filter((b) => b.id !== bless.id);
        }
      }
      // Add the bless effect to the array
      return [...prev, bless];
    });
  };

  const memoizedPaths = React.useMemo(
    () => ({ f, a, w, e, s, d, n, g, b }),
    [f, a, w, e, s, d, n, g, b]
  );

  const filteredEffects = React.useMemo(
    () => filterBlessEffects(blessEffects, memoizedPaths, scales),
    [blessEffects, memoizedPaths, scales]
  );

  return (
    <div className={styles.container}>
      <BlessEffectsWindow
        isOpen={isBlessEffectsWindowOpen}
        onClose={closeBlessList}
        blessEffects={blessEffects}
      />
      <NationBlessBonusInfo
        blessBonus={blessBonus}
        blessPoints={blessPoints}
        selectedBlesses={selectedBlesses}
      />

      <p>
        Available Blesses
        <button className={styles.open_button} onClick={showBlessList}>
          Show all bless list
        </button>
      </p>

      <div className={styles.section}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.table_header}>Bless Points</th>
              <th className={styles.table_header}>Scales</th>
              <th className={styles.table_header}>Name</th>
              <th className={styles.table_header}>Short description</th>
              <th className={styles.table_header}>Incarnate only?</th>
              <th className={styles.table_header}>Add blessing</th>
            </tr>
          </thead>
          <BlessEffectsRows
            effects={filteredEffects}
            onBlessSelect={handleBlessSelect}
            isExternalWindow={false}
          />
        </table>

        <SelectedBlesses
          selectedBlesses={selectedBlesses}
          onRemove={handleBlessRemove}
        />
      </div>
    </div>
  );
}
export default BlessEffects;
