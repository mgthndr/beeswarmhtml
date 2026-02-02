/* ================= UPGRADES & ABILITIES CONFIGURATION ================= */
/*
 * This file contains all upgrade definitions and ability types.
 * Add new upgrades here with their price levels and effects.
 * Each upgrade has:
 * - id: unique identifier
 * - name: display name
 * - stat: which property to boost
 * - description: what the upgrade does
 * - levels: array of {price, percent/amount} for each upgrade level
 */

const ABILITY_TYPES = {
  'fireBeeAbility': {
    name: 'Fire',
    desc: 'Burns 1-5 random tiles with fire.',
    color: '#FF4500',
    img: 'ability_fire.png'
  },
  'spicyAbility': {
    name: 'Spicy',
    desc: 'Generates spices in 2-4 tiles.',
    color: '#FF1493',
    img: 'ability_spicy.png'
  },
  'demonBeeAbility': {
    name: 'Dark Aura',
    desc: 'Creates a dark aura that destroys 1-3 tiles.',
    color: '#8B008B',
    img: 'ability_demonbee.png'
  },
  'laserBeeAbility': {
    name: 'Laser Beam',
    desc: 'Fires a laser beam that crosses the field.',
    color: '#00FF00',
    img: 'ability_laserbee.png'
  },
  'teslaBeeAbility': {
    name: 'Tesla Shock',
    desc: 'Generates electrical discharges in multiple tiles.',
    color: '#FFD700',
    img: 'ability_teslabeea.png'
  },
  'thunderBeeAbility': {
    name: 'Thunder',
    desc: 'Creates energy tiles with thunder.',
    color: '#4169E1',
    img: 'ability_thunderbee.png'
  },
  'gooAbility': {
    name: 'Goo',
    desc: 'Generates a magical sticky substance.',
    color: '#FF69B4',
    img: 'ability_goo.png'
  },
  'photonAbility': {
    name: 'Photon Beam',
    desc: 'Fires a golden photon beam.',
    color: '#FFD700',
    img: 'ability_photon.png'
  },
  'digitalRandomEffect': {
    name: 'Digital Glitch',
    desc: 'Random effect from the digital world.',
    color: '#00FF00',
    img: 'ability_digital.png'
  },
  'digitalGlitch': {
    name: 'Digital Corruption',
    desc: 'Corrupts tiles with digital glitch.',
    color: '#00FF00',
    img: 'ability_digitalglitch.png'
  },
  'moonBeeAbility': {
    name: 'Moon Laser',
    desc: 'Fires a moonlight beam.',
    color: '#E0FFFF',
    img: 'ability_moonbee.png'
  },
  'lionBeeAutoDestruct': {
    name: 'Roar',
    desc: 'Destroys 3 tiles with a powerful roar.',
    color: '#FFA500',
    img: 'ability_lionbee.png'
  },
  'fourFormation': {
    name: 'Four Elements',
    desc: 'Invokes the four natural elements.',
    color: '#9370DB',
    img: 'ability_four.png'
  },
  'gummyBee': {
    name: 'Goo Creation',
    desc: 'Creates magical goo tiles with animated colors.',
    color: '#FF69B4',
    img: 'goo.png'
  },
  'royalGuard': {
    name: 'Critical Spike',
    desc: 'Grants massive critical chance boost.',
    color: '#DC143C',
    img: 'ability_royalguard.png'
  },
  'teslaBee': {
    name: 'Tesla Lasers',
    desc: 'Generates 5 blue laser beams with energy buff.',
    color: '#4169E1',
    img: 'ability_teslabeeb.png'
  },
  'photonBee': {
    name: 'Photon Blast',
    desc: 'Destroys multiple tiles with golden laser effect.',
    color: '#FFD700',
    img: 'ability_photonbee.png'
  },
  'digitalBee': {
    name: 'Digital Effects',
    desc: 'Random digital world effects and glitch corruption.',
    color: '#00FF00',
    img: 'ability_digitalbee.png'
  },
  'goldenQueen': {
    name: 'Golden Queen',
    desc: 'Massive conversion rate boost with basic bees.',
    color: '#FFD700',
    img: 'ability_goldenqueen.png'
  },
  'fuzzyBuff': {
    name: 'Fuzzy Buff',
    desc: 'Grants massive pollen boost every 20 tiles.',
    color: '#9932CC',
    img: 'ability_fuzzybuff.png'
  },
  'ticketBee': {
    name: 'Ticket Generation',
    desc: 'Chance to generate tickets every minute.',
    color: '#9370DB',
    img: 'ability_ticketbee.png'
  }
};

