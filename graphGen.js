
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

    var characterCount = 4;
    var names = pickWithoutReplacement(characterIdentities, characterCount);

    for (var i = 0; i < 4; i++)
    {
        // Set up Character parameters
        var params = {
            "Name": names[i].name, 
            "Pronouns": pickRandom(names[i].pronouns),
            "Weapons": pickAtMost(WEAPON_TYPES, 3)
        };
        var nodeName = "Character " + i;
        g.setNode(nodeName, params);
        g.setEdge("Characters", nodeName);
    }

    // Item Nodes
    // Start Node
    // Loops
    // End Node
}

function generateGameProperties() {
    return {};
};