/**
 * DIAGNÓSTICO COMPLETO DEL SISTEMA
 * Ejecutar en F12 > Console cuando la página cargue
 */

console.log('╔════════════════════════════════════════════════════════════╗');
console.log('║  DIAGNÓSTICO COMPLETO - BEE SWARM SIMULATOR               ║');
console.log('╚════════════════════════════════════════════════════════════╝\n');

// 1. CONFIG LOAD STATUS
console.log('1️⃣  CONFIG FILES STATUS:');
console.table(window.configLoadStatus || {
  bees: typeof BEES,
  storage: typeof STORAGE,
  fields: typeof fields,
  tools: typeof TOOLS,
  upgrades: typeof UPGRADES,
  playerStats: typeof PLAYER_STATS,
  tileBuffs: typeof TILE_BUFFS,
  rarities: typeof RARITY_CONFIG
});

// 2. UPGRADES DATA
console.log('\n2️⃣  UPGRADES DATA:');
console.log('  UPGRADES:', typeof UPGRADES, Array.isArray(UPGRADES) ? `(${UPGRADES.length} items)` : '');
console.log('  POLLEN_COLOR_UPGRADES:', typeof POLLEN_COLOR_UPGRADES, Array.isArray(POLLEN_COLOR_UPGRADES) ? `(${POLLEN_COLOR_UPGRADES.length} items)` : '');
console.log('  TILE_UPGRADES:', typeof TILE_UPGRADES, Array.isArray(TILE_UPGRADES) ? `(${TILE_UPGRADES.length} items)` : '');

// 3. INITIALIZED VARIABLES
console.log('\n3️⃣  INITIALIZED VARIABLES:');
console.log('  upgradeLevels keys:', Object.keys(upgradeLevels).length);
console.log('  tileUpgradeLevels keys:', Object.keys(tileUpgradeLevels).length);
console.log('  stats object keys:', Object.keys(stats).length);

// 4. DOM ELEMENTS
console.log('\n4️⃣  DOM ELEMENTS:');
const domChecks = {
  'upgrades container': !!document.getElementById('upgrades'),
  'grid container': !!document.getElementById('grid'),
  'stats display': !!document.getElementById('pollen'),
  'field list': !!document.getElementById('fieldList'),
  'convert button': !!document.getElementById('convertBtn'),
  'toggle fields btn': !!document.getElementById('toggleFieldListBtn')
};
Object.entries(domChecks).forEach(([name, exists]) => {
  console.log(`  ${exists ? '✅' : '❌'} ${name}`);
});

// 5. RENDERED ELEMENTS
console.log('\n5️⃣  RENDERED ELEMENTS:');
console.log('  Upgrade frames:', document.querySelectorAll('.upgrade-frame').length);
console.log('  Tiles in grid:', document.querySelectorAll('.tile').length);
console.log('  Bee frames:', document.querySelectorAll('.bee-frame').length);

// 6. GLOBAL FUNCTIONS
console.log('\n6️⃣  GLOBAL FUNCTIONS:');
const functions = ['buildUpgrades', 'buildGrid', 'buildFieldList', 'updateUI', 'buildTools', 'saveGame', 'loadGame'];
functions.forEach(fn => {
  console.log(`  ${typeof window[fn] !== 'undefined' ? '✅' : '❌'} ${fn}()`);
});

// 7. COMPLETE TEST
console.log('\n7️⃣  QUICK TEST - Call buildUpgrades():');
try {
  buildUpgrades();
  console.log('  ✅ buildUpgrades() executed successfully');
} catch(e) {
  console.error('  ❌ buildUpgrades() failed:', e.message);
}

console.log('\n╔════════════════════════════════════════════════════════════╗');
console.log('║  TROUBLESHOOTING GUIDE:                                    ║');
console.log('╠════════════════════════════════════════════════════════════╣');
console.log('║                                                            ║');
console.log('║ If configs are NOT loaded (say "undefined"):             ║');
console.log('║  1. Check that configs/ folder exists                    ║');
console.log('║  2. Verify file paths: configs/bees.js, etc.             ║');
console.log('║  3. Try F5 (reload) or Ctrl+Shift+Delete (clear cache)  ║');
console.log('║                                                            ║');
console.log('║ If DOM elements are NOT found:                           ║');
console.log('║  1. Page HTML is broken                                  ║');
console.log('║  2. Check HTML file syntax                               ║');
console.log('║  3. Look for red errors above this message               ║');
console.log('║                                                            ║');
console.log('║ If upgrade frames = 0:                                   ║');
console.log('║  1. UPGRADES config is not available                     ║');
console.log('║  2. buildUpgrades() returned early                       ║');
console.log('║  3. Check console for error messages                     ║');
console.log('║                                                            ║');
console.log('╚════════════════════════════════════════════════════════════╝\n');

// 8. COPY-PASTE FIXES
console.log('💡 HELPFUL COMMANDS TO TRY:\n');

console.log('// Force reload configs and UI:');
console.log('  Object.keys(UPGRADES).length && (upgradeLevels={}, UPGRADES.forEach(u=>upgradeLevels[u.id]=0), buildUpgrades(), true);');

console.log('\n// Force render all:');
console.log('  loadGame(); buildFieldList(); buildGrid(); buildUpgrades(); updateUI(); buildTools();');

console.log('\n// Show all upgrade levels:');
console.log('  console.table(upgradeLevels);');

console.log('\n// Manual upgrade test:');
console.log('  stats.honey += 100000; buildUpgrades();');
