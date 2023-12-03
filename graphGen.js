
// graphSize is the number of town-dungeon pairs we wanna generate
function generateGraph(graphSize)
{
    var g = new graphlib.Graph();

    // These are orienting / category nodes
    // Useful for getting easy access to classes of objects
    g.setNode("Characters");
    g.setNode("Plot Start");
    g.setNode("Plot End");

    for (var i = 0; i < 4; i++)
    {
        // Set up Character parameters
        var params = {};
        var nodeName = "Character " + i;
        g.setNode(nodeName, params);
        g.setEdge("Characters", nodeName);
    }


    // To make:
    // Character Nodes
    // Item Nodes
    // Start Node
    // Loops
    // End Node
}