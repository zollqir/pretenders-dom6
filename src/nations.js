export function getNations() {
  return {
    0:   { era: null, label: "Any nation"},
    5:   { era: 0, label: "EA Arcoscephale - Golden Era"},
    6:   { era: 0, label: "EA Ermor - New Faith"},
    7:   { era: 0, label: "EA Ulm - Enigma of Steel", heat: -1},
    8:   { era: 0, label: "EA Marverni - Time of Druids"},
    9:   { era: 0, label: "EA Sauromatia - Amazon Queens"},
    10:  { era: 0, label: "EA T’ien Ch’i - Spring and Autumn"},
    11:  { era: 0, label: "EA Machaka - Lion Kings", heat: 2},
    12:  { era: 0, label: "EA Mictlan - Reign of Blood", heat: 1, blessF: 1, blessB: 2},
    13:  { era: 0, label: "EA Abysia - Children of Flame", heat: 3, blessF: 2},
    14:  { era: 0, label: "EA Caelum - Eagle Kings", heat: -2},
    15:  { era: 0, label: "EA C’tis - Lizard Kings", heat: 2},
    16:  { era: 0, label: "EA Pangaea - Age of Revelry"},
    17:  { era: 0, label: "EA Agartha - Pale Ones", blessE: 2},
    18:  { era: 0, label: "EA Tir na n'Og - Land of the Ever Young"},
    19:  { era: 0, label: "EA Fomoria - The Cursed Ones"},
    20:  { era: 0, label: "EA Vanheim - Age of Vanir", heat: -1},
    21:  { era: 0, label: "EA Helheim - Dusk and Death", heat: -1},
    22:  { era: 0, label: "EA Niefelheim - Sons of Winter", heat: -3},
    24:  { era: 0, label: "EA Rus - Sons of Heaven", heat: -2},
    25:  { era: 0, label: "EA Kailasa - Rise of the Ape Kings", heat: 2},
    26:  { era: 0, label: "EA Lanka - Land of Demons", heat: 2},
    27:  { era: 0, label: "EA Yomi - Oni Kings"},
    28:  { era: 0, label: "EA Hinnom - Sons of the Fallen", heat: 2},
    29:  { era: 0, label: "EA Ur - The First City", heat: 1},
    30:  { era: 0, label: "EA Berytos - Phoenix Empire", heat: 1},
    31:  { era: 0, label: "EA Xibalba - Vigil of the Sun", heat: 1},
    36:  { era: 0, label: "EA Atlantis - Emergence of the Deep Ones"},
    37:  { era: 0, label: "EA R’lyeh - Time of Aboleths"},
    38:  { era: 0, label: "EA Pelagia - Pearl Kings"},
    39:  { era: 0, label: "EA Oceania - Coming of the Capricorns"},
    40:  { era: 0, label: "EA Therodos - Telkhine Spectre"},
    43:  { era: 1, label: "MA Arcoscephale - The Old Kingdom"},
    44:  { era: 1, label: "MA Ermor - Ashen Empire", growth: -3},
    45:  { era: 1, label: "MA Sceleria - Reformed Empire"},
    46:  { era: 1, label: "MA Pythium - Emerald Empire"},
    47:  { era: 1, label: "MA Man - Tower of Avalon"},
    48:  { era: 1, label: "MA Eriu - Last of the Tuatha"},
    49:  { era: 1, label: "MA Ulm - Forges of Ulm"},
    50:  { era: 1, label: "MA Marignon - Fiery Justice", blessF: 2, blessS: 2},
    51:  { era: 1, label: "MA Mictlan - Reign of the Lawgiver", heat: 1, blessA: 1, blessN: 2},
    52:  { era: 1, label: "MA T’ien Ch’i - Imperial Bureaucracy"},
    53:  { era: 1, label: "MA Machaka - Reign of Sorcerors", heat: 2},
    54:  { era: 1, label: "MA Agartha - Golem Cult", blessE: 1},
    55:  { era: 1, label: "MA Abysia - Blood and Fire", heat: 3, blessF: 1},
    56:  { era: 1, label: "MA Caelum - Reign of the Seraphim", heat: -3},
    57:  { era: 1, label: "MA C’tis - Miasma", heat: 2},
    58:  { era: 1, label: "MA Pangaea - Age of Bronze"},
    59:  { era: 1, label: "MA Asphodel - Carrion Woods"},
    60:  { era: 1, label: "MA Vanheim - Arrival of Man", heat: -1},
    61:  { era: 1, label: "MA Jotunheim - Iron Woods", heat: -2},
    62:  { era: 1, label: "MA Vanarus - Land of the Chuds", heat: -2},
    63:  { era: 1, label: "MA Bandar Log - Land of the Apes", heat: 2},
    64:  { era: 1, label: "MA Shinuyama - Land of the Bakemono"},
    65:  { era: 1, label: "MA Ashdod - Reign of the Anakim", heat: 2},
    66:  { era: 1, label: "MA Uruk - City States", heat: 1},
    67:  { era: 1, label: "MA Nazca - Kingdom of the Sun", heat: -1},
    68:  { era: 1, label: "MA Xibalba - Flooded Caves", heat: 1},
    73:  { era: 1, label: "MA Atlantis - Kings of the Deep"},
    74:  { era: 1, label: "MA R’lyeh - Fallen Star"},
    75:  { era: 1, label: "MA Pelagia - Triton Kings"},
    76:  { era: 1, label: "MA Oceania - Mermidons"},
    77:  { era: 1, label: "MA Ys - Morgen Queens"},
    80:  { era: 2, label: "LA Arcoscephale - Sibylline Guidance"},
    81:  { era: 2, label: "LA Pythium - Serpent Cult"},
    82:  { era: 2, label: "LA Lemuria - Soul Gate", growth: -3},
    83:  { era: 2, label: "LA Man - Towers of Chelms"},
    84:  { era: 2, label: "LA Ulm - Black Forest"},
    85:  { era: 2, label: "LA Marignon - Conquerors of the Sea", blessF: 1, blessS: 1, blessB: 1},
    86:  { era: 2, label: "LA Mictlan - Blood and Rain", heat: 1, blessW: 1, blessB: 2},
    87:  { era: 2, label: "LA T’ien Ch’i - Barbarian Kings"},
    89:  { era: 2, label: "LA Jomon - Human Daimyos"},
    90:  { era: 2, label: "LA Agartha - Ktonian Dead"},
    91:  { era: 2, label: "LA Abysia - Blood of Humans", heat: 2},
    92:  { era: 2, label: "LA Caelum - Return of the Raptors", heat: -1},
    93:  { era: 2, label: "LA C’tis - Desert Tombs", heat: 2},
    94:  { era: 2, label: "LA Pangaea - New Era"},
    95:  { era: 2, label: "LA Midgård - Age of Men", heat: -1},
    96:  { era: 2, label: "LA Utgård - Well of Urd", heat: -1},
    97:  { era: 2, label: "LA Bogarus - Age of Heroes", heat: -2},
    98:  { era: 2, label: "LA Patala - Reign of the Nagas", heat: 2},
    99:  { era: 2, label: "LA Gath - Last of the Giants", heat: 1},
    100: { era: 2, label: "LA Ragha - Dual Kingdom"},
    101: { era: 2, label: "LA Xibalba - Return of the Zotz", heat: 1},
    106: { era: 2, label: "LA Atlantis - Frozen Sea", heat: -2},
    107: { era: 2, label: "LA R’lyeh - Dreamlands"},
    108: { era: 2, label: "LA Erytheia - Kingdom of Two Worlds", heat: 1},

  };
};
