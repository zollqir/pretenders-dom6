import getNations from "../getNations";

const getScaleLimits = (nationId) => {
  const scalelimits = getNations()[nationId]?.scalelimits ?? {};
  const order = scalelimits.order ?? 0;
  const productivity = scalelimits.productivity ?? 0;
  const heat = scalelimits.heat ?? 0;
  const growth = scalelimits.growth ?? 0;
  const fortune = scalelimits.fortune ?? 0;
  const magic = scalelimits.magic ?? 0;
  return {
    order,
    productivity,
    heat,
    growth,
    fortune,
    magic,
  };
};

export default getScaleLimits;
