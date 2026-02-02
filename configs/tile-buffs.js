/* ================= TILE BUFFS/EFFECTS CONFIGURATION ================= */
/*
 * This file contains all tile effects and buffs that can appear on tiles
 * Add new tile effects here with their properties, visuals, and mechanics
 */

const TILE_BUFFS = {
  // Fire tiles - created by Fire Bee ability
  fire: {
    id: "fire",
    name: "Fire",
    desc: "Burning tile - destroys nearby tiles",
    color: "#FF4500",
    effect: "destroys",
    spreadChance: 0.3,
    spreadRange: 2,
    duration: 5000,
    multiplier: 2
  },

  // Dark Fire tiles - created by Demon Bee ability
  darkFire: {
    id: "darkFire",
    name: "Dark Fire",
    desc: "Dark burning tile - stronger destruction",
    color: "#8B0000",
    effect: "destroys",
    spreadChance: 0.4,
    spreadRange: 3,
    duration: 7000,
    multiplier: 7
  },

  // Goo tiles - created by Goo abilities
  goo: {
    id: "goo",
    name: "Goo",
    desc: "Sticky substance - slows movement",
    color: "#FF69B4",
    effect: "slowness",
    sticky: true,
    pollenBonus: 1.5,
    duration: 10000
  },

  // Spicy tiles - created by Spicy Bee ability
  spicy: {
    id: "spicy",
    name: "Spicy",
    desc: "Hot tile - increases collection speed",
    color: "#FF1493",
    effect: "speedBoost",
    speedMultiplier: 1.3,
    duration: 8000
  },

  // Energy tiles - created by Tesla/Thunder Bee abilities
  energy: {
    id: "energy",
    name: "Energy",
    desc: "Electrical energy - chains to nearby tiles",
    color: "#FFD700",
    effect: "chain",
    chainChance: 0.6,
    chainRange: 3,
    duration: 6000,
    damageBoost: 1.5
  },

  // Crimson effect - from Crimson buff
  crimson: {
    id: "crimson",
    name: "Crimson",
    desc: "Crimson glow - high pollen multiplier",
    color: "#DC143C",
    effect: "pollenBoost",
    pollenMultiplier: 4,
    critChance: 0.2,
    duration: 30000
  },

  // Enhanced Goo effect - from Enhanced Goo buff
  enhancedGoo: {
    id: "enhancedGoo",
    name: "Enhanced Goo",
    desc: "Enhanced goo substance - increased collection",
    color: "#FF1493",
    effect: "gooEnhance",
    pollenMultiplier: 5,
    critChance: 0.3,
    duration: 30000,
    sparkles: true
  },

  // Critical Error effect - from Critical Error buff
  criticalError: {
    id: "criticalError",
    name: "Critical Error",
    desc: "Digital glitch - auto-destructs",
    color: "#750000",
    effect: "autoDestruct",
    pollenMultiplier: 10,
    critChance: 1.0,
    duration: 10000,
    autoDestructTime: 10000,
    glitchEffect: true
  },

  // Laser tiles - from Laser Bee ability
  laser: {
    id: "laser",
    name: "Laser",
    desc: "Laser beam - destroys in a line",
    color: "#00FF00",
    effect: "lineDestroy",
    range: 15,
    duration: 3000,
    destructive: true
  },

  // Digital tiles - from Digital Bee ability
  digital: {
    id: "digital",
    name: "Digital",
    desc: "Digital glitch effect - random effects",
    color: "#00FF00",
    effect: "randomEffect",
    randomEffects: ["destroy", "multiply", "buff"],
    duration: 5000,
    glitchEffect: true
  },

  // Moon Laser tiles - from Moon Bee ability
  moonLaser: {
    id: "moonLaser",
    name: "Moon Laser",
    desc: "Moonlight laser - devastating destruction",
    color: "#E0FFFF",
    effect: "lineDestroy",
    range: 20,
    duration: 4000,
    destructive: true,
    pollenMultiplier: 2
  },

  // Four Formation tiles - from Four Bee ability
  fourFormation: {
    id: "fourFormation",
    name: "Four Elements",
    desc: "Four elemental formation",
    color: "#9370DB",
    effect: "areaDestroy",
    areaSize: 4,
    duration: 8000,
    multiplier: 3
  }
};
