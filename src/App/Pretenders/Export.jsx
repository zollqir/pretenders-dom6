import React from "react";
import styles from "./Pretenders.module.scss";

function Export({
  nationId,
  pretender,
  paths,
  dominion,
  imprisonment,
  scales,
}) {
  const generateTemplate = () => {
    const lines = [];

    // Start template with ID and form
    lines.push(`#newtemplate ${nationId}`);
    lines.push(`#form "${pretender.name}" (${pretender.pretenderId})`);

    // Add imprisonment level
    lines.push(`#prison ${imprisonment - 1}`); // Imprisonment is 1-indexed for some reason

    // Add magic paths in order
    Object.entries({
      f: 0,
      a: 1,
      w: 2,
      e: 3,
      s: 4,
      d: 5,
      n: 6,
      g: 7,
      b: 8,
    }).forEach(([path, pathId]) => {
      const level = Math.max(pretender[path] || 0, paths[path] || 0);
      if (level > 0) {
        lines.push(`#magic ${pathId} ${level}`);
      }
    });

    // Add dominion strength
    lines.push(`#domstr ${dominion}`);

    // Add scales
    const scaleMap = {
      order: 0,
      productivity: 1,
      heat: 2,
      growth: 3,
      fortune: 4,
      magic: 5,
    };

    Object.entries(scales).forEach(([scaleName, value]) => {
      if (value !== 0) {
        lines.push(`#scale ${scaleMap[scaleName]} ${value}`);
      }
    });

    // End template
    lines.push("#end");

    return lines.join("\n");
  };

  const handleExport = () => {
    const content = generateTemplate();
    const fileName = `${nationId}_${pretender.pretenderId}.txt`;

    const element = document.createElement("a");
    const file = new Blob([content], { type: "text/plain;charset=utf-8" });
    element.href = URL.createObjectURL(file);
    element.download = fileName;

    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    URL.revokeObjectURL(element.href);
  };

  return (
    <td className={styles.table_cell}>
      <p className={styles.minimal_button} onClick={handleExport}>
        Export AI God
      </p>
    </td>
  );
}

export default Export;
