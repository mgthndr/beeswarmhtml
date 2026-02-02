# Análisis Completo de Funciones de Abilities - Timing Variables

**Fecha:** 30 Enero 2026  
**Archivo:** beeswarm.html  

---

## RESUMEN EJECUTIVO

Se encontraron **3 FUNCIONES ROTAS** que usan variables `nextXxxAbilityTime` no inicializadas:
- ❌ `spicyBeeTick()` (línea 3098)
- ❌ `kingCrimsonBeeTick()` (línea 2963)
- ⚠️ `ticketBeeAbility()` (línea 3677) - parcialmente roto
- ⚠️ `goldenBeeAbility()` (línea 3695) - parcialmente roto

---

## ANÁLISIS DETALLADO

### 1. fireBeeTick() - Línea 2882
**Estado:** ✅ BUENO

```javascript
if(now < lastFireBeeAbility + randomDelay) return;
lastFireBeeAbility = now;
```

- **Usa:** `lastFireBeeAbility` (último)
- **Inicializado en:** player-stats.js (ABILITY_STATES)
- **Evaluación en beeswarm.html:**
  - Línea 1641: `lastFireBeeAbility = s.lastFireBeeAbility || 0;`
  - Línea 1566: En lista de variables a guardar
- **Problemas:** Ninguno

---

### 2. kingCrimsonBeeTick() - Línea 2963
**Estado:** ❌ ROTO

```javascript
const minInterval = 40000; // 40s
const maxInterval = 60000; // 1min

// Calculate next ability time if it hasn't been set
if(!window.nextKingCrimsonTime) {
  window.nextKingCrimsonTime = now + minInterval + Math.random() * (maxInterval - minInterval);
}

if(now < window.nextKingCrimsonTime) return;

lastKingCrimsonAbility = now;
window.nextKingCrimsonTime = now + minInterval + Math.random() * (maxInterval - minInterval);
```

- **Usa:** `window.nextKingCrimsonTime` (siguiente)
- **Inicializado en:** ❌ NO (solo inicializado en la función, no en player-stats.js)
- **Usa también:** `lastKingCrimsonAbility` (sí, inicializado)
- **Problemas:**
  1. Usa `window.nextKingCrimsonTime` en lugar de variable local
  2. No está inicializado en player-stats.js
  3. Al cambiar de escenas/campos, se podría perder el estado
  4. No se guarda en la estructura de guardado

---

### 3. crimsonGuardSynergyTick() - Línea 3024
**Estado:** ✅ BUENO

```javascript
const now = Date.now();
if(now < lastCrimsonGuardSynergy + 60000) return; // Ejecutar cada 1min

lastCrimsonGuardSynergy = now;
```

- **Usa:** `lastCrimsonGuardSynergy` (último)
- **Inicializado en:** player-stats.js (ABILITY_STATES)
- **Evaluación en beeswarm.html:**
  - Línea 1566: En lista de variables a guardar
  - Línea 1650: `lastCrimsonGuardSynergy = s.lastCrimsonGuardSynergy || 0;`
- **Problemas:** Ninguno

---

### 4. spicyBeeTick() - Línea 3098
**Estado:** ❌ ROTO

```javascript
const now = Date.now();
if(now < nextSpicyAbilityTime) return;  // ← USA nextSpicyAbilityTime SIN INICIALIZAR
lastSpicyAbility = now;
registerAbilityExecution('spicyAbility');
nextSpicyAbilityTime = now + (Math.random() * 90000 + 30000); // 30-120s
```

- **Usa:** `nextSpicyAbilityTime` (siguiente)
- **Inicializado en:** ❌ NO en ningún lado
- **Inicializado en:** ❌ NO en player-stats.js
- **Inicializado en:** ❌ NO en beeswarm.html
- **Declaración:** No hay declaración global
- **Problemas:**
  1. **Variable completamente indefinida**
  2. Usada ANTES de ser inicializada (línea 3101)
  3. No existe en player-stats.js
  4. No se guarda en el sistema de guardado
  5. En primera ejecución: `now < undefined` = error silencioso (compara número con undefined)

---

### 5. demonBeeTick() - Línea 3174
**Estado:** ✅ BUENO

```javascript
const now = Date.now();
const minInterval = 40000; // 40s
const maxInterval = 110000; // 1.1min
const randomDelay = minInterval + Math.random() * (maxInterval - minInterval);
if(now < lastDemonAbility + randomDelay) return;

lastDemonAbility = now;
```

- **Usa:** `lastDemonAbility` (último)
- **Inicializado en:** player-stats.js (ABILITY_STATES)
- **Evaluación en beeswarm.html:**
  - Línea 1643: `lastDemonAbility = s.lastDemonAbility || 0;`
  - Línea 1566: En lista de variables a guardar
