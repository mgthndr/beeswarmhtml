# 🐝 Bee Swarm Game - Development Guide

## Sistema de Buffs Centralizado

La arquitectura de buffs ha sido refactorizada para ser más mantenible y fácil de extender. A continuación se describe cómo el sistema funciona y cómo agregar nuevas bees.

---

## 1. Estructura General del Sistema

### Funciones Principales:
1. **`getBeeBuffs(beeId)`** - Retorna los buffs estáticos de una bee
2. **`getGoldenBeeBuffs(count)`** - Calcula buffs de Golden Bee según cantidad equipada
3. **`getLionBeeBuffs(count)`** - Calcula buffs de Lion Bee según cantidad equipada
4. **`getMoonBeeBuffs(count)`** - Calcula buffs de Moon Bee según cantidad equipada
5. **`applyBeeBuffs(beeBonus, buffs)`** - Aplica buffs al objeto beeBonus
6. **`mergeBuffs(buff1, buff2)`** - Combina dos objetos de buffs

### Tipos de Buffs Disponibles:

```javascript
{
  pollenBonus: 5,              // Suma al pollen total recolectado
  convertBonus: 20,            // Suma al conversion rate (%)
  instantConversion: 5,        // Suma al instant conversion (%)
  criticalChance: 2,           // Suma al critical chance (%)
  criticalPower: 0.05,         // Suma al critical power (como decimal: 0.05 = +5%)
  capacityBonus: 100000,       // Suma a la capacidad máxima
  colorMultipliers: {          // Multiplicadores de color
    red: 1.2,
    blue: 1.5,
    white: 1.2,
    yellow: 2.0,
    purple: 2.0
  }
}
```

---

## 2. Agregar Una Nueva Bee (PASO A PASO)

### Paso 1: Crear la Bee en el Array BEES

En el archivo `beeswarm.html`, busca el array `BEES` (alrededor de línea 1075) y agrega tu bee:

```javascript
BEES.push({
  id: "bee41",                     // ID único incrementado
  name: "Nueva Bee",               // Nombre visible
  rarity: "legendary",             // common | rare | epic | legendary | mythic
  color: "#FF5500",               // Color en hexadecimal
  colorType: "red",               // red | blue | white | yellow | purple
  img: "nuevabee.png",            // Nombre del archivo de imagen
  desc: "Descripción del efecto", // Descripción visible en el juego
  ability: "ninguno",             // "ninguno" o nombre de la ability
  value: 15,                      // Valor base del buff
  synergies: ["bee1", "bee4"],   // Bees que sinergian con esta
  tier: 3                         // Nivel de rareza (1-3, donde 3 es más rara)
});
```

### Paso 2: Agregar Buffs en getBeeBuffs()

Abre la función `getBeeBuffs()` (alrededor de línea 2740) y agrega tu bee al mapa `buffsMap`:

```javascript
'bee41': { 
  pollenBonus: 10,           // Por ejemplo: +10% pollen
  convertBonus: 5,           // +5% conversion rate
  colorMultipliers: { blue: 1.3 }  // x1.3 blue pollen
}
```

**NOTAS:**
- Si la bee NO tiene buffs, simplemente no la agregues al mapa (retornará `{}`)
- Si la bee tiene un multiplicador de color, agrégalo a `colorMultipliers`
- Los valores deben ser ADITIVOS (se suman, no se multiplican)

### Paso 3: Si la Bee Tiene Habilidades Especiales

Si tu bee tiene una habilidad que se ejecuta periódicamente (como Laser Bee, Moon Bee, etc):

#### Opción A: Crear una función de ability (SI ES COMPLEJA)

```javascript
function nuevaBeeAbility() {
  // Ejecutar cada frame o cada X segundos
  // Por ejemplo: generar tiles especiales, efectos visuales, etc
}
```

Luego, en `updateBeeAbilities()`, agrega:

