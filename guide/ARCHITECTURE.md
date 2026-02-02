# 🏗️ Estructura del Sistema de Buffs

## Diagrama de Flujo

```
┌─────────────────────────────────────────────────────────────────┐
│                     JUEGO INICIA / ACTUALIZA                    │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ▼
                  ┌──────────────────────┐
                  │  equipBee() llamado  │
                  └──────────┬───────────┘
                             │
                             ▼
              ┌──────────────────────────────────┐
              │  updateBeeAbilities() llamado    │
              └──────────┬───────────────────────┘
                         │
         ┌───────────────┼───────────────┐
         │               │               │
         ▼               ▼               ▼
    ┌─────────┐    ┌──────────┐    ┌──────────────┐
    │ Bees    │    │ Special  │    │ Color Mults  │
    │ Normales│    │ Bees     │    │ & Abilities  │
    └────┬────┘    └────┬─────┘    └──────┬───────┘
         │              │                   │
         ▼              ▼                   ▼
    getBeeBuffs()  getXxxBeeBuffs()  Aplicar directo
         │              │                   │
         └──────────────┴───────────────────┘
                        │
                        ▼
            ┌──────────────────────────┐
            │  applyBeeBuffs() llama   │
            │  para cada buff          │
            └──────────┬───────────────┘
                       │
                       ▼
            ┌──────────────────────────┐
            │  beeBonus acumulado      │
            │  (pollenBonus, etc)      │
            └──────────┬───────────────┘
                       │
                       ▼
            ┌──────────────────────────┐
            │  stats actualizado       │
            │  (stats.beePollenBonus)  │
            └──────────┬───────────────┘
                       │
                       ▼
            ┌──────────────────────────┐
            │  calculateCapacity()     │
            │  usa stats.beeCapacity   │
            └──────────┬───────────────┘
                       │
                       ▼
            ┌──────────────────────────┐
            │  UI Actualizada          │
            │  con nuevos valores      │
            └──────────────────────────┘
```

---

## Estructura de Archivos

```
beeswarm.html (6900+ líneas)
│
├── [LÍNEAS 1-500]     Variables globales
├── [LÍNEAS 500-1100]  Definiciones de datos (BEES, TOOLS, etc)
├── [LÍNEAS 1100-1500] Inicialización del juego
│
├── [LÍNEAS 2580-2680] ⭐ SISTEMA DE BUFFS NUEVO
│   ├── getBeeBuffs()
│   ├── getGoldenBeeBuffs()
│   ├── getLionBeeBuffs()
│   ├── getMoonBeeBuffs()
│   ├── mergeBuffs()
│   └── applyBeeBuffs()
│
├── [LÍNEAS 2680-3100] updateBeeAbilities() (REFACTORIZADO)
│   ├── Loop de equipadas bees + getBeeBuffs()
│   ├── Bees con abilities especiales
│   ├── Special bees
│   ├── Color multipliers
│   └── Consolidación de stats
│
├── [LÍNEAS 6900-7000] ⭐ SISTEMA DE DEBUG
│   └── debugBeeSystem { ... }
│
└── [Otros archivos de documentación]
    ├── BEE_DEVELOPMENT_GUIDE.md
    ├── REFACTORING_LOG.md
    ├── QUICK_START_GUIDE.md
    ├── REFACTORING_SUMMARY.md
    └── ARCHITECTURE.md (este archivo)
```

---

## Estructura de Datos: Buffs

```
BEE OBJETO
├── id: "bee11"
├── name: "Tenacity Bee"
├── rarity: "rare"
├── ability: "ninguno"
└── BUFFS (en getBeeBuffs)
    └── colorMultipliers: { red: 1.2 }

                    │
                    ▼

getBeeBuffs("bee11")
└── { colorMultipliers: { red: 1.2 } }

                    │
                    ▼

applyBeeBuffs(beeBonus, buffs)
└── redPollenMultiplier *= 1.2
    beeBonus.colorMultipliers.red = 1.2

                    │
                    ▼

stats.beePollenMultipliers = { red: 1.2, ... }
```