- **Problemas:** Ninguno

---

### 6. laserBeeTick() - Línea 3239
**Estado:** ✅ BUENO

```javascript
const now = Date.now();
const minInterval = 60000; // 60 seconds
if(now < lastLaserAbility + minInterval) return;

lastLaserAbility = now;
```

- **Usa:** `lastLaserAbility` (último)
- **Inicializado en:** player-stats.js (ABILITY_STATES)
- **Evaluación en beeswarm.html:**
  - Línea 1644: `lastLaserAbility = s.lastLaserAbility || 0;`
  - Línea 1566: En lista de variables a guardar
- **Problemas:** Ninguno

---

### 7. teslaBeeAbility() - Línea 3481
**Estado:** ✅ BUENO

```javascript
const now = Date.now();
const minInterval = 30000; // 30 seconds
const maxInterval = 120000; // 2 minutes
const randomDelay = minInterval + Math.random() * (maxInterval - minInterval);

if(now < lastTeslaBeeAbility + randomDelay) return;

lastTeslaBeeAbility = now;
```

- **Usa:** `lastTeslaBeeAbility` (último)
- **Inicializado en:** player-stats.js (ABILITY_STATES)
- **Evaluación en beeswarm.html:**
  - Línea 1645: `lastTeslaBeeAbility = s.lastTeslaBeeAbility || 0;`
  - Línea 1566: En lista de variables a guardar
- **Problemas:** Ninguno

---

### 8. ticketBeeAbility() - Línea 3677
**Estado:** ⚠️ PARCIALMENTE ROTO

```javascript
const now = Date.now();
const abilityInterval = 60000; // 1 minute

if(!ticketBeeAbilityTime) ticketBeeAbilityTime = 0;  // ← Check redundante
if(now - ticketBeeAbilityTime < abilityInterval) return;

ticketBeeAbilityTime = now;
```

- **Usa:** `ticketBeeAbilityTime` (último)
- **Inicializado en:** beeswarm.html (línea 787)
  - `let ticketBeeAbilityTime = 0;`
- **Evaluación en beeswarm.html:**
  - Línea 1660: `ticketBeeAbilityTime = s.ticketBeeAbilityTime || 0;`
  - Línea 1564: En lista de variables a guardar
- **Problemas:**
  1. El check `if(!ticketBeeAbilityTime)` en línea 3683 es redundante
  2. Variable declarada con `let` en línea 787 (debería ser más consistente con otras)
  3. Funciona pero con código defensivo innecesario

---

### 9. goldenBeeAbility() - Línea 3695
**Estado:** ⚠️ PARCIALMENTE ROTO

```javascript
const now = Date.now();
const abilityInterval = 60000; // 1 minute

if(!goldenBeeAbilityTime) goldenBeeAbilityTime = 0;  // ← Check redundante
if(now - goldenBeeAbilityTime < abilityInterval) return;

goldenBeeAbilityTime = now;
```

- **Usa:** `goldenBeeAbilityTime` (último)
- **Inicializado en:** beeswarm.html (línea 788)
  - `let goldenBeeAbilityTime = 0;`
- **Evaluación en beeswarm.html:**
  - Línea 1661: `goldenBeeAbilityTime = s.goldenBeeAbilityTime || 0;`
  - Línea 1564: En lista de variables a guardar
- **Problemas:**
  1. El check `if(!goldenBeeAbilityTime)` en línea 3701 es redundante
  2. Variable declarada con `let` en línea 788 (debería ser más consistente con otras)
  3. Funciona pero con código defensivo innecesario

---

### 10. thunderBeeTick() - Línea 3713
**Estado:** ✅ BUENO

```javascript
const now = Date.now();
const minInterval = 20000; // 20s
const maxInterval = 72000; // 1.2min
const randomDelay = minInterval + Math.random() * (maxInterval - minInterval);
if(now < lastThunderBeeAbility + randomDelay) return;

lastThunderBeeAbility = now;
```

- **Usa:** `lastThunderBeeAbility` (último)
- **Inicializado en:** player-stats.js (ABILITY_STATES)
- **Evaluación en beeswarm.html:**
  - Línea 1645: `lastThunderBeeAbility = s.lastThunderBeeAbility || 0;`
  - Línea 1566: En lista de variables a guardar
- **Problemas:** Ninguno

---

### 11. gummyBeeTick() - Línea 3856
**Estado:** ✅ BUENO

```javascript
const now = Date.now();
const nextSpawn = lastGooGeneration + Math.random() * 20000 + 20000; // 20s - 40s minimum
if(now < nextSpawn) return;

lastGooGeneration = now;
```