```javascript
const hasNuevaBee = equippedBees && equippedBees.includes('bee41');
if(hasNuevaBee) {
  nuevaBeeAbility();
}
```

#### Opción B: Buffs que afectan stats (SI ES SIMPLE)

Si es solo un buff que afecta stats globales, manéjalo en `updateBeeAbilities()`:

```javascript
const hasNuevaBee = equippedBees && equippedBees.includes('bee41');
if(hasNuevaBee) {
  redPollenMultiplier *= 1.5;  // Ejemplo: multiplicador de color
  stats.beeCriticalChance = (stats.beeCriticalChance || 0) + 2;
}
```

### Paso 4: Si la Bee Se Puede Equipar Múltiples Veces

Si múltiples instancias de la bee deben acumular buffs (como Golden Bee o Lion Bee):

```javascript
// En updateBeeAbilities()
const nuevaBeeCount = equippedBees && equippedBees.filter(id => id === 'bee41').length || 0;
if(nuevaBeeCount > 0) {
  // Llamar a ability si existe
  nuevaBeeAbility();
  
  // Aplicar buffs multiplicados por cantidad
  const buffs = getNuevaBeeBuffs(nuevaBeeCount);
  applyBeeBuffs(beeBonus, buffs);
}

// Crear función para calcular buffs multiplicados
function getNuevaBeeBuffs(count) {
  if (count <= 0) return {};
  return {
    pollenBonus: 10 * count,
    convertBonus: 5 * count,
    // ... otros buffs multiplicados
  };
}
```

---

## 3. Checklist para Agregar Una Nueva Bee

- [ ] Agregada en el array `BEES` con todos los campos requeridos
- [ ] ID único (`bee41`, `bee42`, etc.)
- [ ] Imagen en `images/` con el nombre correcto
- [ ] Buffs agregados en `getBeeBuffs()`
- [ ] Si tiene color multiplier, agregado a `colorMultipliers`
- [ ] Si tiene ability especial, función creada e integrada
- [ ] Si se puede equipar múltiple, función `getNuevaBeeBuffs()` creada
- [ ] Campo `ability` correcto (o "ninguno" si no tiene)
- [ ] Campo `synergies` completo
- [ ] Probada en el juego para verificar:
  - [ ] Se puede comprar/obtener
  - [ ] Se puede equipar
  - [ ] Los buffs se aplican correctamente
  - [ ] Si tiene ability, se ejecuta correctamente
  - [ ] Sinergias funcionan si existen

---

## 4. Ejemplos Completos

### Ejemplo 1: Bee Simple (Solo Buffs)

**Agregada en BEES:**
```javascript
{
  id: "bee41",
  name: "Radiance Bee",
  rarity: "rare",
  color: "#FFD700",
  colorType: "yellow",
  img: "radiancebee.png",
  desc: "Buff Pollen +15%, Conversion +10%",
  ability: "ninguno",
  value: 12,
  synergies: ["bee10"],
  tier: 2
}
```

**En getBeeBuffs():**
```javascript
'bee41': { 
  pollenBonus: 15,
  convertBonus: 10
}
```

**¡Listo! No necesita nada más.**

---

### Ejemplo 2: Bee con Multiplicador de Color

**En getBeeBuffs():**
```javascript
'bee42': {
  pollenBonus: 5,
  colorMultipliers: { yellow: 1.8 }  // x1.8 yellow pollen
}
```

---

### Ejemplo 3: Bee con Ability Especial y Buffs Acumulables

**En getBeeBuffs() (solo buffs base):**
```javascript
'bee43': { 
  pollenBonus: 8
}
```

**En updateBeeAbilities():**
```javascript
const novaBeeCount = equippedBees && equippedBees.filter(id => id === 'bee43').length || 0;
if(novaBeeCount > 0) {
  novaBeeTick();  // Ejecutar ability
  const buffs = getNovaBeeBuffs(novaBeeCount);
  applyBeeBuffs(beeBonus, buffs);
}
```

