import scaleCost from './scaleCost';

const heatCost = (defaultLevel, level) => {
  const cost = Math.abs(scaleCost(defaultLevel, level));
  if (cost > 120) {
    return -120;
  }
  return -cost;
};

export default heatCost;
