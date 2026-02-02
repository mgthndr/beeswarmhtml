/* ================= BEES CONFIGURATION ================= */
/* 
 * This file contains all bee definitions, special bees, eggs, abilities, and synergies.
 * Add new bees here with their complete configuration.
 */

/* ================= PARTICLE EFFECTS CONFIGURATION ================= */
/*
 * Configure particle effects for abilities:
 * - side: 'all'|'top'|'bottom'|'left'|'right'|'corners'
 * - quantity: number of particles (1-20)
 * - speed: particle speed in px/s (50-500)
 * - spread: angle spread in degrees (0-360)
 * - img: particle image or emoji (fire 🔥, star ⭐, spark ✨, etc)
 * - duration: particle lifetime in ms (500-2000)
 * - scale: particle size (0.5-2)
 */
const PARTICLE_EFFECTS = {
  fire: {side:'all', quantity:6, speed:120, spread:180, img:'🔥', duration:800, scale:0.8, loopInterval:400},
  darkFire: {side:'all', quantity:5, speed:140, spread:200, img:'💜', duration:900, scale:0.7, loopInterval:450},
  laser: {side:'right', quantity:4, speed:200, spread:45, img:'⚡', duration:600, scale:0.9, loopInterval:350},
  thunder: {side:'all', quantity:8, speed:180, spread:360, img:'⚡', duration:700, scale:0.8, loopInterval:500},
  goo: {side:'all', quantity:5, speed:100, spread:180, img:'💗', duration:1000, scale:0.9, loopInterval:600},
  bubble: {side:'all', quantity:4, speed:80, spread:180, img:'🫧', duration:600, scale:0.7, loopInterval:400},
  photon: {side:'all', quantity:8, speed:160, spread:360, img:'✨', duration:700, scale:0.9, loopInterval:500},
  digital: {side:'all', quantity:6, speed:150, spread:360, img:'🟩', duration:800, scale:0.8, loopInterval:450},
  gummy: {side:'all', quantity:4, speed:90, spread:180, img:'🟪', duration:700, scale:0.9, loopInterval:400}
};

