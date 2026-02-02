/* ================= RARITY SYSTEM CONFIGURATION ================= */
/*
 * This file contains all rarity definitions, colors, values and conversion rates
 * Add new rarities here or modify existing ones
 */

const RARITY_CONFIG = {
  // Color definitions for each rarity
  colors: {
    common: "#815718",
    rare: "#cecece",
    epic: "#fde723",
    legendary: "#00eeff",
    mythic: "#4e1564",
    ultimate: "#FF00FF"
  },

  // Rarity conversion values (used for egg conversions and special mechanics)
  conversionValues: {
    common: 20,
    rare: 60,
    epic: 150,
    legendary: 300,
    mythic: 500,
    ultimate: 1000
  },

  // Display order
  order: ["common", "rare", "epic", "legendary", "mythic", "ultimate"],

  // Descriptions
  descriptions: {
    common: "Common - Standard tier",
    rare: "Rare - Enhanced tier",
    epic: "Epic - Powerful tier",
    legendary: "Legendary - Extreme tier",
    mythic: "Mythic - Ultimate tier",
    ultimate: "Ultimate - Transcendent tier"
  },

  // Tier levels (for internal calculations)
  tiers: {
    common: 1,
    rare: 2,
    epic: 3,
    legendary: 4,
    mythic: 5,
    ultimate: 6
  },

  // Value multipliers for pricing
  priceMultipliers: {
    common: 1,
    rare: 5,
    epic: 25,
    legendary: 150,
    mythic: 1000,
    ultimate: 10000
  },

  // Probability for randomization
  probabilities: {
    common: 0.50,
    rare: 0.30,
    epic: 0.15,
    legendary: 0.04,
    mythic: 0.009,
    ultimate: 0.0005
  }
};

// Rarity-specific themes and styling
const RARITY_THEMES = {
  common: {
    bgColor: "#1a1a1a",
    textColor: "#A9A9A9",
    borderColor: "#555555",
    shadowColor: "rgba(169, 169, 169, 0.3)",
    frameBorderColor: "none",
    frameSize: 0,
    frameGlow: "none"
  },
  rare: {
    bgColor: "#666e7e",
    textColor: "#858585",
    borderColor: "#505050",
    shadowColor: "rgba(56, 56, 56, 0.3)",
    frameBorderColor: "#C0C0C0",
    frameSize: 3,
    frameGlow: "0 0 6px rgba(192, 192, 192, 0.5)"
  },
  epic: {
    bgColor: "#885113",
    textColor: "#dbd970",
    borderColor: "#fad21e",
    shadowColor: "rgba(201, 86, 40, 0.3)",
    frameBorderColor: "#FFD700",
    frameSize: 3,
    frameGlow: "0 0 8px rgba(255, 215, 0, 0.6)"
  },
  legendary: {
    bgColor: "#0a333a",
    textColor: "#31bae4",
    borderColor: "#0dfada",
    shadowColor: "rgba(0, 119, 128, 0.3)",
    frameBorderColor: "#00CED1",
    frameSize: 3,
    frameGlow: "0 0 10px rgba(0, 206, 209, 0.8)"
  },
  mythic: {
    bgColor: "#3a0a2a",
    textColor: "#FF1493",
    borderColor: "#C71585",
    shadowColor: "rgba(255, 20, 147, 0.3)",
    frameBorderColor: "#9b59b6",
    frameSize: 3,
    frameGlow: "0 0 8px rgba(155, 89, 182, 0.6), inset 0 0 8px rgba(155, 89, 182, 0.3)"
  },
  ultimate: {
    bgColor: "#0a001a",
    textColor: "#FF00FF",
    borderColor: "#FF00FF",
    shadowColor: "rgba(255, 0, 255, 0.5)",
    frameBorderColor: "#FF00FF",
    frameSize: 3,
    frameGlow: "rainbow-border",
    frameAnimation: "rainbow-border 5s linear infinite"
  },
  special: {
    bgColor: "#001a0a",
    textColor: "#1CFF7C",
    borderColor: "#1CFF7C",
    shadowColor: "rgba(28, 255, 124, 0.5)",
    frameBorderColor: "#1CFF7C",
    frameSize: 3,
    frameGlow: "0 0 12px rgba(28, 255, 124, 0.8), inset 0 0 8px rgba(28, 255, 124, 0.3)"
  }
};

// Rarity effect definitions (visual effects)
const RARITY_EFFECTS = {
  common: {
    animation: "none",
    glow: "none",
    particle: false
  },
  rare: {
    animation: "rarity-rare-glow 2s ease-in-out infinite",
    glow: "0 0 10px #b9cbff",
    particle: false
  },
  epic: {
    animation: "rarity-epic-glow 1.5s ease-in-out infinite",
    glow: "0 0 15px #ffd724",
    particle: true
  },
  legendary: {
    animation: "rarity-legendary-glow 1s ease-in-out infinite",
    glow: "0 0 20px #00ffff",
    particle: true,
    sparkles: true
  },
  mythic: {
    animation: "rarity-mythic-glow 0.8s ease-in-out infinite",
    glow: "0 0 25px #FF1493",
    particle: true,
    sparkles: true,
    pulse: true
  },
  ultimate: {
    animation: "rarity-ultimate-glow 0.6s ease-in-out infinite",
    glow: "0 0 30px #FF00FF, 0 0 60px #FF1493",
    particle: true,
    sparkles: true,
    pulse: true,
    rainbow: true
  }
};