---

## Estructura de Funciones de Buffs

### getBeeBuffs(beeId) → { buffs }

```javascript
function getBeeBuffs(beeId) {
  const buffsMap = {
    'bee1':  { pollenBonus: 5 },
    'bee11': { colorMultipliers: { red: 1.2 } },
    'bee19': { /* buffs de Golden Bee base - NO */ },
    // ...
  };
  return buffsMap[beeId] || {};
}
```

**Input:** ID de bee (ej: "bee11")  
**Output:** Objeto con buffs (ej: `{ colorMultipliers: { red: 1.2 } }`)  
**Uso:** Para bees que no se pueden equipar múltiples veces  

---

### getXxxBeeBuffs(count) → { buffs × count }

```javascript
function getGoldenBeeBuffs(count) {
  if (count <= 0) return {};
  return {
    instantConversion: 5 * count,      // 5, 10, 15...
    convertBonus: 100 * count,         // 100, 200, 300...
    capacityBonus: 100000 * count      // 100k, 200k, 300k...
  };
}

function getLionBeeBuffs(count) {
  if (count <= 0) return {};
  return {
    pollenBonus: 20 * count,
    criticalPower: 10 * count
  };
}

function getMoonBeeBuffs(count) {
  if (count <= 0) return {};
  return {
    colorMultipliers: { 
      blue: 2 * count,      // x2, x4, x6...
      purple: 2 * count 
    }
  };
}
```

**Input:** Cantidad de bees equipadas  
**Output:** Buffs multiplicados por cantidad  
**Uso:** Para bees acumulables (Golden Bee, Lion Bee, Moon Bee)  

---

### applyBeeBuffs(beeBonus, buffs)

```javascript
function applyBeeBuffs(beeBonus, buffs) {
  if (!buffs) return;
  
  beeBonus.pollenBonus = (beeBonus.pollenBonus || 0) + (buffs.pollenBonus || 0);
  beeBonus.convertBonus = (beeBonus.convertBonus || 0) + (buffs.convertBonus || 0);
  beeBonus.criticalChance = (beeBonus.criticalChance || 0) + (buffs.criticalChance || 0);
  beeBonus.criticalPower = (beeBonus.criticalPower || 0) + (buffs.criticalPower || 0);
  beeBonus.instantConversion = (beeBonus.instantConversion || 0) + (buffs.instantConversion || 0);
  beeBonus.capacityBonus = (beeBonus.capacityBonus || 0) + (buffs.capacityBonus || 0);
}
```

**Input:** 
- beeBonus: Objeto acumulador de buffs
- buffs: Buffs a aplicar

**Output:** beeBonus modificado

**Uso:** Aplicar cualquier objeto de buffs al acumulador

---

### mergeBuffs(buff1, buff2) → { combined }

```javascript
function mergeBuffs(buff1, buff2) {
  const result = { ...buff1 };
  
  for (let key in buff2) {
    if (key === 'colorMultipliers') {
      result.colorMultipliers = result.colorMultipliers || {};
      for (let color in buff2.colorMultipliers) {
        result.colorMultipliers[color] = 
          (result.colorMultipliers[color] || 1) * buff2.colorMultipliers[color];
      }
    } else {
      result[key] = (result[key] || 0) + buff2[key];
    }
  }
  
  return result;
}
```

**Input:** Dos objetos de buffs  
**Output:** Buffs combinados  
**Nota:** Los colorMultipliers se MULTIPLICAN, otros se SUMAN  

---

## Flujo de updateBeeAbilities()