// Regular bees with all their properties
const BEES = [
  {
    id:"bee1",
    name:"Basic Bee",
    rarity:"common",color:"#5c3823",colorType:"colorless",
    img:"bee_basic.png",
    
    desc:"The most normal bee.",
    ability:"Living",
    value:0,
    synergies:["golden"],
    tier:0
  },

  {
    id:"bee2",
    name:"Cool Bee",
    rarity:"rare",color:"#4169E1",colorType:"blue",img:"bee_cool.png",
    desc:"Perfect for blue pollen",
    ability:"",
    value:5,
    synergies:["golden"],
    tier:1
  },
  {
    id:"bee3",
    name:"Hasty Bee",
    rarity:"rare",color:"#d2f02c",colorType:"colorless",img:"bee_hasty.png",
    desc:"Increases Crit Chance and reduces tool cooldown.",
    ability:"",
    value:2,
    synergies:["royal"],
    hastyBuff:0.95,
    tier:1
  },
  {
    id:"bee4",
    name:"Honey Bee",
    rarity:"rare",color:"#FFD700",colorType:"yellow",img:"bee_honey.png",
    desc:"Increases Conversion Rate.",
    ability:"",
    value:20,
    synergies:["royal"],
    tier:1
  },
  {
    id:"bee5",
    name:"Fuzzy Bee",
    rarity:"mythic",color:"#523b32",colorType:"colorless",img:"bee_fuzzy.png",
    desc:"Increases Instant Conversion.",
    ability:"Fuzzy Boom",
    value:5,
    synergies:["mystical"],
	mixedColors:["#9932CC","#FF1493"],
	tier:4
  },
  {
		id:"bee6",
		name:"Fire Bee",
		rarity:"epic",color:"#FF4500",colorType:"red",img:"bee_fire.png",
		desc:"Generates fire on the tiles.",
		ability :"Fire",
		value : 0,
		synergies:[],
		tier :3,
		particles: {side:'all', quantity:6, speed:120, spread:180, img:'🔥', duration:800, scale:0.8}
	},
  {
		id :"bee7",
		name :"Bouyant Bee",
		rarity :"mythic", color :"#2354af", colorType :"blue", img :"bee_bouyan.png",
		desc :"Blue pollen boost and capacity.",
		ability :"Capacity",
		value : 0,
		synergies:[],
	mixedColors:["#9D4EDD","#3A86FF"],
	tier :4
  },
  {
    id:"bee8",
    name:"Spicy Bee",
    rarity:"mythic",color:"#750b1d",colorType:"red",
    img:"bee_spicy.png",
    desc:"Dark Fire and fire on random tiles.",
    ability:"Dark fire, Fire",
    value:0,
    synergies:[],
    tier:4
  },

  {
    id:"bee9",
    name:"Lazy Bee",
    rarity:"rare",color:"#868686",colorType:"colorless",
    img:"bee_lazy.png",
    desc:"Improves Instant Conversion.",
    ability:"",
    value:10,
    synergies:[],
    tier:1
  },
  {
    id:"bee10",
    name:"Commander Bee",
    rarity:"rare",color:"#4CAF50",colorType:"colorless",img:"bee_commander.png",
    desc:"Increases Critical Chance and Critical Power.",
    ability:"",
    value:0,
    synergies:[],
    tier:2

  },
  {
    id:"bee11",
    name:"Tenacity Bee",
    rarity:"epic",color:"#47130d",colorType:"red",img:"bee_tenacity.png",
    desc:"Buff red pollen as passive.",
    ability:"",
    value:1.2,
    synergies:[],
    tier:2
  },
  {
    id: "bee12",
    name: "Bubble Bee",
    rarity: "epic",color: "#96c4e2",colorType: "blue",img: "bee_bubble.png",
    desc: "Buff blue pollen as passive and Generates Bubbles on the tiles.",
    ability: "Bubbles",
    value: 1.2,
    synergies: [],
    tier: 3

  },

  {
    id:"bee13",
    name:"Petal Bee",
    rarity:"epic",color:"#9adfaf",colorType:"colorless",img:"bee_petal.png",
    desc:"Buff white pollen as passive.",
    ability:"",
    value:1.2,
    synergies:[],
    tier:2

  },
  {
    id:"bee14",
    name:"Demon Bee",
    rarity:"legendary",color:"#753560",colorType:"red",img:"bee_demon.png",
    desc:"Creates Fire and Dark Fire on random tiles.",
    ability:"Fire, Dark Fire",
    value:0,
    synergies:[],
    tier:3
  },
  {
    id:"bee15",
    name:"Diamond Bee",
    rarity:"legendary",color:"#a4f3ef",colorType:"blue",img:"bee_diamond.png",
    desc:"Buff Convert Rate.",
    ability:"",
    value:25,
    synergies:[],
    tier:3
  },
  {
    id:"bee16",
    name:"Laser Bee",
    rarity:"legendary",color:"#FF0000",colorType:"red",img:"bee_laser.png",
    desc:"Invokes laser beams (horizontal/vertical).",
    ability:"Laser Striker",
    value:0,
    synergies:[],
    tier:4,
    particles: {side:'right', quantity:4, speed:200, spread:45, img:'⚡', duration:600, scale:0.9}
  },
  {id:"bee17",name:"Thunder Bee",rarity:"epic",color:"#4169E1",colorType:"blue",img:"bee_thunder.png",desc:"Applies energy effect to tiles.",ability:"Energy",value:0,synergies:[],tier:3,particles:{side:'all', quantity:8, speed:180, spread:360, img:'⚡', duration:700, scale:0.8}},
  {id:"bee18",name:"Ticket Bee",rarity:"epic",color:"#ffbc2c",colorType:"yellow",img:"bee_golden.png",desc:"20% chance to get +2 tickets every 1 minute.",ability:"Ticket Boost",value:500,synergies:[],tier:3},
  {id:"bee20",name:"Lion Bee",rarity:"legendary",color:"#ceb152",colorType:"yellow",img:"bee_lion.png",desc:"Destroys 3 random tiles gaining.",ability:"Destroyer",value:0,synergies:[],tier:4},
  {id:"bee21",name:"Rad Bee",rarity:"rare",color:"#af5555",colorType:"red",img:"bee_rad.png",desc:"Boosts red pollen.",ability:"",value:5,synergies:[],tier:1},
  {id:"bee22",name:"Silver Bee",rarity:"rare",color:"#C0C0C0",colorType:"colorless",img:"bee_silver.png",desc:"Boosts white pollen.",ability:"",value:0,synergies:[],tier:1},
  {id:"bee23",name:"Moon Bee",rarity:"mythic",color:"#6b5779",colorType:"purple",img:"bee_moon.png",desc:"Generates a tesla laser.",ability:"Energy, Dark Fire",value:0,synergies:[],tier:4},
  {id:"bee24",name:"Devil Bee",rarity:"epic",color:"#3d1e1e",colorType:"red",img:"bee_devil.png",desc:"Buff Fire Pollen.",ability:"",value:0,synergies:[],tier:3},
  {id:"bee25",name:"Four Bee",rarity:"legendary",color:"#444444",colorType:"blue",img:"bee_four.png",desc:"444444444",ability:"4444",value:0,synergies:[],tier:3},
  {
    id:"bee26",
    name:"Tidal Popper Bee",
    rarity:"ultimate",
    color:"#4863fc",colorType:"blue",
    img:"bee_cool.png",
    desc:"Creates bubbles in the tiles.",
    ability:"Bubble",
    value:0,
    synergies:[],
    mixedColors:["#1660ce","#000000"],
    tier:5},
  {
    id:"bee27",
    name:"Transcendent Bee",
    rarity:"ultimate",color:"#bba4a4",colorType:"colorless",

    img:"bee_mystic.png",
    desc:"Buff All Colors Pollen.",
    ability:"",
    value:0,
    synergies:[],
    mixedColors:["#FF00FF","#00FF00"],
    tier:5},
  {
    id:"bee28",
    name:"Meteors Shower Bee",
    rarity:"ultimate",color:"#800780",colorType:"purple",
    img:"bee_cool.png",
    desc:"Generates meteors on random tiles.",
    ability:"Meteors",
    value:0,
    synergies:[],
    mixedColors:["#FF00FF","#FF1493"],tier:5},
  
 ];

