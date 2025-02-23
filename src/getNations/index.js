import pretendersToRemove from './pretendersToRemove';
import nationScalesToFix from './nationScalesToFix';
import nation_pretenders from '../data/nations_pretenders.json';
import nations from '../data/nations.json';

nation_pretenders["0"] = [];

nations["0"] = {
    "id": "0",
    "name": "Any nation",
    "epithet": null,
    "era": null,
    "realms": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    "bless_bonus": 0,
    "scalelimits": null,
    "scales": null,
    "cheap_gods": {},
    "pretenders": []
}

function getNations() {
  const anyNationPretenders = [];
  Object.keys(nations).forEach(nationId => {
    let nation = nations[nationId];
    let pretenderIds = nation_pretenders[nationId];
    if (pretendersToRemove[nationId]) {
      pretenderIds = pretenderIds.filter(id => {
        return !pretendersToRemove[nationId].includes(id);});
    }
    if ( ! nation.scalelimits ) { nation.scalelimits = {}; }
    if ( ! nation.scales ) { nation.scales = {}; }
    if ( ! nation.bless_bonus ) { nation.bless_bonus = 0; }
    nation.pretenders = pretenderIds;
    anyNationPretenders.push(...pretenderIds);
    if ( nationScalesToFix[nationId]) {
      for (const [scaleName, value] of Object.entries(nationScalesToFix[nationId])) {
        nation.scales[scaleName] = value;
      }
    }
  });

  nations["0"].pretenders = [...new Set(anyNationPretenders)];

  return nations;
};

export default getNations;