```
updateBeeAbilities() {

  1. INICIALIZAR
     └─ beeBonus = {}
     └─ Resetear multiplicadores de color a 1.0

  2. PROCESAR BEES NORMALES
     └─ Para cada bee equipada:
        ├─ Obtener buffs: getBeeBuffs(beeId)
        ├─ Aplicar: applyBeeBuffs(beeBonus, buffs)
        └─ Si tiene colorMultipliers, aplicarlos

  3. PROCESAR BEES ESPECIALES
     ├─ Golden Bee:
     │  ├─ Llamar: goldenBeeAbility()
     │  └─ Buffs: getGoldenBeeBuffs(count)
     │
     ├─ Lion Bee:
     │  ├─ Llamar: lionBeeAbility()
     │  └─ Buffs: getLionBeeBuffs(count)
     │
     └─ Moon Bee:
        ├─ Llamar: moonBeeAbility()
        └─ Buffs: getMoonBeeBuffs(count)

  4. PROCESAR ABILITIES (Fire, Spicy, Demon, etc)
     └─ Si existen, ejecutar sus funciones tick

  5. APLICAR A STATS GLOBALES
     ├─ stats.beePollenBonus = beeBonus.pollenBonus
     ├─ stats.beeConvertBonus = beeBonus.convertBonus + rarityBonus
     ├─ stats.beeCriticalChance = beeBonus.criticalChance
     ├─ stats.beeCriticalPower = beeBonus.criticalPower
     ├─ stats.beeInstantConversion = beeBonus.instantConversion
     └─ stats.beeCapacityBonus = beeBonus.capacityBonus

  6. FINALIZAR
     └─ Actualizar UI
}
```

---

## Sistema de Debug

```
debugBeeSystem = {
  showEquippedBeeBuffs()      ← Ver buffs de bees equipadas
  showStats()                  ← Ver todos los stats finales
  checkBee(beeId)             ← Verificar una bee existe
  equipAndTest(beeId)         ← Equipar y ver cambios
  verifyAllBees()             ← Verificar todas las bees
  testMultipleBees(...ids)    ← Test con múltiples bees
  testStackingBee(id, count)  ← Test de acumulación
  clear()                      ← Limpiar bees equipadas
}
```

---

## Integración con Otros Sistemas

### calculateCapacity()
```javascript
const baseCapacity = 120 + storageBonus + (stats.beeCapacityBonus || 0);
//                                         ↑ Usa buff de capacidad
```

### applyToolPattern()
```javascript
// Usa multiplicadores de color
const pollenGained = basePollen 
  * redPollenMultiplier    // ← De bees con red multiplier
  * bluePollenMultiplier   // ← De bees con blue multiplier
  // ...
```

### calculateCriticalHit()
```javascript
const critChance = stats.beeCriticalChance;  // ← De bees
const critPower = stats.beeCriticalPower;    // ← De bees
```

---

## Flujo Completo: Usuario Equipa Golden Bee

```
Usuario hace click en "Equipar Golden Bee"
                    │
                    ▼
        equipBee(slot, "bee19")
                    │
        equippedBees.push("bee19")
                    │
                    ▼
        updateBeeAbilities()
                    │
        ┌──────────────────────────────────┐
        │ Procesar Golden Bee:             │
        │                                   │
        │ 1. goldenBeeCount = 1 (o más)   │
        │ 2. goldenBeeAbility()           │
        │ 3. getGoldenBeeBuffs(count)     │
        │    → { instantConversion: 5×count,
        │        convertBonus: 100×count,
        │        capacityBonus: 100000×count }
        │ 4. applyBeeBuffs(beeBonus, buffs)
        │    → Sumar a beeBonus
        │ 5. stats.beeCapacityBonus += 100000×count
        │                               │
        │ Si equipas 2x Golden Bee:     │
        │ stats.beeCapacityBonus += 200000
        │ stats.beeConvertBonus += 200%
        │ stats.beeInstantConversion += 10%
        └──────────────────────────────────┘
                    │
                    ▼
        calculateCapacity()
        baseCapacity = 120 + storage + stats.beeCapacityBonus
        → 120 + 0 + 100000 = 100,120 (o más)
                    │
                    ▼
        updateUI()
        Mostrar nueva capacidad
```

