export function getBlessEffects() {

  const blessData = [
    {id: 1, f: 1, name: "Superior Morale", multi: true,
      shortDescription: "+1 morale"
    },
    {id: 2, f: 1, d: 1, name: "Wasteland Survival",
      shortDescription: "Wasteland survival trait"
    },
    {id: 3, f: 2, name: "Fire Resistance", multi: true,
      shortDescription: "Fire resistance 5"
    },
    {id: 4, f: 2, name: "Attack Skill", multi: true,
      shortDescription: "+1 attack skill"
    },
    {id: 5, f: 3, name: "Inspirational Presence", multi: true,
      shortDescription: "+1 inspirational, +50 leadership"
    },
    {id: 6, f: 4, name: "Righteous Wrath",
      shortDescription: "+3 attack, +3 strength, +6 morale, 2 AoE"

    },
    {id: 7, f: 5, name: "Death Explosion", incarnate: true,
      shortDescription: "10 AP damage, 4+size AoE"
    },
    {id: 8, f: 5, name: "Heat Aura", incarnate: true,
      shortDescription: "Heat 3, fire resistance 10"
    },
    {id: 9, f: 6, name: "Fire Shield", incarnate: true,
      shortDescription: "Fire shield (7 AP dmg)"
    },
    {id: 10, f: 7, name: "Flaming Weapons", incarnate: true,
      shortDescription: "Fire damage (8 AP dmg)"
    },
    {id: 11, f: 8, s: 4, name: "Unbearable Splendour", incarnate: true,
      shortDescription: "Unbearable splendour"
    },
    {id: 12, a: 1, name: "Precision", multi: true,
      shortDescription: "+1 precision"
    },
    {id: 13, a: 2, name: "Shock Resistance", multi: true,
      shortDescription: "Shock resistance 5"
    },
    {id: 14, a: 2, name: "Farshot", multi: true,
      shortDescription: "Weapon range +30%"
    },
    {id: 15, a: 3, name: "Awareness",
      shortDescription: "Unsurroundable +2"
    },
    {id: 16, a: 4, name: "Swiftness", multi: true,
      shortDescription: "Movement +30%, +1 defence"
    },
    {id: 17, a: 4, name: "Storm Flight",
      shortDescription: "Storm immunity"
    },
    {id: 18, a: 5, name: "Wind Walker", incarnate: true,
      shortDescription: "Map move +6"
    },
    {id: 19, a: 5, e: 1, name: "Weightlessness", incarnate: true,
      shortDescription: "Floating, ½ encumbrance"
    },
    {id: 20, a: 6, name: "Air Shield", incarnate: true,
      shortDescription: "80% missile protection"
    },
    {id: 21, a: 7, name: "Thunder Weapons", incarnate: true,
      shortDescription: "Shock effect (1 AN capped dmg + 3 AN fatigue dmg)"
    },
    {id: 22, a: 8, name: "Charged Bodies", incarnate: true,
      shortDescription: "20 AN shock damage, shock resistance 5"
    },
    {id: 23, a: 9, name: "Flight", incarnate: true,
      shortDescription: "Flying"
    },
    {id: 24, w: 1, scales:{heat: -1}, name: "Winter's Gift",
      shortDescription: "No movement penalties from cold"
    },
    {id: 25, w: 1, n: 1, name: "Swamp Survival",
      shortDescription: "Swamp survival trait"
    },
    {id: 26, w: 2, name: "Cold Resistance", multi: true,
      shortDescription: "Cold resistance 5"
    },
    {id: 27, w: 2, name: "Swimming",
      shortDescription: "Cross rivers, lower penalties fighting underwater"
    },
    {id: 28, w: 2, name: "Defence Skill", multi: true,
      shortDescription: "+1 defence skill" 
    },
    {id: 29, w: 5, name: "Chill Aura", incarnate: true,
      shortDescription: "Chill 3, cold resistance 10"
    },
    {id: 30, w: 5, name: "Slowing Weapons", incarnate: true,
      shortDescription: "Slow 50%, attack -2, defence -2"
    },
    {id: 31, w: 6, f: 2, name: "Vitriol Weapons", incarnate: true,
      shortDescription: "Acid effect (7 AP dmg)"
    },
    {id: 32, w: 6, name: "Water Breathing", incarnate: true,
      shortDescription: "Water Breathing trait"
    },
    {id: 33, w: 7, scales:{heat:-1}, name: "Frost Mist Weapons", incarnate: true,
      shortDescription: "Area 1 cold cloud 3"
    },
    {id: 34, w: 9, scales:{magic:1}, name: "Quickness", incarnate: true,
      shortDescription: "attacks*2, speed*2, attack+2, defence+2"
    },
    {id: 35, e: 1, name: "Mountain Survival",
      shortDescription: "Mountain survival trait"
    },
    {id: 36, e: 2, name: "Reinvigoration", multi: true,
      shortDescription: "+1 reinvigoration"
    },
    {id: 37, e: 2, name: "Strength of the Earth", multi: true,
      shortDescription: "+1 strength"
    },
    {id: 38, e: 4, name: "Unbreakable", 
      shortDescription: "75% protection from afflictions"
    },
    {id: 39, e: 4, n: 3, name: "Larger",
      shortDescription: "+1 size, +30% HP, +3 strength, -1 defence, +2 move"
    },
    {id: 40, e: 5, name: "Reconstruction", incarnate: true,
      shortDescription: "Inanimate units can heal, 5% inanimate regeneration"
    },
    {id: 41, e: 6, name: "Resilience of the Earth", incarnate: true,
      shortDescription: "Shock and fire resistance 10"
    },
    {id: 42, e: 6, name: "Hard Skin", incarnate: true,
      shortDescription: "+5 natural protection"
    },
    {id: 43, e: 7, name: "Fortitude", incarnate: true,
      shortDescription: "½ damage from pierce, slash and blunt weapons"
    },
    {id: 44, s: 1, name: "Arcane Command", multi: true,
      shortDescription: "+25 magic leadership"
    },
    {id: 45, s: 2, name: "Magic Resistance", multi: true,
      shortDescription: "+1 magic resistance"
    },
    {id: 46, s: 3, d: 1, name: "Spirit Sight",
      shortDescription: "Spirit sight trait"
    },
    {id: 47, s: 3, f: 1, name: "Solar Weapons",
      shortDescription: "Additional 4 AP dmg, tripled after protection vs. undead/demons"
    },
    {id: 48, s: 4, name: "Far Caster",
      shortDescription: "+50% combat spell range"
    },
    {id: 49, s: 4, name: "Arcane Finesse",
      shortDescription: "+1 penetration"
    },
    {id: 50, s: 5, name: "Magic Weapons", incarnate: true,
      shortDescription: "Magic damage except natural ranged weapon"
    },
    {id: 51, s: 6, name: "Twist Fate", incarnate: true,
      shortDescription: "Negate first successful attack"
    },
    {id: 52, s: 7, scales:{fortune:-1}, name: "Fateweaving", incarnate: true,
      shortDescription: "Attacker can get Cursed Luck (12 vs MR) after striking"
    },
    {id: 53, s: 8, scales:{magic:2}, name: "Etherealness", incarnate: true,
      shortDescription: "Ethereal trait (75% avoid non-magical damage)"
    },
    {id: 54, d: 1, name: "Undying", multi: true,
      shortDescription: "+2 undying HP"
    },
    {id: 55, d: 1, name: "Undead Command", multi: true,
      shortDescription: "+50 undead leadership"
    },
    {id: 56, d: 2, scales:{growth:-2}, name: "Half Dead",
      shortDescription: "Don't need to eat, resistance to disease"
    },
    {id: 57, d: 3, name: "Mending Bones",
      shortDescription: "Undead heal battle afflictions over time"
    },
    {id: 58, d: 4, name: "Withering Weapons",
      shortDescription: "Withering weapons"
    },
    {id: 59, d: 5, name: "Stygian Flesh", incarnate: true,
      shortDescription: "10 invulnerability"
    },
    {id: 60, d: 6, name: "Reforming Flesh", incarnate: true,
      shortDescription: "10% undead regeneration"
    },
    {id: 61, d: 7, name: "Reanimators", incarnate: true,
      shortDescription: "50% chance to reanimate on kill"
    },
    {id: 62, d: 8, name: "Death Weapons", incarnate: true,
      shortDescription: "Death effect (2 AN dmg MR negates + disease MR negates)"
    },
    {id: 63, d: 9, scales:{order:-1}, name: "Fear", incarnate: true,
      shortDescription: "Fear 5"
    },
    {id: 64, n: 1, scales:{}, name: "Resilient", multi: true,
      shortDescription: "+1 hp"
    },
    {id: 65, n: 1, name: "Low Light Vision",
      shortDescription: "Darkvision 50"
    },
    {id: 66, n: 2, name: "Poison Resistance", multi: true,
      shortDescription: "Poison resistance 5"
    },
    {id: 67, n: 2, name: "Forest Survival",
      shortDescription: "Forest survival trait"
    },
    {id: 68, n: 3, scales:{magic:1}, name: "Unaging",
      shortDescription: "Age 4 times slower"
    },
    {id: 69, n: 4, scales:{growth:-1}, name: "Poison Weapons",
      shortDescription: "Poison effect (5 AN dmg)"
    },
    {id: 70, n: 5, name: "Recuperation", incarnate: true,
      shortDescription: "Heal battle afflictions over time"
    },
    {id: 71, n: 5, name: "Berserker", incarnate: true,
      shortDescription: "Berserker +2"
    },
    {id: 72, n: 6, name: "Barkskin", incarnate: true,
      shortDescription: "+7 natural protection (max 10), Fire vulnerability 5"
    },
    {id: 73, n: 7, name: "Regeneration", incarnate: true,
      shortDescription: "10% regeneration"
    },
    {id: 74, g: 1, name: "Undreaming", 
      shortDescription: "+4 magic resistance vs. sleep"
    },
    {id: 75, g: 1, name: "Heroism", multi: true,
      shortDescription: "+35% experience"
    },
    {id: 76, g: 2, name: "Quiet Stride",
      shortDescription: "+20 stealth"
    },
    {id: 77, g: 3, name: "True Sight",
      shortDescription: "True sight trait"
    },
    {id: 78, g: 3, name: "Blur",
      shortDescription: "Blur effect (-2 enemy attack)"
    },
    {id: 79, g: 6, name: "Obfuscate", incarnate: true,
      shortDescription: "stealth 40 (or +40 stealth if already stealthy)"
    },
    {id: 80, g: 6, f: 2, name: "Awe", incarnate: true,
      shortDescription: "Awe +3"
    },
    {id: 81, g: 7, name: "Displacement", incarnate: true,
      shortDescription: "Displacement effect (-10 enemy attack on first hit, -5 attack subsequently)"
    },
    {id: 82, g: 8, name: "Dread", scales: {magic:1}, incarnate: true,
      shortDescription: "Fear 5 (true sight negates)"
    },
    {id: 83, g: 8, scales:{fortune:2}, name: "Luck", incarnate: true,
      shortDescription: "75% to avoid the last fatal blow"
    },
    {id: 84, b: 1, name: "Strong Vitae", multi: true,
      shortDescription: "+1 hp"
    },
    {id: 85, b: 2, name: "Strength of the Flesh", multi: true,
      shortDescription: "+1 strength"
    },
    {id: 86, b: 3, name: "Strong Blood",
      shortDescription: "Poison resistance 5, disease resistance 80"
    },
    {id: 87, b: 4, name: "Enchanted Blood",
      shortDescription: "0.5 regeneration, +1 magic resistance, stop profuse bleeding"
    },
    {id: 88, b: 4, name: "Blood Surge",
      shortDescription: "+3 attack, +3 strength, +1 defence, +1 reinvig after kill"
    },
    {id: 89, b: 5, name: "Blood Bond", incarnate: true,
      shortDescription: "half damage to other blessed friendly units (range 5)"
    },
    {id: 90, b: 6, name: "Unholy Weapons", incarnate: true,
      shortDescription: "Unholy effect (10 AP dmg vs. pretenders or sacreds only)"
    },
    {id: 91, b: 7, name: "Blood Vengeance", incarnate: true,
      shortDescription: "Attacker must roll MR or get equal damage"
    },
    {id: 92, b: 8, d: 4, name: "Vampiric Weapons", incarnate: true,
      shortDescription: "Vampiric effect (3 AN drain dmg)"
    }
  ];

  blessData.forEach(effect => {
    if (!effect.f) {effect.f = 0}
    if (!effect.a) {effect.a = 0}
    if (!effect.w) {effect.w = 0}
    if (!effect.e) {effect.e = 0}
    if (!effect.s) {effect.s = 0}
    if (!effect.d) {effect.d = 0}
    if (!effect.n) {effect.n = 0}
    if (!effect.g) {effect.g = 0}
    if (!effect.b) {effect.b = 0}
  });
  return blessData;
}
