/* ================= FIELDS CONFIGURATION ================= */
/*
 * This file contains all field definitions with their flower distributions.
 * Add new fields here with all their color/flower configurations.
 */

// Flower type definitions with pollen ranges
const flowerTypes = {
  0: {pollen: {min:1, max:5}},
  1: {pollen: {min:5, max:10}},
  2: {pollen: {min:10, max:20}},
  3: {pollen: {min:20, max:50}},
  4: {pollen: {min:50, max:100}},
  5: {pollen: {min:100, max:500}},
};

// Field definitions with color and flower type distributions
const fields = {
  grandmaster: {
    name: "Grandmaster Field",
    colors: {
      red: {chance: 50, flowers: {5: 100}},
      blue: {chance: 50, flowers: {5: 100}},
      white: {chance: 50, flowers: {5: 100}},
      yellow: {chance: 50, flowers: {5: 100}},
      purple: {chance: 50, flowers: {5: 100}},
    }
  },
  dandelion: {
    name: "Dandelion Field",
    colors: {
      white: {chance: 100, flowers: {0: 25, 1: 50, 2: 1}},
    }
  },
  sunflower: {
    name: "Sunflower Field",
    colors: {
      red: {chance: 15, flowers: {0: 25, 1: 50, 2: 5}},
      blue: {chance: 15, flowers: {0: 25, 1: 50, 2: 5}},
      yellow: {chance: 40, flowers: {1: 40, 2: 10}},
      white: {chance: 15, flowers: {0: 25, 1: 50, 2: 5}}
    }
  },
  mushroom: {
    name: "Mushroom Field",
    colors: {
      red: {chance: 100, flowers: {0: 25, 1: 50, 2: 1}},
    }
  },
  blueflower: {
    name: "Blue Flower Field",
    colors: {
      blue: {chance: 100, flowers: {0: 25, 1: 50, 2: 1}},
      purple: {chance: 20, flowers: {0: 25, 1: 50, 2: 1}},
    }
  },
  clover: {
    name: "Clover Field",
    colors: {
      red: {chance: 60, flowers: {0: 25, 1: 50, 2: 5}},
      blue: {chance: 60, flowers: {0: 25, 1: 50, 2: 5}},
      white: {chance: 20, flowers: {0: 25, 1: 50, 2: 5}}
    }
  },
  spider: {
    name: "Spider Field",
    colors: {
      white: {chance: 100, flowers: {1: 50, 2: 10}},
    }
  },
  bamboo: {
    name: "Bamboo Field",
    colors: {
      blue: {chance: 80, flowers: {1: 50, 2: 10}},
      purple: {chance: 20, flowers: {1: 50, 2: 10}},
      white: {chance: 10, flowers: {1: 1, 2: 0.3}}
    }
  },
  strawberry: {
    name: "Strawberry Field",
    colors: {
      red: {chance: 80, flowers: {1: 50, 2: 10}},
      white: {chance: 10, flowers: {1: 1, 2: 0.3}}
    }
  },
  pineaple: {
    name: "Pineapple Field",
    colors: {
      red: {chance: 10, flowers: {1: 50, 2: 10}},
      blue: {chance: 10, flowers: {1: 50, 2: 10}},
      yellow: {chance: 60, flowers: {1: 40, 2: 10}},
      white: {chance: 40, flowers: {1: 1, 2: 0.3}}
    }
  },
  cactus: {
    name: "Cactus Field",
    colors: {
      red: {chance: 80, flowers: {1: 30, 2: 10, 3: 5}},
      blue: {chance: 80, flowers: {1: 30, 2: 10, 3: 5}},
      white: {chance: 10, flowers: {1: 1, 2: 0.3}}
    }
  },
  pumpkin: {
    name: "Pumpkin Field",
    colors: {
      red: {chance: 5, flowers: {1: 30, 2: 10, 3: 5}},
      blue: {chance: 5, flowers: {1: 30, 2: 10, 3: 5}},
      yellow: {chance: 50, flowers: {1: 30, 2: 10, 3: 5}},
      white: {chance: 60, flowers: {1: 30, 2: 10, 3: 1}}
    }
  },
  pinecone: {
    name: "Pinecone Tree Field",
    colors: {
      blue: {chance: 90, flowers: {1: 30, 2: 10, 3: 10}},
      white: {chance: 10, flowers: {1: 30, 2: 10, 3: 1}}
    }
  },
  rose: {
    name: "Rose Field",
    colors: {
      red: {chance: 90, flowers: {1: 30, 2: 10, 3: 10}},
      white: {chance: 10, flowers: {1: 30, 2: 10, 3: 1}}
    }
  },
  mountain: {
    name: "Mountain Top Field",
    colors: {
      red: {chance: 90, flowers: {2: 50, 3: 20, 4 : 2}},
      white: {chance: 10, flowers: {2: 50, 3: 20, 4 : 2}}
    }
  },
  coconut: {
    name: "Coconut Filed",
    colors: {

      white: {chance: 60, flowers: {3: 50, 4 : 10, 5 : 1}},
      yellow: {chance: 10, flowers: {3: 10, 4 : 2}},
    }
  },


};

// Field unlock requirements (bees needed to unlock each field)
const fieldRequirements = {
  grandmaster: 50,
  dandelion: 0,
  sunflower: 0,
  mushroom: 0,
  blueflower: 0,
  clover: 0,
  spider: 5,
  bamboo: 5,
  strawberry: 5,
  pineaple: 10,
  cactus: 20,
  pumpkin: 20,
  pinecone: 20,
  rose: 20,
  mountain: 25,
  coconut: 40,
};
