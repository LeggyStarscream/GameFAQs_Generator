
// graphSize is the number of town-dungeon pairs we wanna generate
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

    var characterCount = 4;
    var names = pickWithoutReplacement(CHARACTER_IDENTITIES, characterCount);
    console.log(WEAPON_TYPES);

    for (var i = 0; i < 4; i++)
    {
        // Set up Character parameters
        var params = {
            "Name": names[i].name, 
            "Pronouns": pickRandom(names[i].pronouns),
            "Weapons": weaponDistribution()
        };
        console.log(params["Weapons"]);
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
        };
        g.setNode("Town " + i, TownDetails);
        g.setEdge(currentNode, "Town " + i);
        g.setNode("Dungeon " + i, DungeonDetails);
        g.setEdge("Town " + i, "Dungeon " + i);
        currentNode = "Dungeon " + i;
    }

    g.setEdge(currentNode, "Plot End");

    console.log(g.outEdges("Weapons"));
    return g;
}

function weaponDistribution() {
    var outArray = pickAtMost(WEAPON_TYPES, 3);
    const DIE_ROLL = Math.random();
    
    if (DIE_ROLL <= .5)
    {
        return [outArray[0]];
    }

    return outArray;
}

function generateGameProperties() {
    return {};
};