- **Usa:** `lastGooGeneration` (último)
- **Inicializado en:** player-stats.js (ABILITY_STATES)
- **Evaluación en beeswarm.html:**
  - Línea 1647: `lastGooGeneration = s.lastGooGeneration || 0;`
  - Línea 1566: En lista de variables a guardar
- **Problemas:** Ninguno

---

### 12. gooTileSystemTick() - Línea 3908
**Estado:** ✅ BUENO

```javascript
const now = Date.now();
const minInterval = 30000; // 30 seconds
const maxInterval = 60000; // 1 minute
const nextSpawn = lastGooTileGeneration + minInterval + Math.random() * (maxInterval - minInterval);
if(now < nextSpawn) return;

lastGooTileGeneration = now;
```

- **Usa:** `lastGooTileGeneration` (último)
- **Inicializado en:** player-stats.js (ABILITY_STATES)
- **Evaluación en beeswarm.html:**
  - Línea 1648: `lastGooTileGeneration = s.lastGooTileGeneration || 0;`
  - Línea 1566: En lista de variables a guardar
- **Problemas:** Ninguno

---

### 13. lionBeeAbility() - Línea 4009
**Estado:** ✅ BUENO

```javascript
const now = Date.now();
const cooldown = 30000; // 30 seconds between activations

if(now - lastLionAbility < cooldown) return;
```

- **Usa:** `lastLionAbility` (último)
- **Inicializado en:** player-stats.js (ABILITY_STATES)
- **Evaluación en beeswarm.html:**
  - Línea 1566: En lista de variables a guardar
  - Línea 1640: `lastLionDestruction = s.lastLionDestruction || 0;` (pero también lastLionAbility)
- **Problemas:** Ninguno

---

### 14. photonBeeAbility() - Línea 4068
**Estado:** ✅ BUENO

```javascript
const now = Date.now();
const minCooldown = 60000; // 1 minute
const maxCooldown = 120000; // 2 minutes
const cooldown = minCooldown + Math.random() * (maxCooldown - minCooldown);

if(now - lastPhotonAbility < cooldown) return;
```

- **Usa:** `lastPhotonAbility` (último)
- **Inicializado en:** player-stats.js (ABILITY_STATES)
- **Evaluación en beeswarm.html:**
  - Línea 1649: `lastPhotonAbility = s.lastPhotonAbility || 0;`
  - Línea 1566: En lista de variables a guardar
- **Problemas:** Ninguno

---

### 15. digitalBeeAbility() - Línea 4196
**Estado:** ✅ BUENO

```javascript
const now = Date.now();
// ... 
// Check for random effects every 30s
const randomEffectCooldown = 30000;
if(now - lastDigitalRandomEffect >= randomEffectCooldown){
  lastDigitalRandomEffect = now;
  registerAbilityExecution('digitalRandomEffect');
  // ...
}

// Check for glitch effect every 60-120s
const glitchMinCooldown = 60000;
const glitchMaxCooldown = 120000;
const glitchCooldown = glitchMinCooldown + Math.random() * (glitchMaxCooldown - glitchMinCooldown);

if(now - lastDigitalGlitch >= glitchCooldown){
  lastDigitalGlitch = now;
  registerAbilityExecution('digitalGlitch');
  // ...
}
```

- **Usa:** 
  - `lastDigitalRandomEffect` (último)
  - `lastDigitalGlitch` (último)
- **Inicializado en:** player-stats.js (ABILITY_STATES)
- **Evaluación en beeswarm.html:**
  - Línea 1649: `lastDigitalRandomEffect = s.lastDigitalRandomEffect || 0;`
  - Línea 1649: `lastDigitalGlitch = s.lastDigitalGlitch || 0;`
  - Línea 1566: En lista de variables a guardar
- **Problemas:** Ninguno

---

### 16. moonBeeAbility() - Línea 4361
**Estado:** ✅ BUENO

```javascript
const now = Date.now();
const cooldown = 60000; // 1 minute

if(now - lastMoonLaser < cooldown) return;

lastMoonLaser = now;
registerAbilityExecution('moonBeeAbility');
```

- **Usa:** `lastMoonLaser` (último)
- **Inicializado en:** player-stats.js (ABILITY_STATES)
- **Evaluación en beeswarm.html:**
  - Línea 1654: `lastMoonLaser = s.lastMoonLaser || 0;`
  - Línea 1566: En lista de variables a guardar
- **Problemas:** Ninguno

---

### 17. fourBeeAbility() - Línea 4721
**Estado:** ✅ BUENO