// Special bees available for purchase with tickets
const SPECIAL_BEES = [
  {id:"special_bee1",name:"Golden Queen Bee",rarity:"special",color:"#ffec81",colorType:"yellow",img:"bee_goldenqueen.png",desc:"Get 5 basic bees.",ability:"Pollen",value:0,priceType:"tickets",price:5,synergies:[],bonusMultipliers:{"bee1":11},tier:4},
  {id:"special_bee2",name:"Royal Guard Bee",rarity:"special",color:"#9e213a",colorType:"red",img:"bee_royal.png",desc:"After 10 Critics: +1000% Critical Chance 3s.",ability:"Critical",value:0,priceType:"tickets",price:5,synergies:["crimson-guard"],bonusMultipliers:{"bee3":11,"bee4":11},tier:5},
  {id:"special_bee3",name:"Gummy Bee",rarity:"special",color:"#FF69B4",colorType:"colorless",img:"bee_gummy.png",desc:"Creates Goo on random tiles.",ability:"Goo",value:0,priceType:"tickets",price:3,synergies:[],mixedColors:["#FF69B4","#00FF00","#9D4EDD"],tier:4},
  {id:"special_bee4",name:"Tesla Bee",rarity:"special",color:"#74bdda",colorType:"blue",img:"bee_tesla.png",desc:"Creates Tesla Lasers on random tiles.",ability:"Tesla Lasers",value:0,priceType:"tickets",price:1,synergies:[],bonusMultipliers:{"bee16":6,"bee17":6},tier:5},
  {id:"special_bee5",name:"Photon Bee",rarity:"special",color:"#fae46a",colorType:"yellow",img:"bee_photon.png",desc:"Creates Photon Beams on random tiles.",ability:"Photon Beams",value:0,priceType:"tickets",price:2,synergies:[],bonusMultipliers:{"bee20":3},tier:5},
  {id:"special_bee6",name:"Digital Bee",rarity:"special",color:"#547254",colorType:"colorless",img:"bee_digital.png",desc:"Creates Digital Effects on random tiles.",ability:"Digital Glitch",value:0,priceType:"tickets",price:3,synergies:[],mixedColors:["#FF0000","#00FF00","#000000"],tier:5},
  {id:"special_bee7",name:"King Crimson Bee",rarity:"special",color:"#330f17",colorType:"red",img:"bee_kingcrimson.png",desc:"",ability:"kingCrimsonBee",value:0,priceType:"tickets",price:4,synergies:["crimson-guard"],mixedColors:["#FF69B4","#DC143C","#8B4513"],tier:5}
];

