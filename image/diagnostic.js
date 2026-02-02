/**
 * Script de diagnóstico para verificar que los datos de config se cargan correctamente
 * Abre la consola del navegador (F12) y ejecuta estos comandos
 */

console.log('🔍 DIAGNÓSTICO DE CARGA DE CONFIGURACIÓN\n');

// Verificar si UPGRADES existe
console.log('1️⃣  Verificando UPGRADES:');
if(typeof UPGRADES !== 'undefined') {
  console.log('   ✅ UPGRADES definido');
  console.log('   Items:', UPGRADES.length);
  console.log('   Primero:', UPGRADES[0]?.id);
} else {
  console.log('   ❌ UPGRADES NO definido - PROBLEMA CRÍTICO');
}

// Verificar si POLLEN_COLOR_UPGRADES existe
console.log('\n2️⃣  Verificando POLLEN_COLOR_UPGRADES:');
if(typeof POLLEN_COLOR_UPGRADES !== 'undefined') {
  console.log('   ✅ POLLEN_COLOR_UPGRADES definido');
  console.log('   Items:', POLLEN_COLOR_UPGRADES.length);
} else {
  console.log('   ❌ POLLEN_COLOR_UPGRADES NO definido');
}

// Verificar si TILE_UPGRADES existe
console.log('\n3️⃣  Verificando TILE_UPGRADES:');
if(typeof TILE_UPGRADES !== 'undefined') {
  console.log('   ✅ TILE_UPGRADES definido');
  console.log('   Items:', TILE_UPGRADES.length);
} else {
  console.log('   ❌ TILE_UPGRADES NO definido');
}

// Verificar upgradeLevels
console.log('\n4️⃣  Verificando upgradeLevels:');
if(typeof upgradeLevels !== 'undefined') {
  console.log('   ✅ upgradeLevels definido');
  console.log('   Keys:', Object.keys(upgradeLevels).length);
  console.log('   Contenido:', upgradeLevels);
} else {
  console.log('   ❌ upgradeLevels NO definido');
}

// Verificar otros configs importantes
console.log('\n5️⃣  Otros Configs:');
console.log('   BEES:', typeof BEES !== 'undefined' ? `✅ ${BEES.length} items` : '❌ No');
console.log('   SPECIAL_BEES:', typeof SPECIAL_BEES !== 'undefined' ? `✅ ${SPECIAL_BEES.length} items` : '❌ No');
console.log('   TILE_BUFFS:', typeof TILE_BUFFS !== 'undefined' ? '✅ OK' : '❌ No');
console.log('   PLAYER_STATS:', typeof PLAYER_STATS !== 'undefined' ? '✅ OK' : '❌ No');

// Verificar elemento upgrades en DOM
console.log('\n6️⃣  Verificando DOM:');
const upgradesEl = document.getElementById('upgrades');
if(upgradesEl) {
  console.log('   ✅ Elemento #upgrades existe');
  console.log('   HTML vacío:', upgradesEl.innerHTML.trim() === '');
  console.log('   Debe tener frames:', upgradesEl.querySelectorAll('.upgrade-frame').length);
} else {
  console.log('   ❌ Elemento #upgrades NO encontrado');
}

// Test final
console.log('\n7️⃣  TEST: Intentar construir upgrades manualmente:');
try {
  if(typeof UPGRADES !== 'undefined' && UPGRADES.length > 0) {
    console.log('   ✅ Puede iterar UPGRADES');
    UPGRADES.forEach((u, i) => {
      console.log(`      [${i}] ${u.id} - ${u.name}`);
    });
  } else {
    console.log('   ❌ No puede iterar UPGRADES');
  }
} catch(e) {
  console.log('   ❌ Error:', e.message);
}

console.log('\n✅ Diagnóstico completo');
