import React from 'react';

import {filterPretendersByImprisonment} from './filterPretendersByImprisonment';

import {filterPretendersByChassis} from './filterPretendersByChassis';
import { blessOptimizer } from './blessOptimizer';
import {pretenderCost} from './pretenderCost';

import styles from './Pretenders.module.scss';

function Pretenders(props) {

  const {
      f, a, w, e, s, d, n, g, b,  
      nations,
      nationId,
      pretenders,
      dominion,
      imprisonment,
      pointsForImprisonment,
      chassis,
      scalesCosts,
      scales,
      scalelimits,
      blessBonus,
      openPretenderOptimizer,
      closePretenderOptimizer,
      isPretenderOptimizerOpen
  } = props;

  const paths = {f, a, w, e, s, d, n, g, b};
  
  const points = 450;

  const totalCostOfScales = Object.values(scalesCosts).reduce(
    (acc, curr) => acc + curr, 0
  );
  const pointsLeftWithoutPretenders = points + pointsForImprisonment - totalCostOfScales;

  const filteredPretenderIds = filterPretendersByChassis(
      pretenders,
      filterPretendersByImprisonment(
          pretenders,
          nations[nationId].pretenders,
          imprisonment
      ),
      chassis,
      scales,
      scalelimits
  );
  
  if (isPretenderOptimizerOpen) {
    const filteredPretenderIdsByCost = filteredPretenderIds.filter(pretenderId => {
      return pointsLeftWithoutPretenders - pretenderCost(pretenders[pretenderId], nations[nationId], paths, dominion) >= 0;
    });
    
    const pretenderRows = filteredPretenderIdsByCost.map(pretenderId => {
      const pretender = pretenders[pretenderId];
      
      const knownPaths = {};
      const basePaths = {};
      for (const path of ["f","a","w","e","s","d","n","g","b"]) {
        if (pretender[path]) {
          knownPaths[path] = pretender[path];
          basePaths[path] = pretender[path];
        }

        if (paths[path] && !(paths[path] < pretender[path])) {
          knownPaths[path] = paths[path];
          if (!pretender[path])
            basePaths[path] = 0;
        }
      }

      
      const pretenderArray = blessOptimizer(knownPaths, basePaths, pretender.pathcost, blessBonus, pointsLeftWithoutPretenders - pretenderCost(pretender, nations[nationId], paths, dominion));
      //pretenderArray.blessPoints is set already
      pretenderArray.pretenderId = pretenderId;
      pretenderArray.name = pretender.name;
      pretenderArray.dominion = pretender.startdom > dominion ? pretender.startdom : dominion;
      pretenderArray.scalelimits = {
        order:        pretender.moreorder,
        productivity: pretender.moreprod,
        heat:         pretender.moreheat,
        growth:       pretender.moregrowth,
        fortune:      pretender.moreluck,
        magic:        pretender.moremagic
      };


      return pretenderArray;
      
    }).sort((a, b) => {
      if (a.blessPoints < b.blessPoints)
          return 1;
      if (a.blessPoints > b.blessPoints)
          return -1;
      return 0;
    }).map(pretenderArray => {
      let scaleString = "";
        scaleString += pretenderArray.scalelimits.order         ? `${scaleString.length > 0 ? "," : ""}Ord:  ${pretenderArray.scalelimits.order       }` : "";
        scaleString += pretenderArray.scalelimits.productivity  ? `${scaleString.length > 0 ? "," : ""}Prd:  ${pretenderArray.scalelimits.productivity}` : "";
        scaleString += pretenderArray.scalelimits.heat          ? `${scaleString.length > 0 ? "," : ""}Heat: ${pretenderArray.scalelimits.heat        }` : "";
        scaleString += pretenderArray.scalelimits.growth        ? `${scaleString.length > 0 ? "," : ""}Grw:  ${pretenderArray.scalelimits.growth      }` : "";
        scaleString += pretenderArray.scalelimits.fortune       ? `${scaleString.length > 0 ? "," : ""}Frt:  ${pretenderArray.scalelimits.fortune     }` : "";
        scaleString += pretenderArray.scalelimits.magic         ? `${scaleString.length > 0 ? "," : ""}Mgc:  ${pretenderArray.scalelimits.magic       }` : "";
      
      let rows = [];

      for (const pretender of pretenderArray) {

        let newPathCells = [];
        let cheapestPathCells = [];
        for (let i = 0; i < 8; i++) {
          newPathCells.push(
            <td key={`newpath-${newPathCells.length}`} className={styles[`table_cell${pretender.newPaths[i] ? "_new" : ""}`]}>{pretender.newPaths[i] ? `${pretender.newPaths[i]}` : " "}</td>
          );
        }
        
        if (pretender.cheapestKnownPaths)
          for (const path of pretender.cheapestKnownPaths) {
            cheapestPathCells.push(
              <td key={`cheappath-${cheapestPathCells.length}`} className={styles[`table_cell_${path}`]}>{`${path.toUpperCase()}`}</td>
            );
          }
        
        if (pretender.cheapestNewPaths)
          for (const path of pretender.cheapestNewPaths) {
            cheapestPathCells.push(
              <td key={`cheappath-${cheapestPathCells.length}`} className={styles.table_cell_new}>{`${pretender.newPaths[path]}`}</td>
            );
          }
        rows.push(
          //TODO fix ${key pretenderArray.pretenderId}-${Object.keys(pretender.knownPaths).length}-${pretender.newPaths.length}-${pretender.pointsRemaining}-${pretenderArray.blessPoints}
          <tr key={`${pretenderArray.pretenderId}-${pretenderArray.blessPoints}-${pretender.pointsRemaining}-${Object.keys(pretender.knownPaths).length}-${pretender.newPaths.length}-${pretender.numberOfCheapestPaths}`}> 
            <td className={styles.table_cell_name}>{`${pretenderArray.name} `}
              <span className={styles.table_cell_id}>{`(id: ${pretenderArray.pretenderId})`}</span>
            </td>
            <td className={styles.table_cell}>{pretenderArray.blessPoints}</td>
            <td className={styles.table_cell}>{pretender.pointsRemaining}</td>
            <td className={styles.table_cell}>{pretenderArray.dominion}</td>
            <td className={styles.table_cell}>{scaleString}</td>
            <td className={styles[`table_cell${pretender.knownPaths.f > 0 ? "_f" : ""}`]}>{pretender.knownPaths.f > 0 ? `F${pretender.knownPaths.f}` : ""}</td>
            <td className={styles[`table_cell${pretender.knownPaths.a > 0 ? "_a" : ""}`]}>{pretender.knownPaths.a > 0 ? `A${pretender.knownPaths.a}` : ""}</td>
            <td className={styles[`table_cell${pretender.knownPaths.w > 0 ? "_w" : ""}`]}>{pretender.knownPaths.w > 0 ? `W${pretender.knownPaths.w}` : ""}</td>
            <td className={styles[`table_cell${pretender.knownPaths.e > 0 ? "_e" : ""}`]}>{pretender.knownPaths.e > 0 ? `E${pretender.knownPaths.e}` : ""}</td>
            <td className={styles[`table_cell${pretender.knownPaths.s > 0 ? "_s" : ""}`]}>{pretender.knownPaths.s > 0 ? `S${pretender.knownPaths.s}` : ""}</td>
            <td className={styles[`table_cell${pretender.knownPaths.d > 0 ? "_d" : ""}`]}>{pretender.knownPaths.d > 0 ? `D${pretender.knownPaths.d}` : ""}</td>
            <td className={styles[`table_cell${pretender.knownPaths.n > 0 ? "_n" : ""}`]}>{pretender.knownPaths.n > 0 ? `N${pretender.knownPaths.n}` : ""}</td>
            <td className={styles[`table_cell${pretender.knownPaths.g > 0 ? "_g" : ""}`]}>{pretender.knownPaths.g > 0 ? `G${pretender.knownPaths.g}` : ""}</td>
            <td className={styles[`table_cell${pretender.knownPaths.b > 0 ? "_b" : ""}`]}>{pretender.knownPaths.b > 0 ? `B${pretender.knownPaths.b}` : ""}</td>
            {newPathCells}
            <td className={styles.table_cell}>{pretender.numberOfCheapestPaths}</td>
            {cheapestPathCells}
          </tr>
        );
      }

      return rows;

    }).flat();

    return (
    <div className={styles.contents}>
      <button className={"toggle_button"} onClick={closePretenderOptimizer}>
        Show Design Point Optimizer
      </button>
      <table className={styles.table} id="pretenders-table">
        <thead id="pretenders-table__head">
          <tr>
            <th className={styles.table_header}>Name</th>
            <th className={styles.table_header}>Bless Points</th>
            <th className={styles.table_header}>Points left</th>
            <th className={styles.table_header}>Dominion</th>
            <th className={styles.table_header}>Scales</th>
            <th className={styles.table_header} colSpan="9">Known Paths</th>
            <th className={styles.table_header} colSpan="8">New Paths</th>
            <th className={styles.table_header}>Number of Paths to Increment</th>
            <th className={styles.table_header} colSpan="100">Incrementable Paths</th>
          </tr>
        </thead>
        <tbody id="pretenders-table__body">
          {pretenderRows}
        </tbody>
      </table>
    </div>
    );

  }
  else {
    const pretenderRows = filteredPretenderIds.map(pretenderId => {
    const pretender = pretenders[pretenderId];
    return (
        {
      pretenderId: pretenderId,
      name: pretender.name,
      pointsLeft: pointsLeftWithoutPretenders - pretenderCost(
                      pretender,
          nations[nationId],
          paths,
          dominion
                  ),
      dominion: pretender.startdom > dominion ? pretender.startdom : dominion,
      f: pretender.f > paths.f ? pretender.f : paths.f,
      a: pretender.a > paths.a ? pretender.a : paths.a,
      w: pretender.w > paths.w ? pretender.w : paths.w,
      e: pretender.e > paths.e ? pretender.e : paths.e,
      s: pretender.s > paths.s ? pretender.s : paths.s,
      d: pretender.d > paths.d ? pretender.d : paths.d,
      n: pretender.n > paths.n ? pretender.n : paths.n,
      g: pretender.g > paths.g ? pretender.g : paths.g,
      b: pretender.b > paths.b ? pretender.b : paths.b,
      scalelimits: {
        order:        pretender.moreorder,
        productivity: pretender.moreprod,
        heat:         pretender.moreheat,
        growth:       pretender.moregrowth,
        fortune:      pretender.moreluck,
        magic:        pretender.moremagic
      }
        }
    );
      }).sort((a, b) => {
    if (a.pointsLeft < b.pointsLeft)
        return 1;
    if (a.pointsLeft > b.pointsLeft)
        return -1;
    return 0;
      }).map(data => {
        let scaleString = "";
        scaleString += data.scalelimits.order         ? `${scaleString.length > 0 ? "," : ""}Ord:  ${data.scalelimits.order       }` : "";
        scaleString += data.scalelimits.productivity  ? `${scaleString.length > 0 ? "," : ""}Prd:  ${data.scalelimits.productivity}` : "";
        scaleString += data.scalelimits.heat          ? `${scaleString.length > 0 ? "," : ""}Heat: ${data.scalelimits.heat        }` : "";
        scaleString += data.scalelimits.growth        ? `${scaleString.length > 0 ? "," : ""}Grw:  ${data.scalelimits.growth      }` : "";
        scaleString += data.scalelimits.fortune       ? `${scaleString.length > 0 ? "," : ""}Frt:  ${data.scalelimits.fortune     }` : "";
        scaleString += data.scalelimits.magic         ? `${scaleString.length > 0 ? "," : ""}Mgc:  ${data.scalelimits.magic       }` : "";
  
    return (
        <tr key={data.pretenderId}>
          <td className={styles.table_cell_name}>{data.name + " "}
            <span className={styles.table_cell_id}>{"(id: " + data.pretenderId + ")"}</span>
          </td>
          <td className={styles.table_cell}>{data.pointsLeft}</td>
          <td className={styles.table_cell}>{data.dominion}</td>
          <td className={styles.table_cell}>{scaleString}</td>
          <td className={styles[`table_cell${data.f > 0 ? "_f" : ""}`]}>{data.f > 0 ? `F${data.f}` : ""}</td>
          <td className={styles[`table_cell${data.a > 0 ? "_a" : ""}`]}>{data.a > 0 ? `A${data.a}` : ""}</td>
          <td className={styles[`table_cell${data.w > 0 ? "_w" : ""}`]}>{data.w > 0 ? `W${data.w}` : ""}</td>
          <td className={styles[`table_cell${data.e > 0 ? "_e" : ""}`]}>{data.e > 0 ? `E${data.e}` : ""}</td>
          <td className={styles[`table_cell${data.s > 0 ? "_s" : ""}`]}>{data.s > 0 ? `S${data.s}` : ""}</td>
          <td className={styles[`table_cell${data.d > 0 ? "_d" : ""}`]}>{data.d > 0 ? `D${data.d}` : ""}</td>
          <td className={styles[`table_cell${data.n > 0 ? "_n" : ""}`]}>{data.n > 0 ? `N${data.n}` : ""}</td>
          <td className={styles[`table_cell${data.g > 0 ? "_g" : ""}`]}>{data.g > 0 ? `G${data.g}` : ""}</td>
          <td className={styles[`table_cell${data.b > 0 ? "_b" : ""}`]}>{data.b > 0 ? `B${data.b}` : ""}</td>
        </tr>
    );
      });
      
      return (
  <div className={styles.contents}>
    <button className={"toggle_button"} onClick={openPretenderOptimizer}>
      Show Bless Point Optimizer
    </button>
    <table className={styles.table} id="pretenders-table">
      <thead id="pretenders-table__head">
        <tr>
          <th className={styles.table_header}>Name</th>
          <th className={styles.table_header}>Points left</th>
          <th className={styles.table_header}>Dominion</th>
          <th className={styles.table_header}>Scales</th>
          <th className={styles.table_header} colSpan="9">Magic</th>
        </tr>
      </thead>
      <tbody id="pretenders-table__body">
        {pretenderRows}
      </tbody>
    </table>
  </div>
      );
  }
}

export default Pretenders;
