# Phase 2 Testing Checklist

## Pre-Testing Verification ✅

### File Structure
- [x] configs/bees.js exists and exports BEES, SPECIAL_BEES, EGGS
- [x] configs/storage.js exists and exports STORAGE_ITEMS
- [x] configs/fields.js exists and exports FIELDS
- [x] configs/tools.js exists and exports TOOLS
- [x] configs/upgrades.js exists and exports UPGRADES, POLLEN_COLOR_UPGRADES, TILE_UPGRADES
- [x] configs/player-stats.js exists and exports PLAYER_STATS, PLAYER_TRACKING, ABILITY_STATES, SPECIAL_ABILITY_STATES, TILE_UPGRADE_STATES
- [x] configs/tile-buffs.js exists and exports TILE_BUFFS
- [x] configs/rarities.js exists and exports RARITY_CONFIG, RARITY_THEMES, RARITY_EFFECTS
- [x] beeswarm.html imports all 8 config files in correct order

### Code Quality
- [x] No JavaScript syntax errors in beeswarm.html
- [x] All config files have valid JavaScript syntax
- [x] No missing semicolons or bracket mismatches
- [x] Upgrade initialization uses defensive checks (typeof !== 'undefined')

### Data Validation
- [x] UPGRADES array has 6 items (pollen, convert, criticalChance, criticalPower, instantConversion, maxSlots)
- [x] POLLEN_COLOR_UPGRADES array has 5 items (redPollen, whitePollen, bluePollen, yellowPollen, purplePollen)
- [x] TILE_UPGRADES array has 2 items (gooTilePercent, growSpeed)
- [x] TILE_BUFFS has 13 effect types
- [x] RARITY_CONFIG has 5 rarities
- [x] Player stats initialized with correct default values

## Browser Testing (TODO - Run These Tests)

### Game Load Test
- [ ] Open beeswarm.html in browser
- [ ] Check browser console for errors
- [ ] Verify no red error messages appear
- [ ] Game UI should display normally

### Console Verification
- [ ] Open Developer Tools (F12)
- [ ] Check Console tab for warnings
- [ ] Expected: "✓ UPGRADES loaded from config" message
- [ ] No "undefined" references or "Cannot read property" errors

### Stats Display Test
- [ ] Check that player stats display (pollen, honey, capacity, etc.)
- [ ] Verify all stat values show correctly
- [ ] Click on a bee to verify rarity colors display
- [ ] Check that upgrade tooltips show correct descriptions

### Upgrade UI Test
- [ ] Open upgrades section
- [ ] Verify 3 category sections display:
  - [ ] "Stat Upgrades" (gold color #f1c40f)
  - [ ] "Pollen Color" (pink color #ff69b4) ← NEW
  - [ ] "Tile Upgrades" (gold color #f1c40f)
- [ ] Each section should have correct number of items:
  - [ ] Stat Upgrades: 6 items
  - [ ] Pollen Color: 5 items ← NEW
  - [ ] Tile Upgrades: 2 items
- [ ] Verify all upgrade cards display properly:
  - [ ] Name displayed
  - [ ] Description shown
  - [ ] Next level bonus shown (e.g., "+5%")
  - [ ] Price shown (in honey 🍯)
  - [ ] BUY button active (or MAX if fully upgraded)

### Purchase Test
- [ ] Click BUY on a Stat Upgrade
- [ ] Verify honey decreases
- [ ] Verify upgrade level increases
- [ ] Verify next level bonus updates
- [ ] Repeat for Pollen Color upgrade
- [ ] Repeat for Tile Upgrade
- [ ] Verify upgrade persists when section refreshes

### Save/Load Test
- [ ] Purchase several upgrades in each category
- [ ] Note the upgrade levels (e.g., Stat Upgrade Pollen at level 3)
- [ ] Refresh the page (F5)
- [ ] Verify all upgrade levels are restored
- [ ] Verify honey amount is restored
- [ ] Check that all stats are preserved

### Bonus Application Test
- [ ] Purchase a pollen upgrade and check:
  - [ ] Verify pollenBonus stat increased
  - [ ] Verify collected pollen increases by percentage
- [ ] Purchase a Pollen Color upgrade (e.g., Red Pollen) and check:
  - [ ] Verify redBonus stat increased
  - [ ] Verify red pollen collected increases by percentage
- [ ] Purchase Tile Upgrade and check:
  - [ ] Goo Tile % increases maxGooTiles
  - [ ] Grow Speed affects tile regeneration

### Config Data Verification
- [ ] In browser console, run: `console.log(UPGRADES)` → Should show 6 items
- [ ] In browser console, run: `console.log(POLLEN_COLOR_UPGRADES)` → Should show 5 items
- [ ] In browser console, run: `console.log(TILE_UPGRADES)` → Should show 2 items
- [ ] In browser console, run: `console.log(upgradeLevels)` → Should show all upgrade IDs as keys
- [ ] Verify all configs are objects/arrays (not undefined)

### Search Functionality Test
- [ ] Type in upgrade search box
- [ ] Verify search filters upgrades correctly
- [ ] Works for Stat Upgrades
- [ ] Works for Pollen Color upgrades
- [ ] Works for Tile Upgrades

### Edge Cases
- [ ] Close and reopen browser tab
- [ ] Verify game state loads from localStorage
- [ ] Buy upgrade to max level
- [ ] Verify BUY button changes to MAX
- [ ] Verify MAX button is disabled
- [ ] Start new save (clear localStorage)
- [ ] Verify all upgrades start at level 0

## Expected Results

### Console Output (on page load)
```
✓ UPGRADES loaded from config
```

### Upgrade Structure in Console
```javascript
UPGRADES = [
  {id: "pollen", name: "Pollen Power", ...},
  {id: "convert", name: "Convert Rate", ...},
  // ... 4 more items
]

POLLEN_COLOR_UPGRADES = [
  {id: "redPollen", name: "🔴 Red Pollen", ...},
  {id: "whitePollen", name: "⚪ White Pollen", ...},
  // ... 3 more items
]

TILE_UPGRADES = [
  {id: "gooTilePercent", name: "Goo Tile %", ...},
  {id: "growSpeed", name: "Grow Speed", ...}
]
```

### UI Display
- Page shows game normally
- Upgrades panel has 3 distinct sections
- All 13 total upgrades visible (6 + 5 + 2)
- Each upgrade shows name, description, next bonus, price, and buy button
- Pollen Color section has distinct pink styling

## Performance Checklist

- [ ] Game loads in under 2 seconds
- [ ] No lag when opening upgrades panel
- [ ] Smooth scrolling in upgrades section
- [ ] No memory leaks (check memory in DevTools)
- [ ] No repeated error messages in console

## Regression Testing

- [ ] Other bee types display correctly
- [ ] Special bees can be purchased
- [ ] Storage items work correctly
- [ ] Tools can be equipped
- [ ] Fields display correctly
- [ ] Field switching works
- [ ] Tile effects (fire, goo, etc.) trigger correctly
- [ ] Rarities display with correct colors
- [ ] Multiplicative bonuses stack correctly

## Notes

- All config files should load before main HTML logic executes
- Variable initialization is defensive - checks for config existence
- Save/load system preserves all upgrade levels
- Three upgrade categories are now clear separation

---

## Sign-Off Checklist

When all above tests pass:
- [ ] Game is fully functional
- [ ] No console errors
- [ ] All 3 upgrade categories working
- [ ] Save/load preserves state
- [ ] Phase 2 refactoring complete ✅

**Status**: Ready for browser testing ✅

---
*Testing Guide for Modular Architecture Phase 2*
*Last Updated: 2024*
