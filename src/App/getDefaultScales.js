import getNations from '../getNations';

const getDefaultScales = (nationId) => {
    const scales = getNations()[nationId]?.scales ?? {};
    const order         = scales.order        ?? 0;
    const productivity  = scales.productivity ?? 0;
    const heat          = scales.heat         ?? 0;
    const growth        = scales.growth       ?? 0;
    const fortune       = scales.fortune      ?? 0;
    const magic         = scales.magic        ?? 0;
    return {
        order, productivity, heat,
        growth, fortune, magic
    };
};

export default getDefaultScales;
