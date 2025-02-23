import React, { useEffect } from "react";
import NationBlessBonusInfo from "./NationBlessBonusInfo";
import BlessEffectsWindow from "./BlessEffectsWindow";
import BlessEffectsRows from "./BlessEffectsRows";

import { totalBlessPoints } from "./blessPoints";

import { filterBlessEffects } from "./filterBlessEffects";
import { getBlessEffects } from "./getBlessEffects";

import styles from "./BlessEffects.module.scss";

function BlessEffects(props) {
  const {
    showBlessList,
    closeBlessList,
    blessBonus,
    isBlessEffectsWindowOpen,
    f,
    a,
    w,
    e,
    s,
    d,
    n,
    g,
    b,
    scales,
    setSelectedBlesses,
    selectedBlesses,
  } = props;
  const paths = { f, a, w, e, s, d, n, g, b };
  const blessPoints = totalBlessPoints(paths, blessBonus);
  const blessEffects = getBlessEffects();

  const handleBlessSelect = (bless) => {
    setSelectedBlesses((prev) => {
      const isAlreadySelected = prev.some((b) => b.id === bless.id);
      if (isAlreadySelected) {
        return prev.filter((b) => b.id !== bless.id);
      }
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

  useEffect(() => {
    const filteredIds = new Set(filteredEffects.map((effect) => effect.id));
    setSelectedBlesses((prev) => {
      // Only update if there are changes to avoid unnecessary rerenders
      const filtered = prev.filter((bless) => filteredIds.has(bless.id));
      return filtered.length === prev.length ? prev : filtered;
    });
  }, [filteredEffects]);

  return (
    <div className={styles.container}>
      <BlessEffectsWindow
        isOpen={isBlessEffectsWindowOpen}
        onClose={closeBlessList}
        blessEffects={blessEffects}
      />
      <NationBlessBonusInfo blessBonus={blessBonus} blessPoints={blessPoints} />

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
              <th className={styles.table_header}>Blessing</th>
              <th className={styles.table_header}>Select</th>
            </tr>
          </thead>
          <BlessEffectsRows
            effects={filteredEffects}
            selectedBlesses={selectedBlesses}
            onBlessSelect={handleBlessSelect}
          />
        </table>
      </div>
    </div>
  );
}

export default BlessEffects;
