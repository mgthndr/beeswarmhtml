#!/usr/bin/env node
/**
 * Verificador de Configuración Modular - Bee Swarm Game
 * 
 * Este script verifica que todos los archivos de configuración modular
 * estén correctamente creados y estructurados.
 */

const fs = require('fs');
const path = require('path');

const configDir = path.join(__dirname, 'configs');
const expectedFiles = ['bees.js', 'storage.js', 'fields.js', 'tools.js', 'upgrades.js'];
const expectedConstants = {
  'bees.js': ['BEES', 'SPECIAL_BEES', 'EGGS', 'ABILITY_DESCRIPTIONS_EN', 'BEE_BUFFS', 'SYNERGIES', 'eggPrices'],
  'storage.js': ['STORAGE'],
  'fields.js': ['flowerTypes', 'fields', 'fieldRequirements', 'fieldData'],
  'tools.js': ['TOOLS'],
  'upgrades.js': ['ABILITY_TYPES', 'UPGRADES']
};

console.log('🔍 Verificando configuración modular...\n');

// Verificar archivos
console.log('📁 Verificando archivos:');
let filesOk = true;
expectedFiles.forEach(file => {
  const filePath = path.join(configDir, file);
  if (fs.existsSync(filePath)) {
    console.log(`  ✅ ${file}`);
  } else {
    console.log(`  ❌ ${file} - NO ENCONTRADO`);
    filesOk = false;
  }
});

if (!filesOk) {
  console.log('\n❌ Algunos archivos no existen!');
  process.exit(1);
}

// Verificar constantes en cada archivo
console.log('\n📋 Verificando constantes:');
let constantsOk = true;
for (const [file, constants] of Object.entries(expectedConstants)) {
  console.log(`  ${file}:`);
  const filePath = path.join(configDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  
  constants.forEach(constant => {
    if (content.includes(`const ${constant}`)) {
      console.log(`    ✅ ${constant}`);
    } else {
      console.log(`    ❌ ${constant} - NO ENCONTRADO`);
      constantsOk = false;
    }
  });
}

if (!constantsOk) {
  console.log('\n❌ Algunas constantes no existen!');
  process.exit(1);
}

// Verificar imports en beeswarm.html
console.log('\n🔗 Verificando imports en beeswarm.html:');
const htmlPath = path.join(__dirname, 'beeswarm.html');
const htmlContent = fs.readFileSync(htmlPath, 'utf8');

let importsOk = true;
expectedFiles.forEach(file => {
  if (htmlContent.includes(`<script src="configs/${file}"></script>`)) {
    console.log(`  ✅ Import de ${file}`);
  } else {
    console.log(`  ❌ Import de ${file} - NO ENCONTRADO`);
    importsOk = false;
  }
});

if (!importsOk) {
  console.log('\n❌ Algunos imports no existen en beeswarm.html!');
  process.exit(1);
}

// Estadísticas
console.log('\n📊 Estadísticas:');
expectedFiles.forEach(file => {
  const filePath = path.join(configDir, file);
  const stats = fs.statSync(filePath);
  const sizeKb = (stats.size / 1024).toFixed(2);
  console.log(`  ${file}: ${sizeKb} KB`);
});

console.log('\n✅ ¡Configuración modular verificada exitosamente!');
console.log('\n💡 Próximos pasos:');
console.log('  1. Abre beeswarm.html en un navegador');
console.log('  2. Verifica que el juego carga sin errores de consola');
console.log('  3. Prueba todas las funcionalidades');
console.log('  4. Si todo funciona, puedes eliminar las definiciones inline del HTML\n');