// Egg definitions: name, price, image, rarity probabilities
const EGGS = [
  {id:"egg_basic",name:"Basic Egg",price:100,img:"egg_basic.png",probs:{common:80,rare:15,epic:0,legendary:0,mythic:0,ultimate:0},frameStyle:{bg:"#333",gradient:false},mult:2.4,cap:10000000},
  {id:"egg_silver",name:"Silver Egg",price:2500,img:"egg_silver.png",probs:{common:0,rare:70,epic:15,legendary:5,mythic:0,ultimate:0},frameStyle:{bg:"linear-gradient(90deg,#bbb,#333)",gradient:true},mult:3.6,cap:250000000},
  {id:"egg_golden",name:"Golden Egg",price:10000,img:"egg_golden.png",probs:{common:0,rare:0,epic:60,legendary:40,mythic:0,ultimate:0},frameStyle:{bg:"linear-gradient(90deg,#f1c40f,#333)",gradient:true},mult:4.8,cap:1000000000},
  {id:"egg_diamond",name:"Diamond Egg",price:300000,img:"egg_diamond.png",probs:{common:0,rare:0,epic:0,legendary:95,mythic:5,ultimate:0},frameStyle:{bg:"linear-gradient(90deg,#7ef,#333)",gradient:true},mult:5.5,cap:20000000000},
  {id:"egg_mythic",name:"Mythic Egg",price:10000000,img:"egg_mythic.png",probs:{common:0,rare:0,epic:0,legendary:0,mythic:99,ultimate:99},frameStyle:{bg:"linear-gradient(90deg,#ff1493,#333)",gradient:true},mult:7.2,cap:1500000000000}
];


// Synergies between bees
const SYNERGIES = [
  {id:"golden",name:"Golden Touch",requirement:["bee1","bee2"],bonus:{pollenBonus:15}},
  {id:"royal",name:"Royal Guard",requirement:["bee3","bee6"],bonus:{criticalChance:5,criticalPower:0.3}},
  {id:"worker",name:"Worker Colony",requirement:["bee7","bee10"],bonus:{pollenBonus:20,convertBonus:10}},
  {id:"mystical",name:"Mystical Convergence",requirement:["bee5","bee8","bee9"],bonus:{instantConversion:10,pollenBonus:10}},
  {id:"champion",name:"Champion's Path",requirement:["bee4","bee10"],bonus:{criticalPower:1,criticalChance:3}},
  {id:"crimson-guard",name:"Crimson Guard",requirement:["special_bee2","special_bee7"],bonus:{criticalChance:100,criticalPower:5}}
];

// Current dynamic prices per egg (persisted in localStorage)
let eggPrices = {};
EGGS.forEach(e => eggPrices[e.id] = e.price);

/* ================= BEE BUFFS MAP ================= */
/*
 * Maps each bee to its static buff values applied to player stats.
 * Includes all player statistics that can be affected by equipped bees.
 * 
 * Supported buff properties:
 * - pollenBonus: adds to total pollen percentage
 * - convertBonus: adds to conversion rate percentage
 * - instantConversion: adds to instant conversion percentage
 * - criticalChance: adds to critical chance percentage
 * - criticalPower: adds to critical power multiplier (2 = +200%, 0.05 = +5%)
 * - superCriticalChance: adds to super critical chance percentage
 * - capacityBonus: adds to max pollen capacity
 * - toolCooldownReduction: reduces tool cooldown (0.05 = -5% cooldown)
 * - honeyBonus: adds to honey generation percentage
 * - beePollenBonus: adds to bee-specific pollen bonuses
 * - beeConvertBonus: adds to bee-specific convert bonuses
 * - beeCriticalChance: adds to bee-specific critical chance
 * - beeCriticalPower: adds to bee-specific critical power
 * - beeInstantConversion: adds to bee-specific instant conversion
 * - gooMultiplier: multiplier for goo pollen effects
 * - gooPollenCollected: static goo pollen earned
 * - fireMultiplier: multiplier for fire effects (power, damage, etc)
 * - darkFireMultiplier: multiplier for dark fire effects
 * - colorMultipliers: per-color pollen multipliers (red, blue, white, yellow, purple)
 * 
 * 
 */


