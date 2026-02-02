/* ================= STORAGE CONFIGURATION ================= */
/*
 * This file contains all storage definitions with their properties.
 * Add new storage items here with all their configuration.
 */

const STORAGE = [
  {id:'pouch',rarity:'common',name:'Pouch',price:50,desc:'Small pouch for carrying pollen. Increases capacity by +50',bonuses:{pollenCapacity:50},img:'storage_pouch.png',ability:'Basic Storage: Lightweight pouch for small pollen amounts.'},
  {id:'jar',rarity:'rare',name:'Jar',price:650,desc:'Glass jar for storing pollen. Increases capacity by +800',bonuses:{pollenCapacity:800},img:'storage_jar.png',ability:'Glass Preservation: +800 capacity. Protects pollen quality.'},
  {id:'backpack',rarity:'epic',name:'Backpack',price:4500,desc:'Spacious backpack for large amounts of pollen. Increases capacity by +5,200',bonuses:{pollenCapacity:5200},img:'storage_backpack.png',ability:'Efficient Storage: +5,200 capacity. Faster pollen access.'},
  {id:'canister',rarity:'epic',name:'Canister',price:22000,desc:'Reinforced metal canister for pollen storage. Increases capacity by +10,000',bonuses:{pollenCapacity:10000},img:'storage_canister.png',ability:'Metal Reinforcement: +10,000 capacity. Durable construction.'},
  {id:'megajug',rarity:'legendary',name:'Mega Jug',price:75000,desc:'Massive jug with advanced compression. Increases capacity by +32,000',bonuses:{pollenCapacity:32000},img:'storage_megajug.png',ability:'Compression Tech: +32,000 capacity. Advanced compression system.'},
  {id:'compressor',rarity:'legendary',name:'Compressor',price:250000,desc:'Mechanical compressor for ultra-dense storage. Increases capacity by +100,000',bonuses:{pollenCapacity:100000},img:'storage_compressor.png',ability:'Ultra Compression: +100,000 capacity. Mechanical advantage.'},
  {id:'elitebarrel',rarity:'epic',name:'Elite Barrel',price:18000,desc:'Superior barrel craftsmanship. Increases capacity by +8,500',bonuses:{pollenCapacity:8500},img:'storage_elitebarrel.png',ability:'Elite Crafted: +8,500 capacity. Enhanced durability.'},
  {id:'coconut_bag',rarity:'mythic',name:'Coconut Canister',price:20,desc:'Legendary coconut-woven bag with infinite potential. Increases capacity by +250M',bonuses:{pollenCapacity:250000000},img:'storage_coconutcanister.png',ability:'Coconut Buff: Store 1M pollen → 30s buff: +500% pollen, white x3.'},
  {id:'Void Core',rarity:'ultimate',name:'Void Core',price:20,desc:'',bonuses:{pollenCapacity:10000000000000000000},img:'storage_voidceller.png',ability:''},
];

/* ================= STORAGE BUFFS MAP ================= */
/*
 * Maps each storage container to its static buff values applied to player stats.
 * Storage containers provide capacity bonuses, pollen modifiers, and various multipliers.
 * 
 * Supported buff properties:
 * - pollenBonus: adds to total pollen percentage
 * - convertBonus: adds to conversion rate percentage
 * - instantConversion: adds to instant conversion percentage
 * - criticalChance: adds to critical chance percentage
 * - criticalPower: adds to critical power multiplier
 * - superCriticalChance: adds to super critical chance percentage
 * - capacityBonus: adds to max pollen capacity
 * - honeyBonus: adds to honey generation percentage
 * - gooMultiplier: multiplier for goo effects
 * - gooPollenCollected: adds to goo pollen earned
 * - fireMultiplier: multiplier for fire effects
 * - darkFireMultiplier: multiplier for dark fire effects
 * - backpackBonus: adds to backpack capacity
 * - colorMultipliers: per-color pollen multipliers
 */
const STORAGE_BUFFS_MAP = {
  'pouch': { capacityBonus: 50, pollenBonus: 1, colorMultipliers: {white: 1.02} },
  'jar': { capacityBonus: 800, pollenBonus: 2, colorMultipliers: {white: 1.05} },
  'backpack': { capacityBonus: 5200, pollenBonus: 5, convertBonus: 2, colorMultipliers: {red: 1.03} },
  'canister': { capacityBonus: 10000, pollenBonus: 8, convertBonus: 3, colorMultipliers: {blue: 1.04} },
  'megajug': { capacityBonus: 32000, pollenBonus: 12, convertBonus: 5, criticalChance: 2, colorMultipliers: {yellow: 1.06} },
  'compressor': { capacityBonus: 100000, pollenBonus: 25, convertBonus: 10, criticalChance: 5, colorMultipliers: {blue: 1.10} },
  'elitebarrel': { capacityBonus: 8500, pollenBonus: 6, convertBonus: 3, honeyBonus: 5, colorMultipliers: {red: 1.05, purple: 1.05} },
  'bucket': { capacityBonus: 1500, pollenBonus: 3, convertBonus: 1, colorMultipliers: {white: 1.03} },
  'digitalcanister': { capacityBonus: 120000, pollenBonus: 30, convertBonus: 15, criticalChance: 8, honeyBonus: 10, colorMultipliers: {blue: 1.15} },
  'gummycore': { capacityBonus: 6800, pollenBonus: 8, gooMultiplier: 2.0, gooPollenCollected: 30, colorMultipliers: {white: 1.08, purple: 1.08} },
  'marenflower': { capacityBonus: 4500, pollenBonus: 5, convertBonus: 2, honeyBonus: 8, colorMultipliers: {red: 1.05, yellow: 1.06} },
  'porcelaincanister': { capacityBonus: 110000, pollenBonus: 28, convertBonus: 12, criticalChance: 10, criticalPower: 0.25, honeyBonus: 15, colorMultipliers: {white: 1.15, blue: 1.12} },
  'voidceller': { capacityBonus: 500000000, pollenBonus: 100, convertBonus: 50, criticalChance: 20, criticalPower: 1.0, superCriticalChance: 5, honeyBonus: 100, colorMultipliers: {red: 1.30, blue: 1.30, white: 1.30, yellow: 1.30, purple: 1.30} },
  'coconut_bag': { capacityBonus: 250000000, pollenBonus: 80, convertBonus: 40, criticalChance: 15, honeyBonus: 50, gooMultiplier: 1.5, colorMultipliers: {white: 3.0, yellow: 1.25} }
};