const UPGRADES=[
{
id:"pollen",
name:"Pollen Power",
img:"pollen_upgrade.png",
stat:"pollenBonus",
description:"Increases pollen gained from each tile destruction",
levels:[
{price:10,percent:5},
{price:30,percent:5},
{price:50,percent:5},
{price:100,percent:10},
{price:750,percent:10},
{price:4500,percent:10},
{price:12000,percent:10},
{price:50000,percent:10},
{price:250000,percent:30},
{price:1000000,percent:50},
{price:3500000,percent:50},
{price:12000000,percent:100},
{price:50000000,percent:100},
]
},
{
id:"convert",
name:"Convert Rate",
img:"convert_upgrade.png",
stat:"convertBonus",
description:"Boosts the conversion rate of pollen into honey",
levels:[
{price:50,percent:10},
{price:250,percent:10},
{price:1500,percent:5},
{price:100,percent:10},
{price:750,percent:10},
{price:4500,percent:10},
{price:12000,percent:10},
{price:50000,percent:10},
{price:250000,percent:30},
{price:1000000,percent:50},
{price:3500000,percent:50},
{price:12000000,percent:100},
{price:50000000,percent:100},
]
},
{
id:"criticalChance",
name:"Crit Chance",
img:"critical_chance_upgrade.png",
stat:"criticalChance",
description:"Increases the probability of critical hits",
levels:[
{price:200,percent:5},
{price:500,percent:8},
{price:1200,percent:10}
]
},
{
id:"criticalPower",
name:"Crit Power",
img:"critical_power_upgrade.png",
stat:"criticalPower",
description:"Amplifies the damage multiplier of critical hits",
levels:[
{price:300,percent:0.5},
{price:800,percent:0.75},
{price:2000,percent:1}
]
},
{
id:"instantConversion",
name:"Instant Conv",
img:"instant_conversion_upgrade.png",
stat:"instantConversion",
description:"Instantly converts a portion of pollen to honey",
levels:[
{price:250,percent:10},
{price:650,percent:15},
{price:1500,percent:20}
]
},
{
id:"maxSlots",
name:"🐝 Buy Bee Slots",
img:"bee_basic.png",
stat:"maxSlots",
description:"Allows equipping more bees simultaneously",
levels:[
{price:100,amount:1}, 
{price:250,amount:1}, //5

{price:500,amount:1},
{price:2000,amount:1},
{price:7500,amount:1},
{price:30000,amount:1},
{price:100000,amount:1}, //10

{price:500000,amount:1},
{price:2000000,amount:1},
{price:7500000,amount:1},
{price:15000000,amount:1},
{price:40000000,amount:1}, //15 = 40m

{price:100000000,amount:1},
{price:300000000,amount:1},
{price:750000000,amount:1},
{price:1000000000,amount:1},
{price:5000000000,amount:1}, //20 = 5b

{price:25000000000,amount:1},
{price:50000000000,amount:1},
{price:75000000000,amount:1},
{price:100000000000,amount:1},
{price:150000000000,amount:1}, //25 mid game

{price:250000000000,amount:1},
{price:500000000000,amount:1},
{price:750000000000,amount:1},
{price:1000000000000,amount:1},
{price:5000000000000,amount:1}, //30 = 5t

{price:100000000,amount:1},
{price:100000000,amount:1},
{price:100000000,amount:1},
{price:100000000,amount:1},
{price:100000000,amount:1}, //35

{price:100000000,amount:1},
{price:100000000,amount:1},
{price:100000000,amount:1},
{price:100000000,amount:1},
{price:100000000,amount:1}, //40

{price:100000000,amount:1},
{price:100000000,amount:1},
{price:100000000,amount:1},
{price:100000000,amount:1},
{price:100000000,amount:1}, //45

{price:100000000,amount:1},
{price:100000000,amount:1},
{price:100000000,amount:1},
{price:100000000,amount:1},
{price:100000000,amount:1}  //50 end game

]
}
];

/* Color Pollen Upgrades - separate category */
const POLLEN_COLOR_UPGRADES=[
{
id:"redPollen",
name:"🔴 Red Pollen",
img:"pollen_upgrade.png",
stat:"redBonus",
description:"Improves efficiency of red pollen collection",
levels:[
{price:500,percent:10},
{price:1500,percent:15},
{price:4000,percent:20},
{price:15000,percent:30}
]
},
{
id:"whitePollen",
name:"⚪ White Pollen",
img:"pollen_upgrade.png",
stat:"whiteBonus",
description:"Improves efficiency of white pollen collection",
levels:[
{price:500,percent:10},
{price:1500,percent:15},
{price:4000,percent:20},
{price:15000,percent:30}
]
},
{
id:"bluePollen",
name:"🔵 Blue Pollen",
img:"pollen_upgrade.png",
stat:"blueBonus",
description:"Improves efficiency of blue pollen collection",
levels:[
{price:500,percent:10},
{price:1500,percent:15},
{price:4000,percent:20},
{price:15000,percent:30}
]
},
{
id:"yellowPollen",
name:"💛 Yellow Pollen",
img:"pollen_upgrade.png",
stat:"yellowBonus",
description:"Improves efficiency of yellow pollen collection",
levels:[
{price:500,percent:10},
{price:1500,percent:15},
{price:4000,percent:20},
{price:15000,percent:30}
]
},
{
id:"purplePollen",
name:"💜 Purple Pollen",
img:"pollen_upgrade.png",
stat:"purpleBonus",
description:"Improves efficiency of purple pollen collection",
levels:[
{price:500,percent:10},
{price:1500,percent:15},
{price:4000,percent:20},
{price:15000,percent:30}
]
}
];

