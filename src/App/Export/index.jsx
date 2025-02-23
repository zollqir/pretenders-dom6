import React from "react";

function Export({
  nationID,
  selectedPretenders,
  magic,
  dominion,
  imprisonment,
  scales,
  blessings,
}) {
  const generateTemplate = (pretender) => {
    const lines = [];

    // Start template with ID and form
    lines.push(`#newtemplate ${pretender.pretenderId}`);
    lines.push(`#form "${pretender.name} (${pretender.formId})"`);

    // Add imprisonment level
    lines.push(`#prison ${imprisonment}`);

    // Add magic paths (only if > 0)
    const paths = {
      0: magic.f,
      1: magic.a,
      2: magic.w,
      3: magic.e,
      4: magic.s,
      5: magic.d,
      6: magic.n,
      7: magic.g,
      8: magic.b,
    };

    // Add magic paths in order
    Object.entries(paths).forEach(([pathId, level]) => {
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

    // Add blessings (each on its own line)
    if (blessings && blessings.length > 0) {
      blessings.forEach((blessing) => {
        lines.push(`#bless "${blessing}"`);
      });
    }

    // End template
    lines.push("#end");

    // Join with newlines instead of spaces
    return lines.join("\n");
  };

  const handleExport = () => {
    const content = selectedPretenders
      .map((pretender) => generateTemplate(pretender))
      .join("\n\n");

    const fileName = `${nationID}${selectedPretenders[0].name}.txt`;

    // Create a download link element
    const element = document.createElement("a");
    const file = new Blob([content], { type: "text/plain;charset=utf-8" });
    element.href = URL.createObjectURL(file);
    element.download = fileName;

    // Append to document, click, and cleanup
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    URL.revokeObjectURL(element.href);
  };

  return <button onClick={handleExport}>Export Pretender</button>;
}

export default Export;