**Nueva función (agregar cerca de getLionBeeBuffs()):**
```javascript
function getNovaBeeBuffs(count) {
  if (count <= 0) return {};
  return {
    pollenBonus: 8 * count,
    convertBonus: 50 * count,
    capacityBonus: 50000 * count
  };
}
```

**Función de ability (agregar en el script):**
```javascript
function novaBeeTick() {
  // Lógica de la ability (ejecutar cada frame)
  // Por ejemplo: explosiones, efectos especiales, etc.
}
```

---

## 5. Verificación de Funcionamiento

Para verificar que tu bee funciona correctamente:

### En la Consola del Navegador (F12):

```javascript
// Verificar que la bee existe
const newBee = BEES.find(b => b.id === 'bee41');
console.log('Nueva Bee:', newBee);

// Verificar que sus buffs se aplican
const buffs = getBeeBuffs('bee41');
console.log('Buffs:', buffs);

// Equipar y verificar que se aplicaron
equippedBees.push('bee41');
updateBeeAbilities();
console.log('Stats después:', stats);
```

### Funciones de Debug Útiles:

```javascript
// Ver todas las bees equipadas y sus buffs
function debugBeeBuffs() {
  equippedBees.forEach(beeId => {
    const bee = BEES.find(b => b.id === beeId);
    const buffs = getBeeBuffs(beeId);
    console.log(`${bee.name} (${beeId}):`, buffs);
  });
}

// Ver stats finales
function debugStats() {
  console.table({
    'Pollen Bonus': stats.beePollenBonus,
    'Convert Bonus': stats.beeConvertBonus,
    'Crit Chance': stats.beeCriticalChance,
    'Crit Power': stats.beeCriticalPower,
    'Instant Conv': stats.beeInstantConversion,
    'Capacity Bonus': stats.beeCapacityBonus
  });
}
```

---

## 6. Troubleshooting

### Problema: Los buffs no se aplican
- Verifica que la bee esté en el array `BEES`
- Verifica que el ID sea exactamente igual en BEES y getBeeBuffs()
- Verifica que `updateBeeAbilities()` se llame después de equipar la bee

### Problema: La ability no se ejecuta
- Verifica que la función de ability exista
- Verifica que el check `if(hasNuevaBee)` esté en `updateBeeAbilities()`
- Verifica que `updateBeeAbilities()` se llame periódicamente

### Problema: Los multiplicadores de color no funcionan
- Asegúrate de usar `colorMultipliers: { color: valor }`
- Los valores deben ser multiplicadores (1.2 = x1.2, 2.0 = x2.0)
- Verifica que `mergeBuffs()` se use para combinar multiplicadores

### Problema: Buffs acumulables no funcionan
- Verifica que uses `.filter()` para contar las bees
- Verifica que multipliques los buffs por el `count`
- Verifica que llames a `applyBeeBuffs()` con los buffs calculados

---

## 7. Resumen: Flujo de Ejecución

1. Usuario equipa una bee
2. `equipBee(slot, beeId)` es llamado
3. `updateBeeAbilities()` es llamado
4. `getBeeBuffs(beeId)` retorna los buffs de la bee
5. `applyBeeBuffs(beeBonus, buffs)` los agrega al total
6. Si la bee tiene ability, se ejecuta (`xxxBeeTick()`)
7. Los stats se actualizan (`stats.beePollenBonus`, etc.)
8. La UI se actualiza para reflejar los nuevos buffs

---

## 8. Valores Recomendados por Rareza

Como referencia, aquí están los buffs típicos por rareza:

```
COMMON:     +5% pollen o conversion
RARE:       +10-20% pollen o conversion
EPIC:       +25-50% conversion o abilities especiales
LEGENDARY:  +100%+ conversion o multiplicadores x1.5+
MYTHIC:     +200%+ conversion o multiplicadores x2+
```

---

¡Espero que esta guía te ayude a agregar nuevas bees de forma fácil y rápida! 🚀
