/* ================= PLAYER STATISTICS & CONFIGURATION ================= */
/*
 * This file contains all player statistics initialization and player-related constants
 * Initialize new player stats here as needed
 */

// Player statistics - initialized at game start
const PLAYER_STATS = {
  pollen: 0,
  honey: 0,
  totalHoney: 0,
  pollenCapacity: 120,
  pollenBonus: 0,
  convertBonus: 0,
  cooldown: 2000,
  redBonus: 0,
  blueBonus: 0,
  whiteBonus: 0,
  yellowBonus: 0,
  purpleBonus: 0,
  redTotal: 0,
  blueTotal: 0,
  whiteTotal: 0,
  yellowTotal: 0,
  purpleTotal: 0,
  backpack: 0,
  criticalPower: 2,
  criticalChance: 5,
  instantConversion: 20,
  beePollenBonus: 0,
  beeConvertBonus: 0,
  beeCriticalChance: 0,
  beeCriticalPower: 0,
  beeInstantConversion: 0,
  beeHoneyBonus: 0,
  beeCapacityBonus: 0,
  superCriticalChance: 3,
  gooPollenCollected: 0,
  gooMultiplier: 1,
  fireMultiplier: 2,
  darkFireMultiplier: 7
};

// Player-related tracking variables (initialized separately)
const PLAYER_TRACKING = {
  playTime: 0,
  fieldStats: {},
  claimedRewards: {},
  bouyanbeeStackCount: 0,
  bouyanbeeMultiplier: 1,
  bouyanbeeBlueCount: 0,
  bouyanbeeLastBlueTime: 0,
  bouyanbeeBaseCapacity: 120,
  fuzzyDestructionCount: 0,
  gooDestroyedCount: 0,
  redPollenMultiplier: 1,
  bluePollenMultiplier: 1,
  whitePollenMultiplier: 1,
  yellowPollenMultiplier: 1,
  purplePollenMultiplier: 1,
  tickets: 0,
  ticketBeeAbilityTime: 0,
  goldenBeeAbilityTime: 0,
  tileTicketProbBonus: 0,
  maxSlots: 3,
  maxEquippedBeesEver: 3
};

// Ability state tracking
const ABILITY_STATES = {
  fireBeeTilesActive: {},
  spicyTilesActive: {},
  gooTiles: {},
  fuzzyBuffActive: false,
  fuzzyBuffEndTime: 0,
  fuzzyBuffCooldownEnd: 0,
  demonTilesActive: {},
  activeLaserLines: {},
  lastFireBeeAbility: 0,
  lastSpicyAbility: 0,
  lastDemonAbility: 0,
  lastLaserAbility: 0,
  lastGooGeneration: 0,
  gooColorCycle: 0,
  energyTiles: {},
  lastTeslaBeeAbility: 0,
  lastThunderBeeAbility: 0,
  lastGooTileGeneration: 0,
  activeGooTileIndices: [],
  lastPhotonAbility: 0,
  lastDigitalRandomEffect: 0,
  lastDigitalGlitch: 0,
  glitchedTiles: {},
  lastMoonLaser: 0,
  lastFourFormation: 0,
  lastLionDestruction: 0,
  lastLionAbility: 0,
  crimsonTilesActive: {},
  enhancedGooTiles: {},
  criticalErrorTiles: {},
  lastKingCrimsonAbility: 0,
  lastCrimsonGuardSynergy: 0,
  bubbleTilesActive: {},
  lastBubbleBeeAbility: 0
};

// Tool/Storage ability tracking
const SPECIAL_ABILITY_STATES = {
  grandmasterTilesDestroyed: 0,
  grandmasterActive: false,
  grandmasterEffectStartTime: 0,
  grandmasterBuffTimeLeft: 0,
  porcelainTilesDestroyed: 0,
  porcelainBuffActive: false,
  porcelainBuffStartTime: 0,
  porcelainBuffTimeLeft: 0,
  coconutBagPollenStored: 0,
  coconutBagBuffActive: false,
  coconutBagBuffStartTime: 0,
  coconutBagBuffTimeLeft: 0,
  royalGuardBuffActive: false,
  royalGuardCooldownActive: false,
  royalGuardCritCount: 0,
  royalGuardBuffStartTime: 0,
  royalGuardCooldownStartTime: 0
};

// Tile upgrade tracking
const TILE_UPGRADE_STATES = {
  tileUpgradeLevels: {
    gooTilePercent: 0,
    growSpeed: 0
  },
  maxGooTiles: 0,
  tileRegenerationRange: {
    min: 500,
    max: 2000
  }
};
