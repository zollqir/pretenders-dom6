import React from "react";
import styles from "./SelectedBlesses.module.scss";

function SelectedBlesses({ selectedBlesses, onRemove }) {
  if (!selectedBlesses?.length) {
    return null;
  }

  return (
    <div className={styles.container}>
      <h3>Selected Blessings:</h3>
      <div className={styles.blessList}>
        {selectedBlesses.map((bless, index) => (
          <div
            key={`${bless.id}-${index}`}
            className={styles.blessItem}
            onClick={() => onRemove(index)}
          >
            <span className={styles.blessName}>{bless.name}</span>
            <button className={styles.removeButton} title="Remove blessing">
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SelectedBlesses;
