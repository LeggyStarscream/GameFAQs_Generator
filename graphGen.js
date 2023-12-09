
// graphSize is the number of town-dungeon pairs we wanna generate

const CHAR_COUNT = 4;

function generateGraph(graphSize)
{

    var g = new graphlib.Graph();
    var gameProps = generateGameProperties();

    // These are orienting / category nodes
    // Useful for getting easy access to classes of objects
    g.setNode("Characters");
    g.setNode("Plot Start");
    g.setNode("Plot End");
    g.setNode("Game Properties", gameProps);
    g.setNode("Weapons");

    var names = pickWithoutReplacement(CHARACTER_IDENTITIES, CHAR_COUNT);

    var weapons = weaponDistribution(gameProps["usedWeaponTypes"]);

    for (var i = 0; i < CHAR_COUNT; i++)
    {
        // Set up Character parameters
        var params = {
            "Name": names[i].name, 
            "Pronouns": pickRandom(names[i].pronouns),
            "Weapons": weapons[i]
        };
        var nodeName = "Character " + i;
        g.setNode(nodeName, params);
        g.setEdge("Characters", nodeName);
        for (var j = 0; j < params["Weapons"].length; j++)
        {
            g.setNode(params["Weapons"][j]);
            g.setEdge("Weapons", params["Weapons"][j]);
        }
    }

    var currentNode = "Plot Start";

    for (var i = 0; i < graphSize; i++)
    {
        var TownDetails = {
            "features": pickRandom(TOWN_FEATURES),
            "biomes": pickRandom(TOWN_BIOMES),
        };
        var DungeonDetails = {
            "main_obstacle": pickRandom(DUNGEON_OBSTACLES),
            "terrain": pickRandom(DUNGEON_TERRAIN_TYPES),
            "mob_types": pickAtMost(MOB_CLASSES, 5),
            "boss_data": {
                "mob_type": pickRandom(MOB_CLASSES),
                "weakness": pickAtMost_Evenly(ELEMENTS, 3),
                "resistance": pickAtMost_Evenly(ELEMENTS, 2),
            }
        };
        g.setNode("Town " + i, TownDetails);
        g.setEdge(currentNode, "Town " + i, "Plot Step");
        g.setNode("Dungeon " + i, DungeonDetails);
        g.setEdge("Town " + i, "Dungeon " + i, "Plot Step");
        currentNode = "Dungeon " + i;
    }

    g.setEdge(currentNode, "Plot End");

    console.log(g.outEdges("Weapons"));
    return g;
}

function weaponDistribution(weaponList) {

    const equipTypes = Math.random();
    
    if (equipTypes <= .5)
    {
        var tempArray = pickWithoutReplacement(weaponList,CHAR_COUNT);
        return tempArray.map((item) => [item]);
    }
    else {
        var outArray = [];
        for (var i = 0; i < CHAR_COUNT; i++)
        {
            // Varies between [0,1.5)
            const randVal = Math.random() +  (.5 * Math.random());
            const weaponsUsed = Math.floor(2 * randVal) + 1;
            outArray.push(pickWithoutReplacement(weaponList,weaponsUsed));
        }
    }

    return outArray;
}

function generateGameProperties() {
    return {
        usedWeaponTypes: pickNumberWithinRange(WEAPON_TYPES, 5, 8)
    };
};