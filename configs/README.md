# Configuración Modular - Bee Swarm Game

This directory contains all the modular configuration files for the game, organized by category.
Each file is independent and is automatically loaded into `beeswarm.html`.

## Estructura de Archivos

### 📦 `bees.js`
**Contenido:** Todas las definiciones de abejas y sus habilidades

- **BEES** - Array de 40 abejas normales con propiedades:
  - `id`: Identificador único
  - `name`: Nombre mostrado
  - `rarity`: Rareza (common, rare, epic, legendary, mythic)
  - `color`: Color hexadecimal
  - `colorType`: Tipo de color (red, blue, white, yellow, purple, colorless)
  - `img`: Nombre de imagen
  - `desc`: Descripción
  - `ability`: ID de habilidad especial
  - `value`: Valor del bonus (si aplica)
  - `synergies`: Array de IDs de sinergias
  - `tier`: Nivel de potencia (1-5)

- **SPECIAL_BEES** - Array de 7 abejas especiales (compradas con tickets)

- **EGGS** - Array de 5 tipos de huevos con probabilidades de rareza

- **ABILITY_DESCRIPTIONS_EN** - Descripciones de 25+ habilidades

- **BEE_BUFFS** - Detalles de buffs por abeja

- **SYNERGIES** - Array de 5 sinergias activas cuando múltiples abejas se equipan

### 🎒 `storage.js`
**Contenido:** Definiciones de almacenamiento y mochilas

- **STORAGE** - Array de 14 items de almacenamiento con:
  - `id`: Identificador único
  - `rarity`: Rareza del item
  - `name`: Nombre
  - `price`: Costo en miel
  - `desc`: Descripción
  - `bonuses`: Bonificaciones aplicadas
  - `img`: Nombre de imagen
  - `ability`: Habilidad especial (si aplica)

### 🌻 `fields.js`
**Contenido:** Definiciones de campos y flores

- **flowerTypes** - 6 niveles de flores (0-5) con rangos de polen
- **fields** - 14 campos disponibles con distribuciones de colores y flores
- **fieldRequirements** - Cantidad de abejas necesarias para desbloquear cada campo
- **fieldData** - Objeto inicialmente vacío, se rellena durante el juego

### 🔧 `tools.js`
**Contenido:** Definiciones de herramientas y patrones

- **TOOLS** - Array de 20+ herramientas con:
  - `id`: Identificador único
  - `name`: Nombre
  - `rarity`: Rareza
  - `price`: Costo en miel
  - `cooldown`: Tiempo de espera (ms)
  - `pollenBonus`: Bonus de polen (%)
  - `pattern`: Array 9x9 indicando tiles destruidas
  - `desc`: Descripción
  - `ability`: Descripción de habilidad especial

### ⬆️ `upgrades.js`
**Contenido:** Definiciones de mejoras y tipos de habilidad

- **ABILITY_TYPES** - Objeto con 20+ tipos de habilidades y sus propiedades
  - `name`: Nombre
  - `desc`: Descripción
  - `color`: Color hexadecimal
  - `img`: Nombre de imagen

- **UPGRADES** - Array de 11 mejoras disponibles con:
  - `id`: Identificador único
  - `name`: Nombre
  - `stat`: Propiedad a mejorar
  - `description`: Descripción
  - `levels`: Array de niveles con precio y efecto

## Cómo Agregar Nuevo Contenido

### Agregar una Nueva Abeja
1. Abre `configs/bees.js`
2. Agrega un objeto al array `BEES`:
```javascript
{
  id: "bee_NÚMERO",
  name: "Nombre Abeja",
  rarity: "epic",
  color: "#HEX",
  colorType: "red",
  img: "bee_nombre.png",
  desc: "Descripción de la abeja",
  ability: "nombreHabilidad",
  value: 10,
  synergies: ["synergy_id"],
  tier: 3
}
```
3. Si tiene habilidad especial, agrega al `ABILITY_DESCRIPTIONS_EN`:
```javascript
'nombreHabilidad': 'Descripción detallada de qué hace',
```

### Agregar una Nueva Herramienta
1. Abre `configs/tools.js`
2. Agrega un objeto al array `TOOLS`:
```javascript
{
  id: "tool_nombre",
  name: "Nombre Herramienta",
  rarity: "legendary",
  price: 100000,
  cooldown: 1500,
  pollenBonus: 25,
  img: "tool_nombre.png",
  pattern: [
    [0,0,0,1,0,0,0],
    [0,0,1,1,1,0,0],
    [0,1,1,1,1,1,0],
    [1,1,1,1,1,1,1],
    [0,1,1,1,1,1,0],
    [0,0,1,1,1,0,0],
    [0,0,0,1,0,0,0]
  ],
  desc: "Descripción",
  ability: "Descripción de habilidad"
}
```

### Agregar un Nuevo Almacenamiento
1. Abre `configs/storage.js`
2. Agrega un objeto al array `STORAGE`:
```javascript
{
  id: "storage_nombre",
  rarity: "epic",
  name: "Nombre Storage",
  price: 50000,
  desc: "Descripción",
  bonuses: { pollenCapacity: 100000 },
  img: "storage_nombre.png",
  ability: "Habilidad especial (opcional)"
}
```

### Agregar un Nuevo Campo
1. Abre `configs/fields.js`
2. Agrega a `fields`:
```javascript
nuevocamp

o: {
  name: "Nombre Campo",
  colors: {
    red: { chance: 50, flowers: { 0: 25, 1: 50, 2: 5 } },
    blue: { chance: 30, flowers: { 1: 50, 2: 10 } }
  }
},
```
3. Agrega requerimiento en `fieldRequirements`:
```javascript
nuevocampo: 20  // Requiere 20 abejas
```

## Integración con beeswarm.html

Todos estos archivos se cargan automáticamente en `beeswarm.html` mediante:

```html
<script src="configs/bees.js"></script>
<script src="configs/storage.js"></script>
<script src="configs/fields.js"></script>
<script src="configs/tools.js"></script>
<script src="configs/upgrades.js"></script>
```

**IMPORTANTE:** El orden de carga es crucial. Asegúrate de que las dependencias se carguen antes.

## Notas Técnicas

- Todos los archivos deben declarar sus constantes con `const` para que sean globalmente accesibles
- Los IDs deben ser únicos dentro de su categoría
- Los precios deben ser números válidos
- Los valores hexadecimales de color deben estar en formato `#RRGGBB`
- Los patrones de herramientas son arrays 9x9 con 1 (destruida) o 0 (no destruida)
- Los nombres de imagen deben corresponder a archivos en la carpeta `/images`

## Versión
1.0 - Estructura inicial con 5 categorías de configuración

