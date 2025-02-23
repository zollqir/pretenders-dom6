import React from "react";

import BlessPointsCell from "../BlessPointsCell";

import styles from "./BlessEffectsRows.module.scss";

function BlessEffectsRows(props) {
  const { effects, selectedBlesses, onBlessSelect } = props;

  const rows = effects.map((effect) => {
    const { id, scales, name, shortDescription, incarnate } = effect;
    const isSelected = selectedBlesses?.some((bless) => bless.id === id);

    return (
      <tr
        key={id}
        className={`${styles.row} ${isSelected ? styles.selected : ""}`}
        onClick={() => onBlessSelect?.(effect)}
      >
        <BlessPointsCell effect={effect} />
        <td className={styles.scales}>
          {(scales?.order ? `Order: ${scales.order} ` : "") +
            (scales?.productivity
              ? `Productivity: ${scales.productivity} `
              : "") +
            (scales?.heat ? `Heat: ${scales.heat} ` : "") +
            (scales?.growth ? `Growth: ${scales.growth} ` : "") +
            (scales?.fortune ? `Fortune: ${scales.fortune} ` : "") +
            (scales?.magic ? `Magic: ${scales.magic} ` : "")}
        </td>
        <td className={styles.name}>{name}</td>
        <td className={styles.description}>{shortDescription}</td>
        <td className={styles.incarnate}>{incarnate ? "yes" : ""}</td>
        <td className={styles.name}>{name}</td>
        <td className={styles.centered}>
          <input
            type="checkbox"
            checked={isSelected}
            onChange={() => onBlessSelect?.(effect)}
            onClick={(e) => e.stopPropagation()}
          />
        </td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
}

export default BlessEffectsRows;