const BUFFS_MAP = {
  'bee1': {
    pollenBonus: 5, 
    convertBonus: 5 
  },

  'bee2': { 
    convertBonus: 5, 
    colorMultipliers: { blue: 1.1 } 
  },

  'bee3': { 
    criticalChance: 2, 
    toolCooldownReduction: 0.05
   },

  'bee4': { 
    convertBonus: 15, 
    pollenBonus: 50, 
    colorMultipliers: { yellow: 1.1 }
   },

  'bee5': { 
    colorMultipliers: { white: 1.2 }, 
    instantConversion: 10, 
    pollenBonus: 5, 
    convertBonus:50 
  },

  'bee6': { 
    fireMultiplier: 1.5, 
    pollenBonus: 20, 
    colorMultipliers: { red: 1.2 }
   },

  'bee7': { 
    capacityBonus: 50000, 
    pollenBonus: 50, 
    colorMultipliers: { blue: 1.2 }, 
    convertBonus:10
   },

  'bee8': { 
    colorMultipliers: {red: 1.2 }, 
    darkFireMultiplier: 1.5, 
    pollenBonus: 50, 
    criticalChance: 10, 
    criticalPower: 0.5, 
    fireMultiplier: 1.2 
  },

  'bee9': { 
    instantConversion: 10, 
    pollenBonus: 5, 
    capacityBonus: 100 
   },

  'bee10': { 
    criticalChance: 10, 
    criticalPower: 0.15
   },

  'bee11': { 
    colorMultipliers: { red: 1.2 }, 
    fireMultiplier: 1.1
   },

  'bee12': { 
    colorMultipliers: { blue: 1.2 }, 
    bubbleMultiplier: 1.5, 
    capacityBonus: 5000
   },

  'bee13': { 
    pollenBonus:50,
    colorMultipliers: { white: 1.2 }
   },

  'bee14': { 
    criticalChance: 10, 
    criticalPower: 5.15, 
    fireMultiplier: 1.5, 
    darkFireMultiplier: 1.5
   },

  'bee15': { 
    convertBonus: 100, 
    pollenBonus: 100, 
    colorMultipliers: { blue: 1.3 }
   },

  'bee16': { 
    pollenBonus: 100, 
    fireMultiplier: 1.5, 
    colorMultipliers: { red: 1.3 }
   },

  'bee17': { 
    colorMultipliers: { blue: 1.5 }, 
    pollenBonus: 10 
  },

  'bee18': { 
    instantConversion: 10, 
    honeyBonus: 2 
  },

  'bee19': { 
    convertBonus: 20, 
    instantConversion: 10, 
    colorMultipliers: { yellow: 1.2 }, 
    capacityBonus: 100000, 
    honeyBonus: 50 
  },

  'bee20': { 
    pollenBonus: 20, 
    criticalChance: 10, 
    criticalPower: 0.1, 
    fireMultiplier: 1.3
   },  

  'bee21': { 
    convertBonus: 5, 
    colorMultipliers: { red: 1.1 } 
  },

  'bee22': { 
    pollenBonus: 5, 
    colorMultipliers: { white: 1.1 }
  },

  'bee23': { 
    colorMultipliers: { blue: 2, purple: 2 }, 
    darkFireMultiplier: 1.2, 
    pollenBonus: 20
  },

  'bee24': { 
    colorMultipliers: { red: 1.2 }, 
    fireMultiplier: 1.8 
  },

  'bee25': { 
    pollenBonus: 44, 
    criticalChance: 4, 
    criticalPower: 0.44, 
    instantConversion: 4, 
    bubbleMultiplier: 1.4 
  },

  'bee26': {  //ultimate
    pollenBonus: 20, 
    convertBonus: 3, 
    honeyBonus: 25
  
  },

  'bee27': { //ultimate
    pollenBonus: 20, 
    criticalChance: 10, 
    instantConversion: 50, 
    colorMultipliers: { blue: 1.25, purple: 1.25, white: 1.25, yellow: 1.25, red: 1.25 },
    fireMultiplier: 1.2,
    darkFireMultiplier: 1.2,
    gooMultiplier: 1.2
  },
  


  
  'special_bee1': { pollenBonus: 1000, convertBonus: 200, instantConversion: 50, colorMultipliers: { yellow: 5 }, honeyBonus: 1
   },
  'special_bee2': { criticalChance: 10, criticalPower: 10, superCriticalChance: 5, colorMultipliers: { red: 3 }, fireMultiplier: 1.5 },
  'special_bee3': { gooMultiplier: 3.75, gooPollenCollected: 200, instantConversion: 100, colorMultipliers: { white: 5 } },
  'special_bee4': { convertBonus: 50, instantConversion: 30, colorMultipliers: { blue: 5, purple: 2 } },
  'special_bee5': { instantConversion: 100, convertBonus: 500, colorMultipliers: { yellow: 5 }, fireMultiplier: 1.3 },
  'special_bee6': { pollenBonus: 100, criticalChance: 30, fireMultiplier: 1.4, darkFireMultiplier: 1.4, bubbleMultiplier: 1.4, gooMultiplier: 1.4, colorMultipliers: { red: 2, blue: 2, white: 2 } },
  'special_bee7': { 
    pollenBonus: 1000, 
    criticalChance: 60, 
    superCriticalChance: 5, 
    criticalPower: 5, 
    colorMultipliers: { red: 3 },
    fireMultiplier: 10,
    darkFireMultiplier: 5
  }
};
