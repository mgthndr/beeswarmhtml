/* ================= TOOLS CONFIGURATION ================= */
/*
 * This file contains all tool definitions with their patterns and abilities.
 * Add new tools here with all their configuration, patterns, and descriptions.
 * Each tool has:
 * - id: unique identifier
 * - name, rarity, price
 * - cooldown: time between uses (ms)
 * - pollenBonus: percentage bonus to pollen
 * - pattern: 9x9 array of destruction tiles (1 = destroyed, 0 = no effect)
 * - desc, ability: descriptions
 */

const TOOLS = [
  {
    id:"shovel",
    name:"Shovel",
    rarity:"common",
    price:0,
    cooldown:2000,
    pollenBonus:0,
    img:"tool_shovel.png",
    pattern:[
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,1,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0]
    ],
    desc:"Basic tool. Breaks 1 tile.",
    ability:"No special ability."
  },
  {
    id:"porcelain_grandmaster",
    name:"Grandmaster Porcelain",
    rarity:"ultimate",
    price:10,
    cooldown:3000,
    pollenBonus:300,
    bonuses:{pollenBonus:500},
    img:"tool_grandmaster.png",
    pattern:[
      [0,0,1,1,1,1,1,0,0],
      [0,1,1,1,1,1,1,1,0],
      [1,1,1,1,1,1,1,1,1],
      [1,1,1,1,1,1,1,1,1],
      [1,1,1,1,1,1,1,1,1],
      [1,1,1,1,1,1,1,1,1],
      [1,1,1,1,1,1,1,1,1],
      [0,1,1,1,1,1,1,1,0],
      [0,0,1,1,1,1,1,0,0]
    ],
    desc:"Master tool of porcelain craftsmanship.",
    ability:"Grandmaster Effect: After 200 tiles destroyed, activate 30s buff: +3000% pollen, +20% crit, x2 color multipliers."
  },
];

/* ================= TOOL BUFFS MAP ================= */
/*
 * Maps each tool to its static buff values applied to player stats.
 * Tools provide passive bonuses that enhance gameplay mechanics.
 * 
 * Supported buff properties:
 * - pollenBonus: adds to total pollen percentage
 * - convertBonus: adds to conversion rate percentage
 * - instantConversion: adds to instant conversion percentage
 * - criticalChance: adds to critical chance percentage
 * - criticalPower: adds to critical power multiplier
 * - superCriticalChance: adds to super critical chance percentage
 * - capacityBonus: adds to max pollen capacity
 * - toolCooldownReduction: reduces tool cooldown (0.05 = -5%)
 * - honeyBonus: adds to honey generation percentage
 * - gooMultiplier: multiplier for goo effects
 * - fireMultiplier: multiplier for fire effects
 * - darkFireMultiplier: multiplier for dark fire effects
 * - colorMultipliers: per-color pollen multipliers
 */
const TOOL_BUFFS_MAP = {
  'shovel': { convertBonus: 5, pollenBonus: 2, colorMultipliers: {red: 1.05}, toolCooldownReduction: 0.02 },
  'rake': { pollenBonus: 10, toolCooldownReduction: 0.03 },
  'pickaxe': { convertBonus: 10, pollenBonus: 5, criticalChance: 1, colorMultipliers: {blue: 1.08}, toolCooldownReduction: 0.04 },
  'axe': { convertBonus: 15, pollenBonus: 8, criticalChance: 2, colorMultipliers: {red: 1.1}, toolCooldownReduction: 0.05 },
  'hoe': { convertBonus: 20, pollenBonus: 10, criticalChance: 3, criticalPower: 0.05, colorMultipliers: {yellow: 1.12}, toolCooldownReduction: 0.06 },
  'porcelain_grandmaster': { pollenBonus: 50, convertBonus: 100, capacityBonus: 10000, honeyBonus: 20, colorMultipliers: {red: 1.2, blue: 1.2}, toolCooldownReduction: 0.10 },
  'porcelain_dipper': { pollenBonus: 20, convertBonus: 50, criticalChance: 5, honeyBonus: 10, colorMultipliers: {white: 1.15}, toolCooldownReduction: 0.07 },
  'porcelain_pot': { capacityBonus: 25000, pollenBonus: 15, honeyBonus: 15, colorMultipliers: {yellow: 1.1}, toolCooldownReduction: 0.08 },
  'porcelain_vase': { convertBonus: 75, pollenBonus: 25, criticalPower: 0.10, honeyBonus: 25, colorMultipliers: {purple: 1.18}, toolCooldownReduction: 0.09 },
  'porcelain_urn': { convertBonus: 150, pollenBonus: 50, criticalChance: 10, criticalPower: 0.20, honeyBonus: 50, colorMultipliers: {red: 1.25, blue: 1.25, white: 1.25}, toolCooldownReduction: 0.12 }
};