---

## Comparación: Antes vs Después

### ANTES: Código Duplicado
```javascript
// En updateBeeAbilities()
equippedBees.forEach(beeId => {
  const bee = BEES.find(b => b.id === beeId);
  
  if(bee.id === 'bee11') {
    redPollenMultiplier = bee.value;
  } else if(bee.id === 'bee12') {
    bluePollenMultiplier = bee.value;
  } else if(bee.id === 'bee13') {
    whitePollenMultiplier = bee.value;
  } else if(bee.id === 'bee21') {
    beeBonus.convertBonus = (beeBonus.convertBonus || 0) + 5;
  } else if(bee.id === 'bee22') {
    beeBonus.pollenBonus = (beeBonus.pollenBonus || 0) + 20;
    whitePollenMultiplier = 1.5;
  }
  // ... 30+ más líneas así
});
```

### DESPUÉS: Código Centralizado
```javascript
// En getBeeBuffs()
const buffsMap = {
  'bee11': { colorMultipliers: { red: 1.2 } },
  'bee12': { colorMultipliers: { blue: 1.2 } },
  'bee13': { colorMultipliers: { white: 1.2 } },
  'bee21': { convertBonus: 5 },
  'bee22': { pollenBonus: 20, colorMultipliers: { white: 1.5 } },
  // ...
};

// En updateBeeAbilities()
const buffs = getBeeBuffs(beeId);
applyBeeBuffs(beeBonus, buffs);
```

---

## Ventajas de la Nueva Arquitectura

| Aspecto | Antes | Después |
|---------|-------|---------|
| **Encontrar buff** | Buscar en 200+ líneas | Mirar `getBeeBuffs()` |
| **Modificar buff** | Editar en updateBee... | Editar en getBeeBuffs() |
| **Agregar bee** | +5 líneas en varios lugares | +2 líneas en 2 lugares |
| **Duplicación** | 40+ líneas duplicadas | Casi ninguna |
| **Legibilidad** | Difícil seguir lógica | Clara y directa |
| **Testeo** | Manual | `debugBeeSystem` |
| **Documentación** | Mínima | Exhaustiva |

---

## Patrones de Implementación

### Patrón 1: Buff Simple
```javascript
// En getBeeBuffs()
'bee41': { pollenBonus: 10, convertBonus: 5 }
```

### Patrón 2: Color Multiplier
```javascript
// En getBeeBuffs()
'bee42': { colorMultipliers: { red: 1.5 } }
```

### Patrón 3: Buff + Color Multiplier
```javascript
// En getBeeBuffs()
'bee43': { 
  pollenBonus: 5,
  colorMultipliers: { blue: 1.3 } 
}
```

### Patrón 4: Buff Acumulable
```javascript
// En updateBeeAbilities()
const count = equippedBees.filter(id => id === 'bee44').length;
if(count > 0) {
  const buffs = getNuevaBeeBuffs(count);
  applyBeeBuffs(beeBonus, buffs);
}

function getNuevaBeeBuffs(count) {
  return { 
    pollenBonus: 10 * count,
    convertBonus: 5 * count 
  };
}
```

### Patrón 5: Buff + Ability Especial
```javascript
// En getBeeBuffs() (si tiene buff base)
'bee45': { pollenBonus: 10 }

// En updateBeeAbilities()
const hasBee45 = equippedBees && equippedBees.includes('bee45');
if(hasBee45) {
  nuevaBeeAbility();  // Ejecutar ability
}
```

---

## Conclusión

La nueva arquitectura es:
- ✅ **Más limpia:** Código centralizado
- ✅ **Más mantenible:** Fácil de encontrar y modificar
- ✅ **Más escalable:** Agregar bees es trivial
- ✅ **Mejor documentada:** Múltiples guías
- ✅ **Más debuggeable:** Sistema debug completo
- ✅ **Más profesional:** Sigue mejores prácticas

¡Sistema listo para crecer! 🚀
