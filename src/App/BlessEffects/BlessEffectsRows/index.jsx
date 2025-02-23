import React from "react";
import BlessPointsCell from "../BlessPointsCell";
import styles from "./BlessEffectsRows.module.scss";

function BlessEffectsRows(props) {
  const { effects, onBlessSelect, nationId } = props;

  const rows = effects.map((effect) => {
    const { id, scales, name, shortDescription, incarnate, multi } = effect;

    return (
      <tr
        key={id}
        className={styles.row}
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
        <td className={styles.name}>
          {name} {multi && " (*)"}
        </td>
        <td className={styles.description}>{shortDescription}</td>
        <td className={styles.incarnate}>{incarnate ? "yes" : ""}</td>
        {nationId !== 0 && nationId !== "0" && (
          <td className={styles.add_button}>
            <p>Add</p>
          </td>
        )}
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
}

export default BlessEffectsRows;