/* Tile Upgrades */
const TILE_UPGRADES=[
{
id:"gooTilePercent",
name:"Goo Tile %",
img:"goo.png",
stat:"maxGooTiles",
description:"Increases the maximum amount of goo tiles that can appear",
levels:[
{price:1000,amount:1},
{price:3000,amount:1},
{price:7500,amount:1},
{price:20000,amount:1},
{price:50000,amount:1}
]
},
{
id:"growSpeed",
name:"Grow Speed",
img:"bean.png",
stat:"tileRegenerationRange",
description:"Modifies tile regeneration speed range",
levels:[
{price:2000,regenerationRange:{min:400,max:1600}},
{price:5000,regenerationRange:{min:300,max:1300}},
{price:12000,regenerationRange:{min:200,max:1000}},
{price:30000,regenerationRange:{min:100,max:800}}
]
},
{
id:"automaticTorret",
name:"Automatic Torret",
img:"torret_upgrade.png",
stat:"torretTiles",
description:"Automatically destroys random tiles every 30s. Each upgrade destroys +3 tiles",
levels:[
{price:15000,tilesPerShot:2,interval:30000},
{price:40000,tilesPerShot:2,interval:30000},
{price:100000,tilesPerShot:2,interval:30000},
{price:250000,tilesPerShot:2,interval:30000},
{price:600000,tilesPerShot:2,interval:30000}
]
},
{
id:"playerRank",
name:"Player Rank",
img:"rank.png",
stat:"playerRank",
description:"Grants powerful buffs based on rank tier",
levels:[
{price:50000,rank:"copper",img:"rankcopper.png",color:"#B87333",pollenBonus:10,convertBonus:5,capacityBonus:100000,honeyBonus:2,
  desc: '🟧 COPPER: +10% pollen, +5% convert, +100k capacity, +2% honey'},
{price:150000,rank:"silver",img:"ranksilver.png",color:"#C0C0C0",pollenBonus:20,convertBonus:15,capacityBonus:500000,criticalChance:5,honeyBonus:5,
  desc: '⚪ SILVER: +20% pollen, +15% convert, +500k capacity, +5% crit, +5% honey'},
{price:400000,rank:"golden",img:"rankgolden.png",color:"#FFD700",pollenBonus:50,convertBonus:50,capacityBonus:2000000,criticalChance:15,criticalPower:0.2,honeyBonus:15,fireMultiplier:1.1,
  desc: '🟨 GOLDEN: +50% pollen, +50% convert, +2M capacity, +15% crit, +0.2 crit power, +15% honey, x1.1 fire'},
{price:1000000,rank:"diamond",img:"rankdiamond.png",color:"#7EF9FF",pollenBonus:100,convertBonus:150,capacityBonus:10000000,criticalChance:25,criticalPower:0.5,honeyBonus:30,fireMultiplier:1.3,darkFireMultiplier:1.2,
  desc: '🔷 DIAMOND: +100% pollen, +150% convert, +10M capacity, +25% crit, +0.5 crit power, +30% honey, x1.3 fire, x1.2 dark fire'},
{price:2500000,rank:"mythic",img:"rankmythic.png",color:"#FF1493",pollenBonus:200,convertBonus:300,capacityBonus:50000000,criticalChance:50,criticalPower:1.0,superCriticalChance:5,honeyBonus:75,fireMultiplier:1.5,darkFireMultiplier:1.5,gooMultiplier:1.5,
  desc: '💜 MYTHIC: +200% pollen, +300% convert, +50M capacity, +50% crit, +1.0 crit power, +5% super-crit, +75% honey, x1.5 fire/dark fire/goo'},
{price:5000000,rank:"celestial",img:"rankcelestial.png",color:"#FF00FF",pollenBonus:500,convertBonus:500,capacityBonus:150000000,criticalChance:100,criticalPower:2.0,superCriticalChance:10,honeyBonus:150,fireMultiplier:2.0,darkFireMultiplier:2.0,gooMultiplier:2.0,
  desc: '✨ CELESTIAL: +500% pollen, +500% convert, +150M capacity, +100% crit, +2.0 crit power, +10% super-crit, +150% honey, x2.0 fire/dark fire/goo'},
{price:10000000,rank:"transcendent",img:"ranktranscendent.png",color:"#00FFFF",pollenBonus:1000,convertBonus:1000,capacityBonus:500000000,criticalChance:200,criticalPower:5.0,superCriticalChance:25,honeyBonus:300,fireMultiplier:3.0,darkFireMultiplier:3.0,gooMultiplier:3.0,
  desc: '🌟 TRANSCENDENT: +1000% pollen, +1000% convert, +500M capacity, +200% crit, +5.0 crit power, +25% super-crit, +300% honey, x3.0 all effects'}
]
}
];