```javascript
const now = Date.now();
const cooldown = 5 * 60 * 1000; // 5 minutes

if(now - lastFourFormation < cooldown) return;

lastFourFormation = now;
registerAbilityExecution('fourFormation');
```

- **Usa:** `lastFourFormation` (último)
- **Inicializado en:** player-stats.js (ABILITY_STATES)
- **Evaluación en beeswarm.html:**
  - Línea 1653: `lastFourFormation = s.lastFourFormation || 0;`
  - Línea 1566: En lista de variables a guardar
- **Problemas:** Ninguno

---

## RESUMEN DE PROBLEMAS ENCONTRADOS

### Funciones Completamente Rotas (3):

| Función | Línea | Problema | Severidad |
|---------|-------|---------|-----------|
| `spicyBeeTick()` | 3098 | `nextSpicyAbilityTime` undefined, no inicializado | 🔴 CRÍTICO |
| `kingCrimsonBeeTick()` | 2963 | `window.nextKingCrimsonTime` no guardado en player-stats.js | 🔴 CRÍTICO |
| `ticketBeeAbility()` | 3677 | Check redundante, pero funciona | 🟡 MENOR |
| `goldenBeeAbility()` | 3695 | Check redundante, pero funciona | 🟡 MENOR |

### Variables Rotas por Inicializar:

1. **`nextSpicyAbilityTime`** - NO EXISTE EN NINGÚN LADO
   - Nunca inicializada
   - Nunca guardada
   - Usada sin definición (línea 3101)

2. **`window.nextKingCrimsonTime`** - INCONSISTENCIA CON ARQUITECTURA
   - Usada en `window.` scope (línea 2971-2978)
   - No está en player-stats.js
   - No se guarda en estructura de guardado
   - Se pierden datos al cambiar campo

### Inicializaciones Correctas:

**17 variables inicializadas correctamente en player-stats.js:**
- `lastFireBeeAbility`
- `lastSpicyAbility` 
- `lastDemonAbility`
- `lastLaserAbility`
- `lastGooGeneration`
- `lastTeslaBeeAbility`
- `lastThunderBeeAbility`
- `lastGooTileGeneration`
- `lastPhotonAbility`
- `lastDigitalRandomEffect`
- `lastDigitalGlitch`
- `lastMoonLaser`
- `lastFourFormation`
- `lastLionAbility`
- `lastKingCrimsonAbility`
- `lastCrimsonGuardSynergy`
- `crimsonTilesActive`

**2 variables declaradas localmente (aceptable pero inconsistente):**
- `ticketBeeAbilityTime` (línea 787)
- `goldenBeeAbilityTime` (línea 788)

---

## RECOMENDACIONES

### 1. URGENTE - Reparar `spicyBeeTick()`
- Agregar `nextSpicyAbilityTime = 0;` a player-stats.js ABILITY_STATES
- Cambiar línea 3101 para usar variable local sin problemas
- Asegurar que se guarda/carga correctamente

### 2. URGENTE - Reparar `kingCrimsonBeeTick()`
- Cambiar `window.nextKingCrimsonTime` a variable local
- Agregar a player-stats.js ABILITY_STATES
- Sincronizar con sistema de guardado

### 3. Refactorizar `ticketBeeAbility()` y `goldenBeeAbility()`
- Quitar check redundante `if(!variable) variable = 0;`
- Mover a player-stats.js para consistencia
- Eliminar declaración con `let` en línea 787-788

### 4. Prueba de Regresión
- Verificar que todas las funciones usan `lastXxxAbility` (patrón correcto)
- NO usar `nextXxxAbilityTime` (patrón incorrecto)
- Guardar/cargar todos los estados correctamente

---

## ESTADO DE GUARDADO EN beeswarm.html

**Línea 1566 - Variables que se guardan:**
Incluidas correctamente en la lista de exportación para todas las funciones EXCEPTO:
- ❌ `nextSpicyAbilityTime` (no existe)
- ❌ `window.nextKingCrimsonTime` (usando window scope)
- ⚠️ `ticketBeeAbilityTime` (debe estar en PLAYER_TRACKING)
- ⚠️ `goldenBeeAbilityTime` (debe estar en PLAYER_TRACKING)

**Línea 1640-1661 - Variables que se cargan:**
La mayoría está correctamente inicializada con `s.variable || 0`

---

## CONCLUSIÓN

**13/17 funciones están correctas** ✅  
**4/17 funciones tienen problemas** ❌

De estos 4:
- **3 son críticos** (necesitan fix inmediato)
- **1 es menor** (funciona pero con código redundante)

Las variables que siguen el patrón `lastXxxAbility` están BIEN inicializadas en player-stats.js.  
Las variables que usan `nextXxxAbilityTime` están ROTAS y no inicializadas.
