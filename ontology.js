// A collection of data that we can pull from for generation

const CHARACTER_IDENTITIES = [
    {name: "Jack", pronouns: ["he", "they"]},
    {name: "Isaac", pronouns: ["he", "they"]},
    {name: "Ike", pronouns: ["he", "they"]},
    {name: "Jill", pronouns: ["she", "they"]},
    {name: "Mia", pronouns: ["she", "they"]},
    {name: "Serina", pronouns: ["she", "they"]},
];

const ELEMENTS = [
    "Fire",
    "Ice",
    "Thunder",
    "Water",
    "Wind",
    "Earth",
    "Light",
    "Darkness",
    "Wood",
    "Metal",
    "Void"
];

const STATUS_EFFECTS = [
    "Stun",
    "Poison",
    "Sleep",
    "Burn",
    "Freeze",
    "Confusion",
    "Berserk",
    "Slow",
    "Blind",
    "Instakill"
];

const WEAPON_TYPES = [
    "1h Sword",
    "2h Sword",
    "Twin Swords",
    "Axe",
    "Lance",
    "Hammer",
    "Katana",
    "Fists",
    "Bow & Arrow",
    "Staff",
    "Wand",
    "Gun"
];

const ULTIMATE_WEAPONS = {
    "1h Sword": ["Excalibur"],
    "Bow & Arrow" : ["Artemis Bow"],
    "Fists": ["Godhand"]
};

const TOWN_FEATURES = [
    "Port",
    "Cathedral",
    "Fountain",
    "Castle",
    "Market",
    "Graveyard"
];

const TOWN_BIOMES = [
    "Grassland",
    "Mountains",
    "Tropical",
    "Tundra",
    "Swamp",
    "Forest"
]

const DUNGEON_OBSTACLES = [
    "Maze",
    "Powerful Foes",
    "Puzzle",
    "Traps",
    "Time Limit"
]

const DUNGEON_TERRAIN_TYPES = [
    "Cave",
    "Canyon",
    "Castle",
    "Sewer",
    "Forest",
    "Underwater",
    "Island",
    "Mountain"
]

const MOB_CLASSES = [
    "Wolves",
    "Insects",
    "Undead",
    "Demons",
    "Fish",
    "Plants",
    "Birds",
    "Elementals",
    "Soldiers",
    "Robots",
    "Humanoids",
    "Slimes",
    "Mages",
    "Knights",
    "Mushrooms"
]

const BOSS_SPECIAL_EFFECTS = [
    "Big Hit",
    "AoE",
    "Status Effect",
    "Call Adds"
]

const BOSS_SPECIAL_CONSTRAINTS = [
    "Obvious Telegraph",
    "Blockable",
    "Countdown",
    "Counter with Weakness"
]