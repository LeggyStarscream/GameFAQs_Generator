// A collection of data that we can pull from for generation

const CHARACTER_IDENTITIES = [
    {name: "Alison", pronouns: ["she", "they"]},
    {name: "Allison", pronouns: ["she", "they"]},
    {name: "Clair", pronouns: ["she", "they"]},
    {name: "Claire", pronouns: ["she", "they"]},
    {name: "Cloud", pronouns: ["he", "she", "they"]},
    {name: "Ike", pronouns: ["he", "they"]},
    {name: "Isaac", pronouns: ["he", "they"]},
    {name: "Jack", pronouns: ["he", "they"]},
    {name: "Jennifer", pronouns: ["she", "they"]},
    {name: "Jill", pronouns: ["she", "they"]},
    {name: "Mia", pronouns: ["she", "they"]},
    {name: "Melody", pronouns: ["she", "they"]},
    {name: "Serina", pronouns: ["she", "they"]},
    {name: "Squall", pronouns: ["she", "they"]},
    {name: "Stella", pronouns: ["she", "they"]},
    {name: "Terra", pronouns: ["he", "she", "they"]},
    {name: "Tifa", pronouns: ["she", "they"]},
    {name: "Tina", pronouns: ["she", "they"]},
    {name: "Zoe", pronouns: ["she", "they"]},
    {name: "Zoey", pronouns: ["she", "they"]},
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
    "Void",
    "None",
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
];

const TOWN_SIZES = [
    "Hamlet",
    "Village",
    "Small Town",
    "City",
];

const DUNGEON_OBSTACLES = [
    "Maze",
    "Powerful Foes",
    "Puzzle",
    "Traps",
    "Time Limit"
];

const DUNGEON_TERRAIN_TYPES = [
    "Cave",
    "Canyon",
    "Castle",
    "Sewer",
    "Forest",
    "Underwater",
    "Island",
    "Mountain"
];

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
];

const BOSS_SPECIAL_EFFECTS = [
    "Big Hit",
    "AoE",
    "Status Effect",
    "Call Adds",
    "Buff Self"
];

const BOSS_SPECIAL_CONSTRAINTS = [
    "Obvious Telegraph",
    "Blockable",
    "Countdown",
    "Counter with Weakness",
    "None"
];

const BOSS_BUFF_TYPES = [
    "Self-heal",
    "Damage Up",
    "Defense Up",
    "Evasion Up",
    "Remove Debuffs"
];